using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AllInOneGrab.Models
{
    
    public class Reward
    {
        public string reward_type { get; set; }
        public string reward_subtype { get; set; }
        public decimal reward_value { get; set; }
    }

    public class RewardResponse
    {
        public List<Reward> rewards { get; set; }
        public string user_id { get; set; }
    }
}