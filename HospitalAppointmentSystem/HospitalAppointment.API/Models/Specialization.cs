using System.ComponentModel.DataAnnotations;

namespace HospitalAppointment.API.Models
{
    public class Specialization
    {
        [Key]
        public int SpecializationId { get; set; }

        [Required]
        public string Name { get; set; } = string.Empty;

        public ICollection<Doctor> Doctors { get; set; } = new List<Doctor>();
    }
}
