using HospitalAppointment.API.Models;
using HospitalAppointment.API.DTOs;

namespace HospitalAppointment.API.Interfaces
{
    public interface IAppointmentService
    {
        List<Appointment> GetAllAppointments();
        void BookAppointment(CreateAppointmentDto appointmentDto);

        void BlockSlot(CreateBlockSlotDto blockSlotDto);
        List<Appointment> GetPastAppointmentsByPatient(int patientId);
        List<Appointment> GetAllPastAppointments(); // for admin

    }
}
