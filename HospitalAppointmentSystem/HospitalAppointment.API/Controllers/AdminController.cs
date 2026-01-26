using Microsoft.AspNetCore.Mvc;
using HospitalAppointment.API.Interfaces;
using HospitalAppointment.API.DTOs;

namespace HospitalAppointment.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AdminController : ControllerBase
    {
        private readonly IAdminService _adminService;

        public AdminController(IAdminService adminService)
        {
            _adminService = adminService;
        }

        [HttpGet]
        public IActionResult GetAllAdmins()
        {
            return Ok(_adminService.GetAllAdmins());
        }

        [HttpPost]
        public IActionResult AddAdmin([FromBody] CreateAdminDto adminDto)
        {
            _adminService.AddAdmin(adminDto);
            return Ok("Admin added successfully");
        }
    }
}
