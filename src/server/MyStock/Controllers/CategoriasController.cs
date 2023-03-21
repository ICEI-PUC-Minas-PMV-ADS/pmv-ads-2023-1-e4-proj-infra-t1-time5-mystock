using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyStock.Models;

namespace MyStock.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriasController : ControllerBase
    {
        private readonly AppDbContext _context;

        public CategoriasController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult> ListarTodos()
        {
            var model = await _context.categorias.ToListAsync();
            return Ok(model);
        }
        [HttpPost]
        public async Task<ActionResult> Criar(Categoria model)
        {

            _context.categorias.Add(model);
            await _context.SaveChangesAsync();

            return CreatedAtAction("PesquisarPorId", new { id = model.Id }, model);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> PesquisarPorId(int id)
        {
            var model = await _context.categorias
                .FirstOrDefaultAsync(c => c.Id == id);

            if (model == null) return NotFound();

            return Ok(model);

        }
        [HttpPut("{id}")]
        public async Task<ActionResult> Atualizar(int id, Categoria model)
        {
            if (id != model.Id) return BadRequest();

            var modelo = await _context.categorias.AsNoTracking().
                FirstOrDefaultAsync(c => c.Id == id);

            if (modelo == null) return BadRequest();

            _context.categorias.Update(model);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Deletar(int id)
        {
            var model = await _context.categorias.FindAsync(id);

            if (model == null) return NotFound();

            _context.categorias.Remove(model);
            _context.SaveChanges();

            return Ok();
        }
    }
}
