using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AllInOneGrab.Models
{
    public class TransSummary
    {
        public List<Data> Data { get; set; }
    }

    public class Data
    {
        public string RewardType { get; set; }
        public string RewardSubtype { get; set; }
        public int CountOfUser { get; set; }
        public double AverageReward { get; set; }
    }
}