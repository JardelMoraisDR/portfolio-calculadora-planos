using FaleMais.Models;
using FaleMais.Util;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace FaleMais.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CostRelationController : ControllerBase
    {

        private readonly ILogger<CostRelationController> _logger;

        public CostRelationController(ILogger<CostRelationController> logger)
        {
            _logger = logger;
        }

        // POST api/CostRelation
        [HttpPost]
        public double Post([FromForm] CostRelation costRelation)
        {
            CostRelationUtil costRelationUtil = new CostRelationUtil();
            return costRelationUtil.CostRelation(costRelation);
        }

    }
}
