package api

type AggregatedReward struct {
	RewardType    string
	RewardSubtype string
	CountOfUser   int
	AverageReward float64
}

type Merchant struct {
	Data []AggregatedReward
}
