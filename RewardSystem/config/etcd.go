package config

import "go.etcd.io/etcd/client"

var KeysApi client.KeysAPI

func ETCDCONFIG(endpoints []string) {
	cfg := client.Config{
		Endpoints: endpoints,
	}
	c, _ := client.New(cfg)
	KeysApi = client.NewKeysAPI(c)
}
