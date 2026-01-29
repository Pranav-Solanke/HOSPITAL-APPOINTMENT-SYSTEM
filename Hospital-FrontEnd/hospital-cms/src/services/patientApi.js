import api from "./api";

export const getDoctorsBySpecialization = async (specializationId) => {
  const res = await api.get(`/Doctor/specialization/${specializationId}`);
  return res.data;
};

export const bookAppointment = async (data) => {
  const res = await api.post("/Appointment", data);
  return res.data;
};

export const getCurrentAppointment = async (patientId) => {
  const res = await api.get(`/Appointment/patient/${patientId}/current`);
  return res.data;
};

export const getPatientAppointments = async (patientId) => {
  const res = await api.get(`/Appointment/patient/${patientId}/past`);
  return res.data;
};
