import api from "./api";

// ================= DOCTORS =================
export const getDoctorsBySpecialization = async (specializationId) => {
  const res = await api.get(`/Doctor/specialization/${specializationId}`);
  return res.data;
};

// ================= APPOINTMENTS =================
export const bookAppointment = async (data) => {
  const res = await api.post("/Appointment", data);
  return res.data;
};

// 🔹 CURRENT APPOINTMENTS (MULTIPLE)
export const getCurrentAppointment = async (patientId) => {
  const res = await api.get(`/Appointment/current/${patientId}`);
  return res.data; // ARRAY
};

// 🔹 APPOINTMENT HISTORY
export const getPatientAppointments = async (patientId) => {
  const res = await api.get(`/Appointment/history/${patientId}`);
  return res.data; // ARRAY
};
