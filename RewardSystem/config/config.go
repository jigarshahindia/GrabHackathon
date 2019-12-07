package config

type Config struct {
	KafkaBrokers []string
	KafkaGroupId string
	KafkaTopic   string

	PostgresHost     string
	PostgresPort     int64
	PostgresUsername string
	PostgresPassword string
	PostgresDB       string

	ETCDHOST []string
}
