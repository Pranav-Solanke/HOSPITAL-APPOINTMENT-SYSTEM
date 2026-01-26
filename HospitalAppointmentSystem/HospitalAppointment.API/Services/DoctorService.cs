using HospitalAppointment.API.Data;
using HospitalAppointment.API.DTOs;
using HospitalAppointment.API.Interfaces;
using HospitalAppointment.API.Models;
using Microsoft.EntityFrameworkCore;

namespace HospitalAppointment.API.Services
{
    public class DoctorService : IDoctorService
    {
        private readonly ApplicationDbContext _context;

        public DoctorService(ApplicationDbContext context)
        {
            _context = context;
        }

        public List<Doctor> GetAllDoctors()
        {
            return _context.Doctors
                .Include(d => d.Specialization)
                .ToList();
        }

        public List<Doctor> GetDoctorsBySpecialization(int specializationId)
        {
            return _context.Doctors
                .Include(d => d.Specialization)
                .Where(d => d.SpecializationId == specializationId)
                .ToList();
        }

        public void AddDoctor(CreateDoctorDto doctorDto)
        {
            var doctor = new Doctor
            {
                FullName = doctorDto.FullName,
                Email = doctorDto.Email,
                PhoneNumber=doctorDto.PhoneNumber,
                Password = doctorDto.Password,
                SpecializationId = doctorDto.SpecializationId,
                IsActive = true
            };

            _context.Doctors.Add(doctor);
            _context.SaveChanges();

        }
    }
}
