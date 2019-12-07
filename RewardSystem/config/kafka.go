package config

import (
	"github.com/segmentio/kafka-go"
)

func KafkaConfig(brokers []string, kafkaClientId, kafkaTopic string) kafka.ReaderConfig {
	config := kafka.ReaderConfig{
		Brokers: brokers,
		GroupID: kafkaClientId,
		Topic:   kafkaTopic,
	}
	return config
}


