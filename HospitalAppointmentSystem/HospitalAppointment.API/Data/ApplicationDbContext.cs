using HospitalAppointment.API.Models;
using Microsoft.EntityFrameworkCore;

namespace HospitalAppointment.API.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Doctor> Doctors { get; set; }
        public DbSet<Patient> Patients { get; set; }
        public DbSet<Admin> Admins { get; set; }
        public DbSet<Appointment> Appointments { get; set; }
        public DbSet<PatientHealthHistory> PatientHealthHistories { get; set; }
        public DbSet<Specialization> Specializations { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // ---------- SPECIALIZATIONS ----------
            modelBuilder.Entity<Specialization>().HasData(
                new Specialization { SpecializationId = 1, Name = "Cardiology" },
                new Specialization { SpecializationId = 2, Name = "Neurology" },
                new Specialization { SpecializationId = 3, Name = "Orthopedics" },
                new Specialization { SpecializationId = 4, Name = "Dermatology" },
                new Specialization { SpecializationId = 5, Name = "General Medicine" }
            );

            // ---------- DOCTORS ----------
            modelBuilder.Entity<Doctor>().HasData(
                new Doctor { DoctorId = 1, FullName = "Dr. Ajit Sharma", Email = "cardio1@hospital.com", PhoneNumber = "900000001", IsActive = true, SpecializationId = 1 },
                new Doctor { DoctorId = 2, FullName = "Dr. Rohan Patil", Email = "cardio2@hospital.com", PhoneNumber = "900000002", IsActive = true, SpecializationId = 1 },
                new Doctor { DoctorId = 3, FullName = "Dr. Shreya Agarwal", Email = "cardio3@hospital.com", PhoneNumber = "900000003", IsActive = true, SpecializationId = 1 },

                new Doctor { DoctorId = 4, FullName = "Dr. Siddhat Nikam", Email = "neuro1@hospital.com", PhoneNumber = "900000004", IsActive = true, SpecializationId = 2 },
                new Doctor { DoctorId = 5, FullName = "Dr. Manisha Joshi", Email = "neuro2@hospital.com", PhoneNumber = "900000005", IsActive = true, SpecializationId = 2 },
                new Doctor { DoctorId = 6, FullName = "Dr. Sanket Kulkarni", Email = "neuro3@hospital.com", PhoneNumber = "900000006", IsActive = true, SpecializationId = 2 },

                new Doctor { DoctorId = 7, FullName = "Dr. Abhishek Narkhede", Email = "ortho1@hospital.com", PhoneNumber = "900000007", IsActive = true, SpecializationId = 3 },
                new Doctor { DoctorId = 8, FullName = "Dr. Atharva Ingle", Email = "ortho2@hospital.com", PhoneNumber = "900000008", IsActive = true, SpecializationId = 3 },
                new Doctor { DoctorId = 9, FullName = "Dr. Shruti Patil", Email = "ortho3@hospital.com", PhoneNumber = "900000009", IsActive = true, SpecializationId = 3 },

                new Doctor { DoctorId = 10, FullName = "Dr. Vaibhav Kamble", Email = "derma1@hospital.com", PhoneNumber = "900000010", IsActive = true, SpecializationId = 4 },
                new Doctor { DoctorId = 11, FullName = "Dr. Vijay Chavan", Email = "derma2@hospital.com", PhoneNumber = "900000011", IsActive = true, SpecializationId = 4 },
                new Doctor { DoctorId = 12, FullName = "Dr. Sakshi Salve", Email = "derma3@hospital.com", PhoneNumber = "900000012", IsActive = true, SpecializationId = 4 },

                new Doctor { DoctorId = 13, FullName = "Dr. GM One", Email = "gm1@hospital.com", PhoneNumber = "900000013", IsActive = true, SpecializationId = 5 },
                new Doctor { DoctorId = 14, FullName = "Dr. GM Two", Email = "gm2@hospital.com", PhoneNumber = "900000014", IsActive = true, SpecializationId = 5 },
                new Doctor { DoctorId = 15, FullName = "Dr. GM Three", Email = "gm3@hospital.com", PhoneNumber = "900000015", IsActive = true, SpecializationId = 5 }
            );

            // ---------- ADMINS ----------
            modelBuilder.Entity<Admin>().HasData(
                new Admin { AdminId = 1, FullName = "System Admin", Email = "admin@hospital.com", Password = "admin123" },
                new Admin { AdminId = 2, FullName = "Super Admin", Email = "superadmin@hospital.com", Password = "super123" }
            );
        }
    }
}
