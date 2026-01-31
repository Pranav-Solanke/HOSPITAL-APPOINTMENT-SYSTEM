using HospitalAppointment.API.DTOs;
using HospitalAppointment.API.Models;

namespace HospitalAppointment.API.Interfaces
{
    public interface IAdminService
    {
        List<Admin> GetAllAdmins();
        void AddAdmin(CreateAdminDto adminDto);
    }
}
