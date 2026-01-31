using HospitalAppointment.API.Models;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

public class Specialization
{
    [Key]
    public int SpecializationId { get; set; }

    [Required]
    public string Name { get; set; } = string.Empty;

    [JsonIgnore] 
    public ICollection<Doctor> Doctors { get; set; } = new List<Doctor>();
}
