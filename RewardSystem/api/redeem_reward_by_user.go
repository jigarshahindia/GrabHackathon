package api

import (
	"context"
	"encoding/json"
	"fmt"
	"github.com/gorilla/mux"
	"log"
	"net/http"
	"rewardSystem/config"
	"rewardSystem/db"
	"strconv"
	"strings"
)

func REDEEM_REWARD_FOR_USER(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	userId := vars["user_id"]

	decoder := json.NewDecoder(r.Body)
	var request GetRewardByUserResponse
	err := decoder.Decode(&request)
	if err != nil {
		fmt.Println(err)
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	fmt.Println(request)
	reward := request.Rewards[0]
	rewardType := strings.ToUpper(reward.RewardType)
	rewardSubType := strings.ToUpper(reward.RewardSubType)
	rewardValue := reward.RewardValue
	if rewardType == "" || rewardSubType == "" {
		w.WriteHeader(http.StatusBadRequest)
		return
	}
	rewardType = strings.ToUpper(rewardType)

	conversion := 100
	key := rewardType + "|" + rewardSubType
	resp, err := config.KeysApi.Get(context.Background(), key, nil)
	if err == nil {
		log.Printf("%q key has %q value\n", resp.Node.Key, resp.Node.Value)
		conversion, _ = strconv.Atoi(resp.Node.Value)
	}
	success, _ := db.RedeemReward(userId, rewardType, rewardSubType, rewardValue*float64(conversion), config.CONFIG_URL)
	if !success {
		w.WriteHeader(http.StatusInternalServerError)
		return
	} else {
		w.WriteHeader(http.StatusOK)
		w.Header().Set("Content-Type", "application/json")
		return
	}
}
