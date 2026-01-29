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

        [HttpPost]
        public IActionResult BookAppointment(CreateAppointmentDto dto)
        {
            _service.BookAppointment(dto);
            return Ok("Booking confirmed");
        }

        // ✅ THIS WAS MISSING
        [HttpPost("block")]
        public IActionResult BlockDate([FromBody] CreateBlockSlotDto dto)
        {
            _service.BlockDate(dto);
            return Ok("Date blocked successfully");
        }

    }
}
