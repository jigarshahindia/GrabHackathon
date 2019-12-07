using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Web;

namespace AllInOneGrab.Common
{
    public class CommonHelper
    {
        private static string baseURL = "http://localhost:11129/";
        public static string getRequest()
        {
            string responseString = string.Empty;
            HttpClient client = new HttpClient();
            client.BaseAddress = new Uri(baseURL);  
            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            // List all Names.    
            HttpResponseMessage response = client.GetAsync("api/Values").Result;  // Blocking call!    
            if (response.IsSuccessStatusCode)
            {
                var products = response.Content.ReadAsStringAsync().Result;
                responseString = (string)products;
            }
            else
            {
                Console.WriteLine("{0} ({1})", (int)response.StatusCode, response.ReasonPhrase);
            }
            return responseString;
        }
    }
}