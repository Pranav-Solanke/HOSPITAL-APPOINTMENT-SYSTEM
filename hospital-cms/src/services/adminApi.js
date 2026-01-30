import api from "./api";

/* ===============================
   DOCTORS
================================ */
export const getAllDoctors = async () => {
  const res = await api.get("/Doctor");
  return res.data;
};

export const registerDoctor = async (doctorData) => {
  const res = await api.post("/Doctor", doctorData);
  return res.data;
};

/* ===============================
   PATIENTS (ADMIN)
================================ */
export const getAllPatients = async () => {
  const res = await api.get("/admin/patients"); // ✅ FIXED
  return res.data;
};

/* ===============================
   APPOINTMENTS (ADMIN)
================================ */
export const getAllAppointments = async () => {
  const res = await api.get("/admin/appointments");
  return res.data;
};

/* ===============================
   SPECIALIZATIONS
================================ */
export const getSpecializations = async () => {
  const res = await api.get("/Specialization");
  return res.data;
};
