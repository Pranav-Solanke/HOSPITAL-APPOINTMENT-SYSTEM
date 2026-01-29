using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace HospitalAppointment.API.Migrations
{
    /// <inheritdoc />
    public partial class SeedSpecializationAndDoctors : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Specialization",
                table: "Doctors");

            migrationBuilder.AddColumn<int>(
                name: "SpecializationId",
                table: "Doctors",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "Specializations",
                columns: table => new
                {
                    SpecializationId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Specializations", x => x.SpecializationId);
                });

            migrationBuilder.InsertData(
                table: "Specializations",
                columns: new[] { "SpecializationId", "Name" },
                values: new object[,]
                {
                    { 1, "Cardiology" },
                    { 2, "Neurology" },
                    { 3, "Orthopedics" },
                    { 4, "Dermatology" },
                    { 5, "General Medicine" }
                });

            migrationBuilder.InsertData(
                table: "Doctors",
                columns: new[] { "DoctorId", "Email", "FullName", "IsActive", "PhoneNumber", "SpecializationId" },
                values: new object[,]
                {
                    { 1, "Ajitsharma@hospital.com", "Dr. Ajit sharma", true, "900000001", 1 },
                    { 2, "RohanPatil@hospital.com", "Dr. Rutul Jadhav", true, "900000002", 1 },
                    { 3, "Shreyaagrawal@hospital.com", "Dr. Shreya agrawal", true, "900000003", 1 },
                    { 4, "neuro1@hospital.com", "Dr. Siddhat Nikam ", true, "900000004", 2 },
                    { 5, "neuro2@hospital.com", "Dr. Manisha joshi ", true, "900000005", 2 },
                    { 6, "neuro3@hospital.com", "Dr. Sanket Kulkarni", true, "900000006", 2 },
                    { 7, "ortho1@hospital.com", "Dr. Abhishek Narkhede", true, "900000007", 3 },
                    { 8, "ortho2@hospital.com", "Dr. Atharva Ingle", true, "900000008", 3 },
                    { 9, "ortho3@hospital.com", "Dr. Shruti Patil", true, "900000009", 3 },
                    { 10, "derma1@hospital.com", "Dr. Vaibhav Kamble", true, "900000010", 4 },
                    { 11, "derma2@hospital.com", "Dr. Vijay Chavan", true, "900000011", 4 },
                    { 12, "derma3@hospital.com", "Dr. Sakshi Salve ", true, "900000012", 4 },
                    { 13, "gm1@hospital.com", "Dr. GM One", true, "900000013", 5 },
                    { 14, "gm2@hospital.com", "Dr. GM Two", true, "900000014", 5 },
                    { 15, "gm3@hospital.com", "Dr. GM Three", true, "900000015", 5 }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Doctors_SpecializationId",
                table: "Doctors",
                column: "SpecializationId");

            migrationBuilder.AddForeignKey(
                name: "FK_Doctors_Specializations_SpecializationId",
                table: "Doctors",
                column: "SpecializationId",
                principalTable: "Specializations",
                principalColumn: "SpecializationId",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Doctors_Specializations_SpecializationId",
                table: "Doctors");

            migrationBuilder.DropTable(
                name: "Specializations");

            migrationBuilder.DropIndex(
                name: "IX_Doctors_SpecializationId",
                table: "Doctors");

            migrationBuilder.DeleteData(
                table: "Doctors",
                keyColumn: "DoctorId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Doctors",
                keyColumn: "DoctorId",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Doctors",
                keyColumn: "DoctorId",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Doctors",
                keyColumn: "DoctorId",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Doctors",
                keyColumn: "DoctorId",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Doctors",
                keyColumn: "DoctorId",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Doctors",
                keyColumn: "DoctorId",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Doctors",
                keyColumn: "DoctorId",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "Doctors",
                keyColumn: "DoctorId",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "Doctors",
                keyColumn: "DoctorId",
                keyValue: 10);

            migrationBuilder.DeleteData(
                table: "Doctors",
                keyColumn: "DoctorId",
                keyValue: 11);

            migrationBuilder.DeleteData(
                table: "Doctors",
                keyColumn: "DoctorId",
                keyValue: 12);

            migrationBuilder.DeleteData(
                table: "Doctors",
                keyColumn: "DoctorId",
                keyValue: 13);

            migrationBuilder.DeleteData(
                table: "Doctors",
                keyColumn: "DoctorId",
                keyValue: 14);

            migrationBuilder.DeleteData(
                table: "Doctors",
                keyColumn: "DoctorId",
                keyValue: 15);

            migrationBuilder.DropColumn(
                name: "SpecializationId",
                table: "Doctors");

            migrationBuilder.AddColumn<string>(
                name: "Specialization",
                table: "Doctors",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}
