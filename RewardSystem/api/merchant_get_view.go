package api

import (
	"encoding/json"
	"net/http"
	"rewardSystem/config"
	"rewardSystem/db"
)

func MERCHANT_GET_VIEW(w http.ResponseWriter, r *http.Request) {
	rows, err := db.GetMerchantView(config.CONFIG_URL)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
		return
	} else {
		rewards := []AggregatedReward{}
		for i, _ := range rows {
			rewards = append(rewards, AggregatedReward{
				RewardType:    rows[i].RewardType,
				RewardSubtype: rows[i].RewardSubtype,
				CountOfUser:   rows[i].CountOfUser,
				AverageReward: rows[i].TotalReward / float64(rows[i].CountOfUser),
			})
		}
		w.WriteHeader(http.StatusOK)
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(Merchant{Data: rewards})
		return
	}
}
