using System.ComponentModel.DataAnnotations;

namespace HospitalAppointment.API.Models
{
    public class Admin
    {
        [Key]
        public int AdminId { get; set; }

        [Required]
        public string FullName { get; set; } = string.Empty;

        [Required]
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;

    }
}
