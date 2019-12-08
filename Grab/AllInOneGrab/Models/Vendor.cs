using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AllInOneGrab.Models
{
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