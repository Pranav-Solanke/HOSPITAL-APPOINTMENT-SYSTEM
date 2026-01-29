using HospitalAppointment.API.DTOs;
using HospitalAppointment.API.Models;

public interface IAppointmentService
{
    // Booking
    void BookAppointment(CreateAppointmentDto dto);

    // Blocking
    void BlockDate(CreateBlockSlotDto dto);

    // Patient
    Appointment? GetCurrentAppointmentByPatient(int patientId);
    List<Appointment> GetPastAppointmentsByPatient(int patientId);

    // Doctor
    List<Appointment> GetAppointmentsByDoctor(int doctorId);

    // Admin
    List<Appointment> GetAllAppointments();
}
