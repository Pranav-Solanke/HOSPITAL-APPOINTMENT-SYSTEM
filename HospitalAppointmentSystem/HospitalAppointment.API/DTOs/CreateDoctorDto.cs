namespace HospitalAppointment.API.DTOs
{
    public class CreateDoctorDto
    {
        public string FullName { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string? PhoneNumber { get; set; }

        // Use ID, not name
        public int SpecializationId { get; set; }

        public string Password { get; set; }

    }
}
