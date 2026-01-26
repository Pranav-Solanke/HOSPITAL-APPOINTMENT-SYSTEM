using HospitalAppointment.API.Data;
using HospitalAppointment.API.DTOs;
using HospitalAppointment.API.Interfaces;
using HospitalAppointment.API.Models;

namespace HospitalAppointment.API.Services
{
    public class AdminService : IAdminService
    {
        private readonly ApplicationDbContext _context;

        public AdminService(ApplicationDbContext context)
        {
            _context = context;
        }

        public List<Admin> GetAllAdmins()
        {
            return _context.Admins.ToList();
        }

        public void AddAdmin(CreateAdminDto adminDto)
        {
            var admin = new Admin
            {
                FullName = adminDto.FullName,
                Email = adminDto.Email
            };

            _context.Admins.Add(admin);
            _context.SaveChanges();
        }
    }
}
