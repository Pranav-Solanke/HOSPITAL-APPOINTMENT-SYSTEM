using Microsoft.AspNetCore.Mvc;
using HospitalAppointment.API.Interfaces;
using HospitalAppointment.API.DTOs;

namespace HospitalAppointment.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AppointmentController : ControllerBase
    {
        private readonly IAppointmentService _service;

        public AppointmentController(IAppointmentService service)
        {
            _service = service;
        }

        // ===============================
        // BOOK APPOINTMENT
        // ===============================
        [HttpPost]
        public IActionResult BookAppointment([FromBody] CreateAppointmentDto dto)
        {
            _service.BookAppointment(dto);
            return Ok("Booking confirmed");
        }

        // ===============================
        // BLOCK DATE (DOCTOR)
        // ===============================
        [HttpPost("block")]
        public IActionResult BlockDate([FromBody] CreateBlockSlotDto dto)
        {
            _service.BlockDate(dto);
            return Ok("Date blocked successfully");
        }

        // ===============================
        // VIEW CURRENT APPOINTMENTS (MULTIPLE)
        // ===============================
        [HttpGet("current/{patientId}")]
        public IActionResult GetCurrentAppointments(int patientId)
        {
            var result = _service.GetCurrentAppointmentsByPatient(patientId);
            return Ok(result);
        }

        // ===============================
        // VIEW APPOINTMENT HISTORY
        // ===============================
        [HttpGet("history/{patientId}")]
        public IActionResult GetAppointmentHistory(int patientId)
        {
            var result = _service.GetAppointmentHistoryByPatient(patientId);
            return Ok(result);
        }
    }
}
