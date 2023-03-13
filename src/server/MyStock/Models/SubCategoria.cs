using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MyStock.Models
{
    [Table("SubCategorias")]
    public class SubCategoria
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Nome { get; set; }
        public int CategoriaId { get; set; }

        public Categoria Categoria { get; set; }

        public ICollection<Produto> Produto { get; set; }

        

    }
}
