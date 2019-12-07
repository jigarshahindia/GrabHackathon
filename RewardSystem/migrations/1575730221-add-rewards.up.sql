CREATE TABLE IF NOT EXISTS user_reward (
    user_id varchar(50),
    reward_type varchar(50),
    reward_subtype varchar(50),
    reward_value INTEGER,
    updated_at timestamp default now(),
    UNIQUE(user_id, reward_type, reward_subtype)
);