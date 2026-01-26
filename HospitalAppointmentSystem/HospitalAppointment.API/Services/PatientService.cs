using HospitalAppointment.API.Data;
using HospitalAppointment.API.DTOs;
using HospitalAppointment.API.Interfaces;
using HospitalAppointment.API.Models;

namespace HospitalAppointment.API.Services
{
    public class PatientService : IPatientService
    {
        private readonly ApplicationDbContext _context;

        public PatientService(ApplicationDbContext context)
        {
            _context = context;
        }

        // ---------------- PATIENT ----------------

        public List<Patient> GetAllPatients()
        {
            return _context.Patients.ToList();
        }

        public void AddPatient(CreatePatientDto dto)
        {
            var patient = new Patient
            {
                FullName = dto.FullName,
                Email = dto.Email,
                Password = dto.Password,
                Age = dto.Age,
                Gender = dto.Gender
            };

            _context.Patients.Add(patient);
            _context.SaveChanges();

        }

        // ---------------- HEALTH HISTORY ----------------

        public void AddHealthHistory(CreatePatientHealthHistoryDto dto)
        {
            var history = new PatientHealthHistory
            {
                PatientId = dto.PatientId,
                DiseaseType = dto.DiseaseType,
                Description = dto.Description,
                CreatedDate = DateTime.Now
            };

            _context.PatientHealthHistories.Add(history);
            _context.SaveChanges();
        }

        public List<PatientHealthHistory> GetHealthHistoryByPatient(int patientId)
        {
            return _context.PatientHealthHistories
                .Where(h => h.PatientId == patientId)
                .OrderByDescending(h => h.CreatedDate)
                .ToList();
        }

    }
}
