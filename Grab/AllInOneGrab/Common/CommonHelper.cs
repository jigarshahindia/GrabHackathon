using AllInOneGrab.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Web.Configuration;

namespace AllInOneGrab.Common
{
    public class CommonHelper
    {
        private static string apiBaseUrl = WebConfigurationManager.AppSettings["apiBaseUrl"];
        private static string userName = WebConfigurationManager.AppSettings["apiUserName"];
        private static string password = WebConfigurationManager.AppSettings["apiPassword"];
        public static string getRequest(Request request)
        {
            string responseString = string.Empty;
            try
            {
                using (HttpClient client = new HttpClient())
                {
                    client.BaseAddress = new Uri(apiBaseUrl);
                    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                    //var byteArray = Encoding.ASCII.GetBytes(userName + ":" + password);
                    //client.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Basic", Convert.ToBase64String(byteArray));

                    if (request.headers != null && request.headers.Count > 0)
                    {
                        foreach (KeyValuePair<string, string> entry in request.headers)
                        {
                            client.DefaultRequestHeaders.Add(entry.Key, entry.Value);
                        }

                    }

                    HttpResponseMessage response = client.GetAsync(request.apiName).Result;  // Blocking call!    
                    if (response.IsSuccessStatusCode)
                    {
                        var res = response.Content.ReadAsStringAsync().Result;
                        responseString = (string)res;
                    }
                    else
                    {
                        Console.WriteLine("{0} ({1})", (int)response.StatusCode, response.ReasonPhrase);
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Exception while calling api get service. exception is :" + ex.Message);
            }
            return responseString;
        }


        public static int postRequest(Request request)
        {
            int statusCode=0 ;
            try
            {
                using (var client = new HttpClient())
                {
                    client.BaseAddress = new Uri(apiBaseUrl);
                    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                    //var byteArray = Encoding.ASCII.GetBytes(userName + ":" + password);
                    //client.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Basic", Convert.ToBase64String(byteArray));

                    if (request.headers != null && request.headers.Count > 0)
                    {
                        foreach (KeyValuePair<string, string> entry in request.headers)
                        {
                            client.DefaultRequestHeaders.Add(entry.Key, entry.Value);
                        }

                    }

                    var response = client.PostAsJsonAsync(request.apiName, request.rewardResponse).Result;  // Blocking call!    
                    if (response.IsSuccessStatusCode)
                    {
                        var res = response.Content.ReadAsStringAsync().Result;
                        statusCode = (int)response.StatusCode;
                    }
                    else
                    {
                        statusCode = (int)response.StatusCode;
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Exception while calling api get service. exception is :" + ex.Message);
            }
            return statusCode;
        }
    }
}