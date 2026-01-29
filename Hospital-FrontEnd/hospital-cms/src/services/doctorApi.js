import api from "./api";

/* ================================
   DOCTOR APPOINTMENTS
================================ */
export const getDoctorAppointments = async (doctorId) => {
  const res = await api.get(`/Doctor/appointments/${doctorId}`);
  return res.data;
};

/* ================================
   BLOCK A DATE (DOCTOR)
================================ */
export const blockDoctorDate = async (doctorId, appointmentDate) => {
  const res = await api.post("/Appointment/block", {
    doctorId,
    appointmentDate,
  });
  return res.data;
};
