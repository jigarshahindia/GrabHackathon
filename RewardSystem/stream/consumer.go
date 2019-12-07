package stream

import (
	"context"
	"encoding/json"
	"fmt"
	"github.com/segmentio/kafka-go"
	"rewardSystem/handler"
)

func Consume(kafkaConfig kafka.ReaderConfig, postgresDBConfig string) {
	fmt.Println(postgresDBConfig)
	r := kafka.NewReader(kafkaConfig)
	for {
		m, err := r.ReadMessage(context.Background())
		if err != nil {
			break
		}
		rewardMessage := handler.Message{}
		json.Unmarshal(m.Value, &rewardMessage)
		fmt.Println(rewardMessage)
		handler.SaveRewardMessage(rewardMessage, postgresDBConfig)
	}
	r.Close()
}
