using FaleMais.Models;
using FaleMais.Util;
using System.Text.Json;
using Xunit;

namespace FaleMaisTest
{
    public class CostRelationTest
    {

        CostRelationUtil costRelationUtil;

        public CostRelationTest()
        {
            costRelationUtil = new CostRelationUtil();
        }

        [Fact]
        public void Post_WhenCalled_ReturnsCostRelation()
        {
            
            CostRelation costRelation = new() { CodeOrigin = 18, CodeFate = 11 };

            var result = costRelationUtil.CostRelation(costRelation);

            var item = Assert.IsType<double>(result);
            Assert.Equal(1.9, result);
            
        }

        [Fact]
        public void Post_WhenCalled_ReturnsCostCall()
        {

            CostCall costCall = new() { CodeOrigin = 18, CodeFate = 11, Product = 120, TotalMinute = 200 };

            var result = costRelationUtil.CostCall(costCall);

            var item = Assert.IsType<string>(result);

            ProductRelation productRelation = JsonSerializer.Deserialize<ProductRelation>(result);

            bool valid = false;

            if (productRelation != null) { 
                valid = (productRelation.WithoutProduct == 380 && productRelation.WithProduct == 167.2);
            }

            Assert.True(valid);

        }

    }
}
