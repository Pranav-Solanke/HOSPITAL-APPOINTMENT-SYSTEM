using Microsoft.AspNetCore.Mvc;
using HospitalAppointment.API.Interfaces;
using HospitalAppointment.API.DTOs;

namespace HospitalAppointment.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PatientController : ControllerBase
    {
        private readonly IPatientService _patientService;

        public PatientController(IPatientService patientService)
        {
            _patientService = patientService;
        }

        [HttpGet]
        public IActionResult GetAllPatients()
        {
            return Ok(_patientService.GetAllPatients());
        }

        [HttpPost]
        public IActionResult AddPatient([FromBody] CreatePatientDto dto)
        {
            _patientService.AddPatient(dto);
            return Ok("Patient registered successfully");
        }

        // ✅ ADD — HEALTH HISTORY (NO LOGIC CHANGE)
        [HttpPost("history")]
        public IActionResult AddHealthHistory([FromBody] CreatePatientHealthHistoryDto dto)
        {
            _patientService.AddHealthHistory(dto);
            return Ok("Health history added");
        }

        [HttpGet("history/{patientId}")]
        public IActionResult GetHealthHistory(int patientId)
        {
            return Ok(_patientService.GetHealthHistoryByPatient(patientId));
        }
    }
}
