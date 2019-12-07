package config

import "fmt"

var CONFIG_URL = ""

func PostgresConfig(host string, port int64, user, password, dbName string) string {
	dbinfo := fmt.Sprintf("host=%s port=%d user=%s "+
		"dbname=%s sslmode=disable",
		host, port, user, dbName)
	CONFIG_URL = dbinfo
	return dbinfo
}
