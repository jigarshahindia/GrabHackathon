package api

import (
	"github.com/gorilla/mux"
	"net/http"
	"rewardSystem/config"
	"rewardSystem/db"
	"strings"
)

func REDEEM_REWARD_FOR_USER(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	userId := vars["user_id"]
	rewardType := strings.ToUpper(r.FormValue("reward_type"))
	rewardSubType := strings.ToUpper(r.FormValue("reward_subtype"))
	rewardValue := r.FormValue("reward_value")
	if rewardType == "" || rewardValue == "" || rewardSubType == "" {
		w.WriteHeader(http.StatusBadRequest)
		return
	}
	rewardType = strings.ToUpper(rewardType)
	success, _ := db.RedeemReward(userId, rewardType, rewardSubType, rewardValue, config.CONFIG_URL)
	if !success {
		w.WriteHeader(http.StatusInternalServerError)
		return
	} else {
		w.WriteHeader(http.StatusOK)
		w.Header().Set("Content-Type", "application/json")
		return
	}
}
