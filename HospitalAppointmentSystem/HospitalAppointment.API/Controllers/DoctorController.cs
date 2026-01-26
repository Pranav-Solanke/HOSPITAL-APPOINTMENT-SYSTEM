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

        public DoctorController(IDoctorService doctorService)
        {
            _doctorService = doctorService;
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
    }
}
