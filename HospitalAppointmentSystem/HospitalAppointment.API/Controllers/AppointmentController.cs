using Microsoft.AspNetCore.Mvc;
using HospitalAppointment.API.Interfaces;
using HospitalAppointment.API.DTOs;

namespace HospitalAppointment.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AppointmentController : ControllerBase
    {
        private readonly IAppointmentService _appointmentService;

        public AppointmentController(IAppointmentService appointmentService)
        {
            _appointmentService = appointmentService;
        }

        [HttpGet]
        public IActionResult GetAllAppointments()
        {
            return Ok(_appointmentService.GetAllAppointments());
        }

        [HttpPost]
        public IActionResult BookAppointment(CreateAppointmentDto appointmentDto)
        {
            _appointmentService.BookAppointment(appointmentDto);
            return Ok("Appointment booked successfully");
        }

        [HttpPost("block")]
        public IActionResult BlockSlot([FromBody] CreateBlockSlotDto dto)
        {
            _appointmentService.BlockSlot(dto);
            return Ok("Slot blocked successfully");
        }
        // PATIENT VIEW
        [HttpGet("patient/{patientId}/past")]
        public IActionResult GetPatientPastAppointments(int patientId)
        {
            return Ok(_appointmentService.GetPastAppointmentsByPatient(patientId));
        }

        // ADMIN VIEW
        [HttpGet("admin/past")]
        public IActionResult GetAllPastAppointments()
        {
            return Ok(_appointmentService.GetAllPastAppointments());
        }

    }
}
