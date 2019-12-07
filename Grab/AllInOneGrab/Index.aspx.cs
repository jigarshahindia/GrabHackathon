using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace AllInOneGrab
{
    public partial class Index : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }


        [WebMethod]
        public static string BindCategory(string category)
        {
            string type = "completion";
            List<Vendor> vendors = LoadJson(category, type);

            StringBuilder sb = new StringBuilder();
            sb.Append(" <center class=\"conf - top\">");
            sb.Append("<h4>" + type.ToUpper() + " VOUCHER LIST</h4> ");
            sb.Append("</ center >");
            if (vendors.Count > 0)
            {
                sb.Append(prepareHtml(category, vendors, type));
            }
            else
            {
                sb.Append("<section class=\"matches-sch-sec text-center\">");
                sb.Append("        <div class=\"container\">");
                sb.Append("            <h4>Sorry currently no vouchers are available for " + category.ToUpper() + " category</ h4 > ");
                sb.Append("            ");
                sb.Append("        </div>");
                sb.Append("</section>");

            }

            type = "timespent";
            List<Vendor> vendorTime = LoadJson(category, type);

            sb.Append(" <center class=\"conf - top\">");
            sb.Append("<h4>" + type.ToUpper() + " VOUCHER LIST</h4> ");
            sb.Append("</ center >");
            if (vendorTime.Count > 0)
            {
                sb.Append(prepareHtml(category, vendorTime, type));

            }
            else
            {
                sb.Append("<section class=\"matches-sch-sec text-center\">");
                sb.Append("        <div class=\"container\">");
                sb.Append("            <h4>Sorry currently no vouchers are available for " + category.ToUpper() + " category</ h4 > ");
                sb.Append("            ");
                sb.Append("        </div>");
                sb.Append("</section>");

            }

            return sb.ToString();
        }

        public static List<Vendor> LoadJson(string category, string type)
        {
            string path = System.AppDomain.CurrentDomain.BaseDirectory.ToString() + "Data\\" + category + "Vendor.json";
            VendorList vendors = new VendorList();
            List<Vendor> lstVendor = new List<Vendor>();
            if (category == "all" || category == "food" || category == "transfort")
            {
                using (StreamReader r = new StreamReader(path))
                {
                    string json = r.ReadToEnd();
                    vendors = JsonConvert.DeserializeObject<VendorList>(json);
                    lstVendor = vendors.Vendors;
                    if (lstVendor != null && lstVendor.Count > 0)
                    {
                        lstVendor = lstVendor.Where(o => o.category == category && o.type == type).ToList();
                    }
                }
            }

            return lstVendor;
        }

        private static StringBuilder prepareHtml(string category, List<Vendor> vendors, string type)
        {
            decimal apiValue = 100;// getUsersRewardByCategory(category);
            string disabled = "disabled";
            StringBuilder sb = new StringBuilder();


            sb.Append("<div class=\"row\">");

            foreach (Vendor vendor in vendors)
            {
                sb.Append(" <div class=\"col-md-4 col-sm-4\">");
                sb.Append(" <div class=\"venue-cell\">");
                sb.Append(" <a href=\"#\">");
                sb.Append(" <div class=\"venue-opp\">");
                sb.Append(vendor.name);
                sb.Append(" <small>price : $" + vendor.price + "</small>");
                sb.Append("<small>earned : $" + apiValue + "</small>");
                if (vendor.price - apiValue > 0)
                {
                    sb.Append("<small>required : $" + (vendor.price - apiValue) + "</small>");
                }
                sb.Append(" </div>");
                sb.Append(" <img src=\"" + vendor.imageurl + "\" width=\"425\" height=\"162\" class=\"img-responsive\">");
                sb.Append(" </a>");
                if (apiValue >= vendor.price)
                    disabled = "";
                sb.Append(" <a href=\"#\" class=\"btn btn-primary btn-block\" " + disabled + ">REEDEM</a>");
                sb.Append(" </div>");
                sb.Append(" </div>");
            }
            sb.Append(" </div>");
            return sb;
        }


    }


    public class Vendor
    {
        public string name { get; set; }
        public int price { get; set; }
        public string imageurl { get; set; }
        public string category { get; set; }
        public string type { get; set; }
    }

    public class VendorList
    {
        public List<Vendor> Vendors { get; set; }
    }


}