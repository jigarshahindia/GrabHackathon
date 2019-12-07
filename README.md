# Description

The idea is to increase user interaction and thereby wallet usage by providing a way to map each interactions of users on product in some form of Reward. Then OmniReward SDK System to integrate third party applications and services in the system using Reward points generated to give services/advantages to users.

##Prerequisites

###RewardSystem and RewardSDK

DB:- Postgres, Etcd

Stream:- Apache Kafka

Golang

###Grab Bazar
js

#Architecture Diagram
![Architecture](images/architecture.png)

##Components
####RewardSystem
1. Any product Interaction can we mapped to reward system.
2. This system stream the data from Kafka from reward-topic
3. Proto for Kafka Value {"user_id":"1", "reward_type":"FOOD","reward_subtype":"COMPLETION", "reward_value":32}
4. POSSIBLE REWARD_TYPE SUPPORTED

    a. TRANSPORT,FOOD,PAY,DELIVERY,TICKETS,HOTELS,VIDEOS
    
    b. Each of REWARD_TYPE will have sub_type as of COMPLETION,TIMESPENT
5. The each interaction of user is saved in Postgres DB
####RewardSDK
1. This Exposes API for /get-rewards bases on Type and Subtype
2. This Exposes API for /redeem.
3. The conversion rate for each of TYPE is stored in etcd (This is a dynamic configuration). The Dynamic configuration of each converison from Transaction Value to Points can be updated.
####Grab Bazar

#What can be improved in me
1. A Good user login flow
2. Making sure valid third-party apps signup for using RewardSDK system
3. API Documentation


##Hacks Commands

1 `. ./env && go run scripts/user_interaction.go <REWARD_TYPE> <NUMBER_OF_USER>`

2. `etcdctl set /<REWARD_TYPE>\|<REWARD_SUBTYPE> 10`