using FaleMais.Models;

namespace FaleMais.Services
{
    public interface ICostRelation 
    {

        double CostRelation(CostRelation costRelation);

        string CostCall(CostCall costCall);       

    }
}