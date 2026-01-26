using HospitalAppointment.API.Models;
using HospitalAppointment.API.DTOs;

namespace HospitalAppointment.API.Interfaces
{
    public interface IDoctorService
    {
        List<Doctor> GetAllDoctors();
        List<Doctor> GetDoctorsBySpecialization(int specializationId);
        void AddDoctor(CreateDoctorDto doctorDto);
    }
}
