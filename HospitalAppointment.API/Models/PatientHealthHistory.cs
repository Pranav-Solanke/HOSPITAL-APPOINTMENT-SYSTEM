using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HospitalAppointment.API.Models
{
    public class PatientHealthHistory
    {
        [Key]
        public int HistoryId { get; set; }

        [Required]
        public int PatientId { get; set; }

        [Required]
        public string DiseaseType { get; set; } = string.Empty;
        // Heart / Neurological / Diabetes / None / Other

        public string? Description { get; set; }

        public DateTime CreatedDate { get; set; } = DateTime.Now;

        [ForeignKey("PatientId")]
        public Patient Patient { get; set; }
    }
}
