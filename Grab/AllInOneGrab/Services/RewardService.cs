using AllInOneGrab.Common;
using AllInOneGrab.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AllInOneGrab.Services
{
    public class RewardService : IRewardService
    {
        public RewardResponse getRewards(Request request)
        {
            RewardResponse rewardResponse = new RewardResponse();
            try
            {

                string response = CommonHelper.getRequest(request);
                if (!string.IsNullOrEmpty(response))
                {
                    rewardResponse = JsonConvert.DeserializeObject<RewardResponse>(response);

                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("exception while getting rewards. exception is :"+ ex.Message);
            }
            return rewardResponse;
        }

        public string reedemRewards(Request request)
        {
            try
            {

                int response = CommonHelper.postRequest(request);
                if (response!=200)
                {
                    return "Sorry something went wrong, please try again";

                }
            }
            catch
            {
                return "Sorry something went wrong, please try again";
            }
            return "Success";
        }
    }
}