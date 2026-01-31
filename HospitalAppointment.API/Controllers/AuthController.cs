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
            try
            {
                var result = _authService.Login(dto);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return Unauthorized(ex.Message);
            }
        }

        // ✅ ADDED FOR FORGOT PASSWORD (NO CHANGE TO LOGIN)
        [HttpPost("simple-reset-password")]
        public IActionResult SimpleResetPassword([FromBody] SimpleResetDto dto)
        {
            try
            {
                _authService.SimpleResetPassword(dto.Email, dto.NewPassword);
                return Ok("Password updated successfully");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
