package api

import (
	"context"
	"encoding/json"
	"github.com/gorilla/mux"
	"log"
	"net/http"
	"rewardSystem/config"
	"rewardSystem/db"
	"strconv"
	"strings"
)

func GET_REWARD_BY_USER(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	userId := vars["user_id"]
	rewardType := strings.ToUpper(r.FormValue("reward_type"))
	rewardSubtype := strings.ToUpper(r.FormValue("reward_subtype"))

	if rewardType == "" || rewardSubtype == "" {
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
	rows, err := db.GetRewards(userId, rewardType, rewardSubtype, config.CONFIG_URL)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
		return
	} else {
		rewards := []Reward{}
		for i, _ := range rows {
			conversion := 100
			key := rows[i].RewardType + "|" + rows[i].RewardSubType
			resp, err := config.KeysApi.Get(context.Background(), key, nil)
			if err == nil {
				log.Printf("%q key has %q value\n", resp.Node.Key, resp.Node.Value)
				conversion, _ = strconv.Atoi(resp.Node.Value)
			}
			rewards = append(rewards, Reward{
				RewardType:    rows[i].RewardType,
				RewardValue:   rows[i].RewardValue / float64(conversion),
				RewardSubType: rows[i].RewardSubType,
			})
		}
		w.WriteHeader(http.StatusOK)
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(GetRewardByUserResponse{Rewards: rewards, UserId: userId})
		return
	}
}
