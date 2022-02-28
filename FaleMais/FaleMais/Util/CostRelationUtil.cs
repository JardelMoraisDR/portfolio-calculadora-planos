using FaleMais.Models;
using FaleMais.Services;
using System;
using System.Text.Json;

namespace FaleMais.Util
{
    public class CostRelationUtil : ICostRelation
    {
        public static readonly int[] EnabledCodes = new[] { 11, 16, 17, 18 };

        private static readonly CostRelation[] Summaries = new[]
        {
            new CostRelation{ CodeOrigin = 11, CodeFate = 11, MinuteCost = 0.5 },
            new CostRelation{ CodeOrigin = 11, CodeFate = 16, MinuteCost = 1.9 },
            new CostRelation{ CodeOrigin = 11, CodeFate = 17, MinuteCost = 1.7 },
            new CostRelation{ CodeOrigin = 11, CodeFate = 18, MinuteCost = 0.9 },
            new CostRelation{ CodeOrigin = 16, CodeFate = 11, MinuteCost = 2.9 },
            new CostRelation{ CodeOrigin = 16, CodeFate = 16, MinuteCost = 0.5 },
            new CostRelation{ CodeOrigin = 16, CodeFate = 17, MinuteCost = 1.2 },
            new CostRelation{ CodeOrigin = 16, CodeFate = 18, MinuteCost = 1.4 },
            new CostRelation{ CodeOrigin = 17, CodeFate = 11, MinuteCost = 2.7 },
            new CostRelation{ CodeOrigin = 17, CodeFate = 16, MinuteCost = 1.3 },
            new CostRelation{ CodeOrigin = 17, CodeFate = 17, MinuteCost = 0.4 },
            new CostRelation{ CodeOrigin = 17, CodeFate = 18, MinuteCost = 1.7 },
            new CostRelation{ CodeOrigin = 18, CodeFate = 11, MinuteCost = 1.9 },
            new CostRelation{ CodeOrigin = 18, CodeFate = 16, MinuteCost = 1.8 },
            new CostRelation{ CodeOrigin = 18, CodeFate = 17, MinuteCost = 1.2 },
            new CostRelation{ CodeOrigin = 18, CodeFate = 18, MinuteCost = 0.7 }
        };

        public double CostRelation(CostRelation costRelation)
        {

            foreach (CostRelation _costRelation in Summaries)
            {
                if (costRelation.CodeOrigin == _costRelation.CodeOrigin && costRelation.CodeFate == _costRelation.CodeFate)
                {
                    return _costRelation.MinuteCost;
                }
            }

            return 0;

        }

        public string CostCall(CostCall costCall)
        {

            if (Array.IndexOf(EnabledCodes, costCall.CodeOrigin) < 0 || Array.IndexOf(EnabledCodes, costCall.CodeFate) < 0)
            {
                return null;
            }
                        
            double costRelation = CostRelation(new CostRelation { CodeOrigin = costCall.CodeOrigin, CodeFate = costCall.CodeFate });

            double withProduct = costCall.TotalMinute - costCall.Product,
                   withoutProduct = costCall.TotalMinute * costRelation;

            if (withProduct > 0)
            {
                withProduct *= ((costRelation * 0.1) + costRelation);
            }
            else
            {
                withProduct = 0;
            }

            ProductRelation productRelation = new ProductRelation { WithProduct = withProduct, WithoutProduct = withoutProduct };
            return JsonSerializer.Serialize(productRelation);

        }

    }
}