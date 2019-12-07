package main

import (
	"fmt"
	"github.com/gorilla/mux"
	"github.com/kelseyhightower/envconfig"
	"log"
	"net/http"
	"rewardSystem/api"
	rewardconfig "rewardSystem/config"
	"rewardSystem/stream"
	"time"
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
	//db.Migrate(postgresDB)

	kafkaConfig := rewardconfig.KafkaConfig(config.KafkaBrokers, config.KafkaGroupId, config.KafkaTopic)
	go stream.Consume(kafkaConfig, postgresDB)

	r := mux.NewRouter()
	r.HandleFunc("/reward_system/v1/{user_id}/rewards", api.GET_REWARD_BY_USER).Methods("GET")
	r.HandleFunc("/reward_system/v1/{user_id}/reward/redeem", api.REDEEM_REWARD_FOR_USER).Methods("POST")

	srv := &http.Server{
		Handler: r,
		Addr:    "127.0.0.1:8000",
		// Good practice: enforce timeouts for servers you create!
		WriteTimeout: 15 * time.Second,
		ReadTimeout:  15 * time.Second,
	}
	log.Fatal(srv.ListenAndServe())
}
