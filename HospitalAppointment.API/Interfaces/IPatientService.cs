using HospitalAppointment.API.DTOs;
using HospitalAppointment.API.Models;

namespace HospitalAppointment.API.Interfaces
{
    public interface IPatientService
    {
        List<Patient> GetAllPatients();
        void AddPatient(CreatePatientDto dto);

        void AddHealthHistory(CreatePatientHealthHistoryDto dto);
        List<PatientHealthHistory> GetHealthHistoryByPatient(int patientId);
    }
}
