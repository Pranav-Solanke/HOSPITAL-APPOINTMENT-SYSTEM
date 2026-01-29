using HospitalAppointment.API.DTOs;

namespace HospitalAppointment.API.Interfaces
{
    public interface IAuthService
    {
        LoginResponseDto Login(LoginRequestDto dto);
    }
}
