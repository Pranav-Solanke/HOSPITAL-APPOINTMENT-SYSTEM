using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HospitalAppointment.API.Migrations
{
    /// <inheritdoc />
    public partial class AddHospitalTables : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsBlocked",
                table: "Appointments",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsBlocked",
                table: "Appointments");
        }
    }
}
