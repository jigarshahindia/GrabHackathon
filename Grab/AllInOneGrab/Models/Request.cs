using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AllInOneGrab.Models
{
    public class Request
    {
        public string apiName { get; set; }
        public Dictionary<string, string> queryStringParam { get; set; }
        public Dictionary<string, string> headers { get; set; }
        public RewardResponse rewardResponse { get; set; }

    }
}