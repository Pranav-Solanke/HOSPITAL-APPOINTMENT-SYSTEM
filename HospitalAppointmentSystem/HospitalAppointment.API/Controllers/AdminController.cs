using Microsoft.AspNetCore.Mvc;
using HospitalAppointment.API.Interfaces;
using HospitalAppointment.API.DTOs;

namespace HospitalAppointment.API.Controllers
{
    [ApiController]
    [Route("api/admin")]
    public class AdminController : ControllerBase
    {
        private readonly IAdminService _adminService;
        private readonly IAppointmentService _appointmentService;
        private readonly IPatientService _patientService; // ✅ ADD

        public AdminController(
            IAdminService adminService,
            IAppointmentService appointmentService,
            IPatientService patientService
        )
        {
            _adminService = adminService;
            _appointmentService = appointmentService;
            _patientService = patientService;
        }

        // ============================
        // ADMINS
        // ============================
        [HttpGet("admins")]
        public IActionResult GetAllAdmins()
        {
            return Ok(_adminService.GetAllAdmins());
        }

        [HttpPost("admins")]
        public IActionResult AddAdmin([FromBody] CreateAdminDto adminDto)
        {
            _adminService.AddAdmin(adminDto);
            return Ok("Admin added successfully");
        }

        // ============================
        // APPOINTMENTS
        // ============================
        [HttpGet("appointments")]
        public IActionResult GetAllAppointments()
        {
            return Ok(_appointmentService.GetAllAppointments());
        }

        // ============================
        // ✅ PATIENTS (THIS WAS MISSING)
        // ============================
        [HttpGet("patients")]
        public IActionResult GetAllPatients()
        {
            return Ok(_patientService.GetAllPatients());
        }
    }
}
