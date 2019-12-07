package model

import (
	_ "github.com/lib/pq"
)

type Message struct {
	UserId        string  `json:"user_id,omitempty"`
	RewardType    string  `json:"reward_type,omitempty"`
	RewardSubType string  `json:"reward_subtype,omitempty"`
	RewardValue   float64 `json:"reward_value,omitempty"`
}

/*
{"user_id":"1", "reward_type":"FOOD","reward_subtype":"COMPLETIONS", "reward_value":32, "timestamp":"1575731732"}
*/
