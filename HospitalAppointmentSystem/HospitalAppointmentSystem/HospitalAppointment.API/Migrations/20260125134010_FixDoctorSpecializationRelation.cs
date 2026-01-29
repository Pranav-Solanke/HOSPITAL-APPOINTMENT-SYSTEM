using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HospitalAppointment.API.Migrations
{
    /// <inheritdoc />
    public partial class FixDoctorSpecializationRelation : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Doctors",
                keyColumn: "DoctorId",
                keyValue: 1,
                columns: new[] { "Email", "FullName" },
                values: new object[] { "cardio1@hospital.com", "Dr. Ajit Sharma" });

            migrationBuilder.UpdateData(
                table: "Doctors",
                keyColumn: "DoctorId",
                keyValue: 2,
                columns: new[] { "Email", "FullName" },
                values: new object[] { "cardio2@hospital.com", "Dr. Rohan Patil" });

            migrationBuilder.UpdateData(
                table: "Doctors",
                keyColumn: "DoctorId",
                keyValue: 3,
                columns: new[] { "Email", "FullName" },
                values: new object[] { "cardio3@hospital.com", "Dr. Shreya Agarwal" });

            migrationBuilder.UpdateData(
                table: "Doctors",
                keyColumn: "DoctorId",
                keyValue: 4,
                column: "FullName",
                value: "Dr. Siddhat Nikam");

            migrationBuilder.UpdateData(
                table: "Doctors",
                keyColumn: "DoctorId",
                keyValue: 5,
                column: "FullName",
                value: "Dr. Manisha Joshi");

            migrationBuilder.UpdateData(
                table: "Doctors",
                keyColumn: "DoctorId",
                keyValue: 12,
                column: "FullName",
                value: "Dr. Sakshi Salve");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Doctors",
                keyColumn: "DoctorId",
                keyValue: 1,
                columns: new[] { "Email", "FullName" },
                values: new object[] { "Ajitsharma@hospital.com", "Dr. Ajit sharma" });

            migrationBuilder.UpdateData(
                table: "Doctors",
                keyColumn: "DoctorId",
                keyValue: 2,
                columns: new[] { "Email", "FullName" },
                values: new object[] { "RohanPatil@hospital.com", "Dr. Rutul Jadhav" });

            migrationBuilder.UpdateData(
                table: "Doctors",
                keyColumn: "DoctorId",
                keyValue: 3,
                columns: new[] { "Email", "FullName" },
                values: new object[] { "Shreyaagrawal@hospital.com", "Dr. Shreya agrawal" });

            migrationBuilder.UpdateData(
                table: "Doctors",
                keyColumn: "DoctorId",
                keyValue: 4,
                column: "FullName",
                value: "Dr. Siddhat Nikam ");

            migrationBuilder.UpdateData(
                table: "Doctors",
                keyColumn: "DoctorId",
                keyValue: 5,
                column: "FullName",
                value: "Dr. Manisha joshi ");

            migrationBuilder.UpdateData(
                table: "Doctors",
                keyColumn: "DoctorId",
                keyValue: 12,
                column: "FullName",
                value: "Dr. Sakshi Salve ");
        }
    }
}
