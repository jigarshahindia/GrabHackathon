package handler

import (
	"database/sql"
	"fmt"
	"github.com/golang-migrate/migrate/v4"
	"github.com/golang-migrate/migrate/v4/database/postgres"
	_ "github.com/golang-migrate/migrate/v4/source/file"
	"log"
)

const (
	REWARD_TABLE_NAME = "user_reward"
)

func Migrate(postgresDBConfig string) {
	db, _ := sql.Open("postgres", postgresDBConfig)
	driver, _ := postgres.WithInstance(db, &postgres.Config{})
	m, err := migrate.NewWithDatabaseInstance(
		"file://migrations",
		"reward", driver)
	fmt.Println(err)
	m.Steps(2)
}

func SaveRewardMessage(message Message, postgresDBConfig string) {
	fmt.Println(message)
	if message.RewardType == "" || message.RewardValue == 0 || message.UserId == "" {
		return
	}
	db, err := sql.Open("postgres", postgresDBConfig)
	if err != nil {
		panic(err)
	}
	defer db.Close()
	_, err = db.Exec("INSERT INTO "+REWARD_TABLE_NAME+"(user_id, reward_type, reward_value) VALUES($1, $2, $3)"+
		" ON CONFLICT (user_id, reward_type) DO UPDATE "+
		"SET reward_value = EXCLUDED.reward_value + user_reward.reward_value, updated_at = current_timestamp;", message.UserId, message.RewardType, message.RewardValue)
	if err != nil {
		log.Fatal(err)
	}
}
