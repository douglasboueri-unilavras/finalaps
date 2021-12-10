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


        [HttpDelete]
        public string excluir([FromBody]int id)
        {
            Produto dados = contexto.Produto.FirstOrDefault(p => p.Id == id);
            if (dados == null)
            {
                return "Não foi encontrado PRODUTO para o ID informado!";
            }
            else
            {
                contexto.Remove(dados);
                contexto.SaveChanges();
        
                return "PRODUTO excluído com sucesso!";
            }
        }

        [HttpPost]
        public Produto create([FromBody]Produto produto)
        {
                      
            Produto produtosalvo = contexto.Add(produto).Entity;
            contexto.SaveChanges();
            return produtosalvo;
        }

        
    }
}