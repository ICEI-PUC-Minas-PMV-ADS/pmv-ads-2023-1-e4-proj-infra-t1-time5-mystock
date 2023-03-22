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
        [Required]
        public int CategoriaId { get; set; }

        

        public ICollection<Produto>? Produtos { get; set; }

        

    }
}
