package api

type Reward struct {
	RewardType    string  `json:"reward_type"`
	RewardSubType string  `json:"reward_subtype"`
	RewardValue   float64 `json:"reward_value"`
}
type GetRewardByUserResponse struct {
	Rewards []Reward `json:"rewards"`
	UserId  string   `json:"user_id"`
}
