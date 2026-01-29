using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HospitalAppointment.API.Models
{
    public class Appointment
    {
        [Key]
        public int AppointmentId { get; set; }

        public int PatientId { get; set; }
        public int DoctorId { get; set; }

        public DateTime AppointmentDate { get; set; }

        public string Status { get; set; } = "Booked";

        public bool IsBlocked { get; set; } = false;

        [ForeignKey(nameof(DoctorId))]
        public Doctor? Doctor { get; set; }

        [ForeignKey(nameof(PatientId))]
        public Patient? Patient { get; set; }
    }
}
