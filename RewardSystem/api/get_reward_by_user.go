package api

import (
	"encoding/json"
	"github.com/gorilla/mux"
	"net/http"
	"rewardSystem/config"
	"rewardSystem/db"
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
			rewards = append(rewards, Reward{
				RewardType:    rows[i].RewardType,
				RewardValue:   rows[i].RewardValue,
				RewardSubType: rows[i].RewardSubType,
			})
		}
		w.WriteHeader(http.StatusOK)
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(GetRewardByUserResponse{Rewards: rewards, UserId: userId})
		return
	}
}
