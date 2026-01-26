using Microsoft.AspNetCore.Mvc;
using HospitalAppointment.API.DTOs;
using HospitalAppointment.API.Interfaces;

namespace HospitalAppointment.API.Controllers
{
    [ApiController]
    [Route("api/auth")]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;

        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginRequestDto dto)
        {
            var result = _authService.Login(dto);
            return Ok(result);
        }
    }
}
