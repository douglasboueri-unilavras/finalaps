using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using projetofinalAPS.Models;
 
namespace projetofinalAPS.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class ProdutoController : ControllerBase
    {
        private BDContexto contexto;
        
        public ProdutoController(BDContexto bdContexto)
        {
            contexto = bdContexto;
        }
        
        [HttpGet]
        public List<Produto> Listar()
        {
            return contexto.Produto.ToList();
        }
    }
}