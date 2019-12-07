package handler

import (
	_ "github.com/lib/pq"
	"time"
)

type Message struct {
	UserId      string    `json:"user_id,omitempty"`
	RewardType  string    `json:"reward_type,omitempty"`
	RewardValue float64   `json:"reward_value,omitempty"`
	TimeStamp   time.Time `json:"timestamp,omitempty"`
}

/*
{"user_id":"1", "reward_type":"hello", "reward_value":32, "timestamp":"1575731732"}
*/
