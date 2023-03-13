using Microsoft.EntityFrameworkCore;

namespace MyStock.Models
{
    public class AppDbContext : DbContext
    {
        

        public AppDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Produto> produtos { get; set; }
        public DbSet<Categoria> categorias { get; set; }
        public DbSet<SubCategoria> subCategorias { get; set; }

        public DbSet<Usuario> usuarios { get; set; }
    }
}
