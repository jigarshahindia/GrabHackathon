using AllInOneGrab.Common;
using AllInOneGrab.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AllInOneGrab.Services
{
    public class AdminService : IAdminService
    {
        public TransSummary getTransactionSummary(Request request)
        {
            TransSummary transSummary = new TransSummary();
            try
            {

                string response = CommonHelper.getRequest(request);
                if (!string.IsNullOrEmpty(response))
                {
                    transSummary = JsonConvert.DeserializeObject<TransSummary>(response);

                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("exception while getting rewards. exception is :" + ex.Message);
            }
            return transSummary;
        }

    }
}
