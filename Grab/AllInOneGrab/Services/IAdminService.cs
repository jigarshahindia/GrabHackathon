using AllInOneGrab.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AllInOneGrab.Services
{
    public interface IAdminService
    {
        TransSummary getTransactionSummary(Request request);
    }
}