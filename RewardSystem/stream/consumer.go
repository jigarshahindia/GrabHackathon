package stream

import (
	"context"
	"encoding/json"
	"fmt"
	"github.com/segmentio/kafka-go"
	"rewardSystem/db"
	"rewardSystem/model"
)

func Consume(kafkaConfig kafka.ReaderConfig, postgresDBConfig string) {
	r := kafka.NewReader(kafkaConfig)
	for {
		m, err := r.ReadMessage(context.Background())
		if err != nil {
			break
		}
		rewardMessage := model.Message{}
		fmt.Println(string(m.Value))
		json.Unmarshal(m.Value, &rewardMessage)
		db.SaveRewardMessage(rewardMessage, postgresDBConfig)
	}
	r.Close()
}
