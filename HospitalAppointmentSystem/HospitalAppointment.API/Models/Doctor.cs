using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HospitalAppointment.API.Models
{
    public class Doctor
    {
        [Key]
        public int DoctorId { get; set; }

        [Required]
        public string FullName { get; set; } = string.Empty;

        [Required]
        public string Email { get; set; } = string.Empty;

        public string? PhoneNumber { get; set; }

        public bool IsActive { get; set; } = true;

        // Foreign Key
        public int SpecializationId { get; set; }

        // Navigation
        [ForeignKey(nameof(SpecializationId))]
        public Specialization Specialization { get; set; } = null!;

        public string Password { get; set; } = string.Empty;

    }
}
