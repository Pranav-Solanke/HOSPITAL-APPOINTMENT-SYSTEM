public class CreateDoctorDto
{
    public string FullName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string? PhoneNumber { get; set; }

    public int SpecializationId { get; set; }

    public string Password { get; set; }
}
