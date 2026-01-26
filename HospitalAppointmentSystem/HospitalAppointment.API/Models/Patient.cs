using System.ComponentModel.DataAnnotations;

namespace HospitalAppointment.API.Models
{
    public class Patient
    {
        [Key]
        public int PatientId { get; set; }

        [Required]
        public string FullName { get; set; } = string.Empty;

        [Required]
        public int Age { get; set; }

        [Required]
        public string Gender { get; set; } = string.Empty; // Male / Female / Other

        [Required]
        public string Email { get; set; } = string.Empty;

        public string? PhoneNumber { get; set; }

        public string Password { get; set; } = string.Empty;

    }
}
