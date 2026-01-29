using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HospitalAppointment.API.Migrations
{
    /// <inheritdoc />
    public partial class AddPasswordColumns : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Password",
                table: "Patients",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Password",
                table: "Doctors",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Password",
                table: "Admins",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.UpdateData(
                table: "Admins",
                keyColumn: "AdminId",
                keyValue: 1,
                column: "Password",
                value: "");

            migrationBuilder.UpdateData(
                table: "Admins",
                keyColumn: "AdminId",
                keyValue: 2,
                column: "Password",
                value: "");

            migrationBuilder.UpdateData(
                table: "Doctors",
                keyColumn: "DoctorId",
                keyValue: 1,
                column: "Password",
                value: "");

            migrationBuilder.UpdateData(
                table: "Doctors",
                keyColumn: "DoctorId",
                keyValue: 2,
                column: "Password",
                value: "");

            migrationBuilder.UpdateData(
                table: "Doctors",
                keyColumn: "DoctorId",
                keyValue: 3,
                column: "Password",
                value: "");

            migrationBuilder.UpdateData(
                table: "Doctors",
                keyColumn: "DoctorId",
                keyValue: 4,
                column: "Password",
                value: "");

            migrationBuilder.UpdateData(
                table: "Doctors",
                keyColumn: "DoctorId",
                keyValue: 5,
                column: "Password",
                value: "");

            migrationBuilder.UpdateData(
                table: "Doctors",
                keyColumn: "DoctorId",
                keyValue: 6,
                column: "Password",
                value: "");

            migrationBuilder.UpdateData(
                table: "Doctors",
                keyColumn: "DoctorId",
                keyValue: 7,
                column: "Password",
                value: "");

            migrationBuilder.UpdateData(
                table: "Doctors",
                keyColumn: "DoctorId",
                keyValue: 8,
                column: "Password",
                value: "");

            migrationBuilder.UpdateData(
                table: "Doctors",
                keyColumn: "DoctorId",
                keyValue: 9,
                column: "Password",
                value: "");

            migrationBuilder.UpdateData(
                table: "Doctors",
                keyColumn: "DoctorId",
                keyValue: 10,
                column: "Password",
                value: "");

            migrationBuilder.UpdateData(
                table: "Doctors",
                keyColumn: "DoctorId",
                keyValue: 11,
                column: "Password",
                value: "");

            migrationBuilder.UpdateData(
                table: "Doctors",
                keyColumn: "DoctorId",
                keyValue: 12,
                column: "Password",
                value: "");

            migrationBuilder.UpdateData(
                table: "Doctors",
                keyColumn: "DoctorId",
                keyValue: 13,
                column: "Password",
                value: "");

            migrationBuilder.UpdateData(
                table: "Doctors",
                keyColumn: "DoctorId",
                keyValue: 14,
                column: "Password",
                value: "");

            migrationBuilder.UpdateData(
                table: "Doctors",
                keyColumn: "DoctorId",
                keyValue: 15,
                column: "Password",
                value: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Password",
                table: "Patients");

            migrationBuilder.DropColumn(
                name: "Password",
                table: "Doctors");

            migrationBuilder.DropColumn(
                name: "Password",
                table: "Admins");
        }
    }
}
