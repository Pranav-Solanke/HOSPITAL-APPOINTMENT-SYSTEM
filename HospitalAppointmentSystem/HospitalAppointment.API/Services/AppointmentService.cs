using HospitalAppointment.API.Data;
using HospitalAppointment.API.DTOs;
using HospitalAppointment.API.Helpers;
using HospitalAppointment.API.Interfaces;
using HospitalAppointment.API.Models;
using Microsoft.EntityFrameworkCore;

namespace HospitalAppointment.API.Services
{
    public class AppointmentService : IAppointmentService
    {
        private readonly ApplicationDbContext _context;
        private readonly AppLogger _logger;

        public AppointmentService(ApplicationDbContext context, AppLogger logger)
        {
            _context = context;
            _logger = logger;
        }

        public void BookAppointment(CreateAppointmentDto dto)
        {
            var date = dto.AppointmentDate.Date;

            if (date < DateTime.Today)
                throw new Exception("Cannot book past date");

            if (date.DayOfWeek == DayOfWeek.Sunday)
                throw new Exception("No appointments on Sunday");

            bool blocked = _context.Appointments.Any(a =>
                a.DoctorId == dto.DoctorId &&
                a.AppointmentDate.Date == date &&
                a.IsBlocked
            );

            if (blocked)
                throw new Exception("Doctor has blocked this date");

            bool exists = _context.Appointments.Any(a =>
                a.DoctorId == dto.DoctorId &&
                a.AppointmentDate.Date == date &&
                a.Status == "Booked"
            );

            if (exists)
                throw new Exception("Doctor already booked on this date");

            _context.Appointments.Add(new Appointment
            {
                DoctorId = dto.DoctorId,
                PatientId = dto.PatientId,
                AppointmentDate = date,
                Status = "Booked",
                IsBlocked = false
            });

            _context.SaveChanges();
            _logger.Log("Appointment booked successfully");
        }

        // ✅ BLOCK DATE (THIS WAS MISSING)
        public void BlockDate(CreateBlockSlotDto dto)
        {
            var date = dto.AppointmentDate.Date;

            if (date < DateTime.Today)
                throw new Exception("Cannot block past dates");

            bool exists = _context.Appointments.Any(a =>
                a.DoctorId == dto.DoctorId &&
                a.AppointmentDate.Date == date
            );

            if (exists)
                throw new Exception("Date already booked or blocked");

            _context.Appointments.Add(new Appointment
            {
                DoctorId = dto.DoctorId,
                AppointmentDate = date,
                Status = "Blocked",
                IsBlocked = true
            });

            _context.SaveChanges();
            _logger.Log($"Date blocked: Doctor={dto.DoctorId}, Date={date}");
        }

        public Appointment? GetCurrentAppointmentByPatient(int patientId)
        {
            return _context.Appointments
                .Include(a => a.Doctor)
                    .ThenInclude(d => d.Specialization)
                .Where(a =>
                    a.PatientId == patientId &&
                    a.AppointmentDate >= DateTime.Today &&
                    a.Status == "Booked"
                )
                .OrderBy(a => a.AppointmentDate)
                .FirstOrDefault();
        }

        public List<Appointment> GetPastAppointmentsByPatient(int patientId)
        {
            return _context.Appointments
                .Include(a => a.Doctor)
                    .ThenInclude(d => d.Specialization)
                .Where(a =>
                    a.PatientId == patientId &&
                    a.AppointmentDate < DateTime.Today &&
                    a.Status == "Booked"
                )
                .OrderByDescending(a => a.AppointmentDate)
                .ToList();
        }

        public List<Appointment> GetAppointmentsByDoctor(int doctorId)
        {
            return _context.Appointments
                .Include(a => a.Patient)
                .Where(a =>
                    a.DoctorId == doctorId &&
                    a.AppointmentDate >= DateTime.Today &&
                    a.Status == "Booked"
                )
                .OrderBy(a => a.AppointmentDate)
                .ToList();
        }

        public List<Appointment> GetAllAppointments()
        {
            return _context.Appointments
                .Include(a => a.Patient)
                .Include(a => a.Doctor)
                    .ThenInclude(d => d.Specialization)
                .OrderByDescending(a => a.AppointmentDate)
                .ToList();
        }
    }
}
