using AllInOneGrab.Models;
using AllInOneGrab.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace AllInOneGrab.Admin
{
    public partial class TransactionSummary : System.Web.UI.Page
    {
        static IAdminService adminService;
        public TransactionSummary()
        {
            adminService = new AdminService();
        }
        protected void Page_Load(object sender, EventArgs e)
        {

        }


        [WebMethod]
        public static string GetTransactionSummary()
        {

            StringBuilder sb = new StringBuilder();

            Request request = new Request();
            request.apiName = "reward_system/v1/merchant";


            TransSummary transSummary = adminService.getTransactionSummary(request);

            if (transSummary != null && transSummary.Data != null && transSummary.Data.Count > 0)
            {
                sb.Append("<table class=\"table table-striped\">");
                sb.Append("        <thead>");
                sb.Append("            <tr>");
                sb.Append("                <th scope=\"col\">#</th>");
                sb.Append("                <th scope=\"col\">RewardType</th>");
                sb.Append("                <th scope=\"col\">RewardSubtype</th>");
                sb.Append("                <th scope=\"col\">CountOfUser</th>");
                sb.Append("                <th scope=\"col\">AverageReward</th>");
                sb.Append("            </tr>");
                sb.Append("        </thead>");
                sb.Append("        <tbody>");
                int count = 1;
                foreach (Data data in transSummary.Data)
                {

                    sb.Append("            <tr>");
                    sb.Append("                <th scope=\"row\">" + count + "</th>");
                    sb.Append("                <td>" + data.RewardType + "</td>");
                    sb.Append("                <td>" + data.RewardSubtype + "</td>");
                    sb.Append("                <td>" + data.CountOfUser + "</td>");
                    sb.Append("                <td>" + data.AverageReward + "</td>");
                    sb.Append("            </tr>");
                    count++;

                }
                sb.Append("        </tbody>");
                sb.Append("    </table>");
            }

            return sb.ToString();

        }
    }
}