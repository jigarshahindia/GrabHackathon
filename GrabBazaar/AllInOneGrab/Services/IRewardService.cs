using AllInOneGrab.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AllInOneGrab.Services
{
    public interface IRewardService
    {
        RewardResponse getRewards(Request request);
        string reedemRewards(Request request);
    }
}
