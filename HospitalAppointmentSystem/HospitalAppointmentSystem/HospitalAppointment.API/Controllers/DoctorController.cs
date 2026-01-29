using Microsoft.AspNetCore.Mvc;
using HospitalAppointment.API.Interfaces;
using HospitalAppointment.API.DTOs;

namespace HospitalAppointment.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DoctorController : ControllerBase
    {
        private readonly IDoctorService _doctorService;
        private readonly IAppointmentService _appointmentService; // ✅ ADD

        public DoctorController(
            IDoctorService doctorService,
            IAppointmentService appointmentService   // ✅ ADD
        )
        {
            _doctorService = doctorService;
            _appointmentService = appointmentService; // ✅ ADD
        }

        [HttpGet]
        public IActionResult GetAllDoctors()
        {
            return Ok(_doctorService.GetAllDoctors());
        }

        [HttpGet("specialization/{specializationId}")]
        public IActionResult GetDoctorsBySpecialization(int specializationId)
        {
            return Ok(_doctorService.GetDoctorsBySpecialization(specializationId));
        }

        [HttpPost]
        public IActionResult AddDoctor([FromBody] CreateDoctorDto doctorDto)
        {
            _doctorService.AddDoctor(doctorDto);
            return Ok("Doctor added successfully");
        }

        // ==================================================
        // ✅ ADD THIS METHOD (FIX DOCTOR APPOINTMENTS)
        // ==================================================
        [HttpGet("appointments/{doctorId}")]
        public IActionResult GetDoctorAppointments(int doctorId)
        {
            return Ok(_appointmentService.GetAppointmentsByDoctor(doctorId));
        }

        [HttpPost("block-date")]
        public IActionResult BlockDate([FromBody] BlockDateDto dto)
        {
            _doctorService.BlockDate(dto);
            return Ok("Date blocked successfully");
        }

    }
}
