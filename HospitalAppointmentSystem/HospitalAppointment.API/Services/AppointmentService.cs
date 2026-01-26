using HospitalAppointment.API.Data;
using HospitalAppointment.API.DTOs;
using HospitalAppointment.API.Helpers;
using HospitalAppointment.API.Interfaces;
using HospitalAppointment.API.Models;

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

        // =========================
        // GET ALL APPOINTMENTS
        // =========================
        public List<Appointment> GetAllAppointments()
        {
            return _context.Appointments.ToList();
        }

        // =========================
        // BOOK APPOINTMENT (FULL RULES)
        // =========================
        public void BookAppointment(CreateAppointmentDto appointmentDto)
        {
            try
            {
                var date = appointmentDto.AppointmentDate;

                //  Sunday not allowed
                if (date.DayOfWeek == DayOfWeek.Sunday)
                    throw new Exception("No appointments allowed on Sunday");

                int hour = date.Hour;

                //  Time rules
                if (date.DayOfWeek == DayOfWeek.Saturday)
                {
                    if (hour < 10 || hour >= 19)
                        throw new Exception("Saturday timing is 10 AM to 7 PM");
                }
                else
                {
                    if (hour < 9 || hour >= 21)
                        throw new Exception("Timing is 9 AM to 9 PM");
                }

                //  Check if slot already booked OR blocked
                bool slotTaken = _context.Appointments.Any(a =>
                    a.DoctorId == appointmentDto.DoctorId &&
                    a.AppointmentDate == appointmentDto.AppointmentDate &&
                    (a.Status == "Booked" || a.IsBlocked)
                );

                if (slotTaken)
                    throw new Exception("This time slot is not available");

                //  Book appointment
                var appointment = new Appointment
                {
                    DoctorId = appointmentDto.DoctorId,
                    PatientId = appointmentDto.PatientId,
                    AppointmentDate = appointmentDto.AppointmentDate,
                    Status = "Booked",
                    IsBlocked = false
                };

                _context.Appointments.Add(appointment);
                _context.SaveChanges();

                //  LOG SUCCESS
                _logger.Log(
                    $"APPOINTMENT BOOKED | DoctorId={appointmentDto.DoctorId}, PatientId={appointmentDto.PatientId}, Time={appointmentDto.AppointmentDate}"
                );
            }
            catch (Exception ex)
            {
                //  LOG ERROR
                _logger.Log($"BOOK APPOINTMENT ERROR | {ex.Message}");
                throw;
            }
        }

        // =========================
        // DOCTOR BLOCKS SLOT
        // =========================
        public void BlockSlot(CreateBlockSlotDto blockSlotDto)
        {
            try
            {
                bool exists = _context.Appointments.Any(a =>
                    a.DoctorId == blockSlotDto.DoctorId &&
                    a.AppointmentDate == blockSlotDto.AppointmentDate
                );

                if (exists)
                    throw new Exception("Slot already exists");

                var block = new Appointment
                {
                    DoctorId = blockSlotDto.DoctorId,
                    AppointmentDate = blockSlotDto.AppointmentDate,
                    Status = "Blocked",
                    IsBlocked = true
                };

                _context.Appointments.Add(block);
                _context.SaveChanges();

                //  LOG BLOCK
                _logger.Log(
                    $"SLOT BLOCKED | DoctorId={blockSlotDto.DoctorId}, Time={blockSlotDto.AppointmentDate}"
                );
            }
            catch (Exception ex)
            {
                //  LOG ERROR
                _logger.Log($"BLOCK SLOT ERROR | {ex.Message}");
                throw;
            }
        }

        // =========================
        // PATIENT: HIS PAST APPOINTMENTS ONLY
        // =========================
        public List<Appointment> GetPastAppointmentsByPatient(int patientId)
        {
            return _context.Appointments
                .Where(a =>
                    a.PatientId == patientId &&
                    a.AppointmentDate < DateTime.Now &&
                    a.Status == "Booked"
                )
                .ToList();
        }

        // =========================
        // ADMIN: ALL PAST APPOINTMENTS
        // =========================
        public List<Appointment> GetAllPastAppointments()
        {
            return _context.Appointments
                .Where(a =>
                    a.AppointmentDate < DateTime.Now &&
                    a.Status == "Booked"
                )
                .ToList();
        }
    }
}
