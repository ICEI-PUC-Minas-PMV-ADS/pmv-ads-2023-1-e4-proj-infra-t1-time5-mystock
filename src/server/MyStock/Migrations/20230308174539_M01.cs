using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MyStock.Migrations
{
    /// <inheritdoc />
    public partial class M01 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Produtos_SubCategorias_SubCategoriaId",
                table: "Produtos");

            migrationBuilder.AlterColumn<int>(
                name: "SubCategoriaId",
                table: "Produtos",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_Produtos_SubCategorias_SubCategoriaId",
                table: "Produtos",
                column: "SubCategoriaId",
                principalTable: "SubCategorias",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Produtos_SubCategorias_SubCategoriaId",
                table: "Produtos");

            migrationBuilder.AlterColumn<int>(
                name: "SubCategoriaId",
                table: "Produtos",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Produtos_SubCategorias_SubCategoriaId",
                table: "Produtos",
                column: "SubCategoriaId",
                principalTable: "SubCategorias",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
