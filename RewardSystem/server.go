package main

import (
	"fmt"
	"github.com/kelseyhightower/envconfig"
	"log"
	"net/http"
	rewardconfig "rewardSystem/config"
	handler2 "rewardSystem/handler"
	"rewardSystem/stream"
)

func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hi there, I love %s!", r.URL.Path[1:])
}

func main() {
	var config rewardconfig.Config
	err := envconfig.Process("rewardsystem", &config)
	if err != nil {
		log.Fatal(err.Error())
	}
	fmt.Println(config)

	// Migrate Postgres Tables
	postgresDB := rewardconfig.PostgresConfig(config.PostgresHost, config.PostgresPort, config.PostgresUsername, config.PostgresPassword, config.PostgresDB)
	handler2.Migrate(postgresDB)
	
	kafkaConfig := rewardconfig.KafkaConfig(config.KafkaBrokers, config.KafkaGroupId, config.KafkaTopic)
	go stream.Consume(kafkaConfig, postgresDB)

	http.HandleFunc("/", handler)
	log.Fatal(http.ListenAndServe(":8080", nil))
}
