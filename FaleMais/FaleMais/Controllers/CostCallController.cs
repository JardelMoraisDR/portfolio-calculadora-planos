using FaleMais.Models;
using FaleMais.Util;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace FaleMais.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CostCallController : ControllerBase
    {

        private readonly ILogger<CostRelationController> _logger;

        public CostCallController(ILogger<CostRelationController> logger)
        {
            _logger = logger;
        }

        // POST api/CostCall
        [HttpPost]
        public string Post([FromForm] CostCall costCall)
        {
            CostRelationUtil costRelationUtil = new CostRelationUtil();
            return costRelationUtil.CostCall(costCall);
        }

    }
}
