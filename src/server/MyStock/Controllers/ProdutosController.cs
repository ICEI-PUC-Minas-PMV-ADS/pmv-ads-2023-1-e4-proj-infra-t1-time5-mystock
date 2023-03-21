using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MyStock.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;

namespace MyStock.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProdutosController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ProdutosController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult> ListarTodos()
        {
            var model = await _context.produtos.ToListAsync();
            return Ok(model);
        }
        [HttpPost]
        public async Task<ActionResult> Criar(Produto model)
        {

            _context.produtos.Add(model);
            await _context.SaveChangesAsync();

            return CreatedAtAction("PesquisarPorId", new { id = model.Id }, model);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> PesquisarPorId(int id)
        {
            var model = await _context.produtos
                .FirstOrDefaultAsync(c => c.Id == id);

            if (model == null) return NotFound();

            return Ok(model);

        }
        [HttpPut("{id}")]
        public async Task<ActionResult> Atualizar(int id, Produto model)
        {
            if (id != model.Id) return BadRequest();

            var modelo = await _context.produtos.AsNoTracking().
                FirstOrDefaultAsync(c => c.Id == id);

            if (modelo == null) return BadRequest();

            _context.produtos.Update(model);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Deletar(int id)
        {
            var model = await _context.produtos.FindAsync(id);

            if (model == null) return NotFound();

            _context.produtos.Remove(model);
            _context.SaveChanges();

            return Ok();
        }


    }
}
