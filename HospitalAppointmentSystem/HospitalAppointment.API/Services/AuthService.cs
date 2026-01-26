using HospitalAppointment.API.Data;
using HospitalAppointment.API.DTOs;
using HospitalAppointment.API.Interfaces;

namespace HospitalAppointment.API.Services
{
    public class AuthService : IAuthService
    {
        private readonly ApplicationDbContext _context;

        public AuthService(ApplicationDbContext context)
        {
            _context = context;
        }

        public LoginResponseDto Login(LoginRequestDto dto)
        {
            var admin = _context.Admins
                .FirstOrDefault(a => a.Email == dto.Email && a.Password == dto.Password);

            if (admin != null)
                return new LoginResponseDto { UserId = admin.AdminId, Role = "Admin" };

            var doctor = _context.Doctors
                .FirstOrDefault(d => d.Email == dto.Email && d.Password == dto.Password);

            if (doctor != null)
                return new LoginResponseDto { UserId = doctor.DoctorId, Role = "Doctor" };

            var patient = _context.Patients
                .FirstOrDefault(p => p.Email == dto.Email && p.Password == dto.Password);

            if (patient != null)
                return new LoginResponseDto { UserId = patient.PatientId, Role = "Patient" };

            throw new Exception("Invalid email or password");
        }
    }
}
