using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyStock.Models;

namespace MyStock.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class SubCategoriasController : ControllerBase
    {
        private readonly AppDbContext _context;

        public SubCategoriasController(AppDbContext context)
        {
            _context = context; 
        }

        [HttpGet]
        public async Task<ActionResult> ListarTodos()
        {
            var model = await _context.subCategorias.ToListAsync();
            return Ok(model);
        }
        [HttpPost]
        public async Task<ActionResult> Criar(SubCategoria model)
        {

            _context.subCategorias.Add(model);
            await _context.SaveChangesAsync();

            return CreatedAtAction("PesquisarPorId", new { id = model.Id }, model);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> PesquisarPorId(int id)
        {
            var model = await _context.subCategorias
                .FirstOrDefaultAsync(c => c.Id == id);

            if (model == null) return NotFound();

            return Ok(model);

        }
        [HttpPut("{id}")]
        public async Task<ActionResult> Atualizar(int id, SubCategoria model)
        {
            if (id != model.Id) return BadRequest();

            var modelo = await _context.subCategorias.AsNoTracking().
                FirstOrDefaultAsync(c => c.Id == id);

            if (modelo == null) return BadRequest();

            _context.subCategorias.Update(model);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Deletar(int id)
        {
            var model = await _context.subCategorias.FindAsync(id);

            if (model == null) return NotFound();

            _context.subCategorias.Remove(model);
            _context.SaveChanges();

            return Ok();
        }

    }
}
