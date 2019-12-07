package main

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"github.com/kelseyhightower/envconfig"
	"github.com/segmentio/kafka-go"
	"log"
	"math/rand"
	"os"
	config2 "rewardSystem/config"
	"rewardSystem/model"
	"strconv"
)

func main() {
	argsWithoutProg := os.Args[1:]

	fmt.Println(argsWithoutProg)
	rewardType := argsWithoutProg[0]
	noOfUser, _ := strconv.Atoi(argsWithoutProg[1])
	var config config2.Config
	err := envconfig.Process("rewardsystem", &config)
	if err != nil {
		log.Fatal(err.Error())
	}
	w := kafka.NewWriter(kafka.WriterConfig{
		Brokers:  []string{"localhost:9092"},
		Topic:    config.KafkaTopic,
		Balancer: &kafka.Hash{},
	})
	fmt.Println(kafka.WriterConfig{
		Brokers:  []string{"localhost:9092"},
		Topic:    config.KafkaTopic,
		Balancer: &kafka.Hash{},
	})
	defer w.Close()
	userId := 0
	for i := 1; i <= noOfUser; i++ {
		userId = userId + 1
		completionsMessage := &model.Message{
			UserId:        strconv.Itoa(userId),
			RewardType:    rewardType,
			RewardSubType: "COMPLETIONS",
			RewardValue:   float64(rand.Int31n(30)),
		}
		reqBodyBytes := new(bytes.Buffer)
		_ = json.NewEncoder(reqBodyBytes).Encode(completionsMessage)

		timeSpendMessage := &model.Message{
			UserId:        strconv.Itoa(userId),
			RewardType:    rewardType,
			RewardSubType: "TIMESPENT",
			RewardValue:   float64(rand.Int31n(1000)),
		}
		reqBodyBytes1 := new(bytes.Buffer)
		_ = json.NewEncoder(reqBodyBytes1).Encode(timeSpendMessage)

		err = w.WriteMessages(context.Background(),
			kafka.Message{
				Key:   []byte("Key-A"),
				Value: reqBodyBytes.Bytes(),
			},
			kafka.Message{
				Key:   []byte("Key-B"),
				Value: reqBodyBytes1.Bytes(),
			})
	}
}
