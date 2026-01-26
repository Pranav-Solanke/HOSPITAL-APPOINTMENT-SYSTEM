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
    }
}
