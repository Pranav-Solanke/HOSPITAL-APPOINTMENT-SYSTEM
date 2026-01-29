using HospitalAppointment.API.DTOs;
using HospitalAppointment.API.Models;
using System.Collections.Generic;

namespace HospitalAppointment.API.Interfaces
{
    public interface IAppointmentService
    {
        // ===================== PATIENT ACTIONS =====================
        void BookAppointment(CreateAppointmentDto dto);
        void BlockDate(CreateBlockSlotDto dto);

        // Current (Future) Appointments – MULTIPLE
        List<Appointment> GetCurrentAppointmentsByPatient(int patientId);

        // Appointment History – Past / Cancelled / Completed
        List<Appointment> GetAppointmentHistoryByPatient(int patientId);

        // ===================== DOCTOR ACTIONS =====================
        List<Appointment> GetAppointmentsByDoctor(int doctorId);

        // ===================== ADMIN ACTIONS =====================
        List<Appointment> GetAllAppointments();
    }
}
