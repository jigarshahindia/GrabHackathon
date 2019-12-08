package db

import (
	"database/sql"
	"errors"
	"fmt"
	"github.com/golang-migrate/migrate/v4"
	"github.com/golang-migrate/migrate/v4/database/postgres"
	_ "github.com/golang-migrate/migrate/v4/source/file"
	"log"
	"rewardSystem/model"
	"strings"
)

const (
	REWARD_TABLE_NAME = "user_reward"
)

func Migrate(postgresDBConfig string) {
	db, _ := sql.Open("postgres", postgresDBConfig)
	driver, _ := postgres.WithInstance(db, &postgres.Config{})
	m, _ := migrate.NewWithDatabaseInstance(
		"file://migrations",
		"reward", driver)
	m.Steps(2)
}

func GetMerchantView(postgresDB string) ([]model.AggregatedReward, error) {
	db, err := sql.Open("postgres", postgresDB)
	if err != nil {
		return nil, errors.New("Cannot Connect to Sql")
	}
	defer db.Close()
	rows, err := db.Query("SELECT reward_type, reward_subtype, COUNT(user_id), SUM(reward_value) FROM user_reward group by 1,2 order by 1,2")
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	userRewards := []model.AggregatedReward{}
	for rows.Next() {
		var rewardType string
		var rewardSubType string
		var totalUser int
		var totalReward float64
		rows.Scan(&rewardType, &rewardSubType, &totalUser, &totalReward)
		userRewards = append(userRewards, model.AggregatedReward{
			RewardType:    rewardType,
			RewardSubtype: rewardSubType,
			CountOfUser:   totalUser,
			TotalReward:   totalReward,
		})
	}
	return userRewards, nil
}

func RedeemReward(userId, rewardType, rewardSubType string, rewardValue float64, postgresDB string) (bool, error) {
	fmt.Println("update user_reward set reward_value = reward_value - $1 where user_id = $2 and reward_type = $3 and reward_value - $4 >= 0 and reward_subtype = $5", rewardValue, userId, rewardType, rewardValue, rewardSubType)
	db, err := sql.Open("postgres", postgresDB)
	if err != nil {
		panic(err)
	}
	defer db.Close()
	rows, err := db.Exec("update user_reward set reward_value = reward_value - $1 where user_id = $2 and reward_type = $3 and reward_value - $4 >= 0 and reward_subtype = $5", rewardValue, userId, rewardType, rewardValue, rewardSubType)
	effectedRows, _ := rows.RowsAffected()
	if err != nil || effectedRows == 0 {
		fmt.Println(err)
		return false, err
	}
	return true, nil
}

func GetRewards(userId, rewardType, rewardSubtype, postgresDB string) ([]model.Message, error) {
	db, err := sql.Open("postgres", postgresDB)
	if err != nil {
		return nil, errors.New("Cannot Connect to Sql")
	}
	defer db.Close()
	rows, err := db.Query("SELECT reward_type, reward_subtype, reward_value FROM user_reward where user_id = $1 and reward_type = $2 and reward_subtype = $3", userId, rewardType, rewardSubtype)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	userRewards := []model.Message{}
	for rows.Next() {
		var rewardType string
		var rewardSubType string
		var rewardValue float64
		rows.Scan(&rewardType, &rewardSubType, &rewardValue)
		userRewards = append(userRewards, model.Message{
			RewardType:    rewardType,
			RewardValue:   rewardValue,
			RewardSubType: rewardSubType,
		})
	}
	return userRewards, nil
}

func SaveRewardMessage(message model.Message, postgresDBConfig string) {
	if message.RewardType == "" || message.RewardValue == 0 || message.UserId == "" || message.RewardSubType == "" {
		return
	}
	db, err := sql.Open("postgres", postgresDBConfig)
	if err != nil {
		panic(err)
	}
	defer db.Close()
	_, err = db.Exec("INSERT INTO "+REWARD_TABLE_NAME+"(user_id, reward_type, reward_subtype, reward_value) VALUES($1, $2, $3, $4)"+
		" ON CONFLICT (user_id, reward_type, reward_subtype) DO UPDATE "+
		"SET reward_value = EXCLUDED.reward_value + user_reward.reward_value, updated_at = current_timestamp;", message.UserId, strings.ToUpper(message.RewardType), strings.ToUpper(message.RewardSubType), message.RewardValue)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("Saved")
}
