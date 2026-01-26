namespace HospitalAppointment.API.DTOs
{
    public class CreatePatientHealthHistoryDto
    {
        public int PatientId { get; set; }
        public string DiseaseType { get; set; }
        public string? Description { get; set; }
    }
}
