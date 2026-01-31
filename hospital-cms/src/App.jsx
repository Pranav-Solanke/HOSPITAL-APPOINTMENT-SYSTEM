import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* PUBLIC */
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import RegisterUser from "./pages/RegisterUser.jsx";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

/* DASHBOARDS */
import AdminDashboard from "./pages/AdminDashboard.jsx";
import DoctorDashboard from "./pages/DoctorDashboard.jsx";
import PatientDashboard from "./pages/PatientDashboard.jsx";

/* AUTH */
import ProtectedRoute from "./components/ProtectedRoute.jsx";

/* ADMIN */
import RegisterDoctor from "./pages/RegisterDoctor.jsx";
import ViewAppointments from "./pages/admin/ViewAppointments.jsx";
import ViewPatients from "./pages/admin/ViewPatients.jsx";
import ViewDoctors from "./pages/admin/ViewDoctors.jsx";

/* PATIENT */
import DoctorSearch from "./pages/patient/DoctorSearch.jsx";
import BookAppointment from "./pages/patient/BookAppointment.jsx";
import AppointmentHistory from "./pages/patient/AppointmentHistory.jsx";
import CurrentAppointment from "./pages/patient/CurrentAppointment.jsx";

/* DOCTOR */
import ManageSlots from "./pages/doctor/ManageSlots.jsx";
import DoctorAppointments from "./pages/doctor/DoctorAppointments.jsx";

/* PASSWORD RESET */
import ForgotPassword from "./pages/ForgotPassword";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register-user" element={<RegisterUser />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />

        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="/admin-dashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
        <Route path="/doctor-dashboard" element={<ProtectedRoute><DoctorDashboard /></ProtectedRoute>} />
        <Route path="/patient-dashboard" element={<ProtectedRoute><PatientDashboard /></ProtectedRoute>} />

        <Route path="/admin/register-doctor" element={<ProtectedRoute><RegisterDoctor /></ProtectedRoute>} />
        <Route path="/admin/appointments" element={<ProtectedRoute><ViewAppointments /></ProtectedRoute>} />
        <Route path="/admin/patients" element={<ProtectedRoute><ViewPatients /></ProtectedRoute>} />
        <Route path="/admin/doctors" element={<ProtectedRoute><ViewDoctors /></ProtectedRoute>} />

        <Route path="/find-doctor" element={<ProtectedRoute><DoctorSearch /></ProtectedRoute>} />
        <Route path="/book-appointment" element={<ProtectedRoute><BookAppointment /></ProtectedRoute>} />
        <Route path="/patient-appointments" element={<ProtectedRoute><AppointmentHistory /></ProtectedRoute>} />
        <Route path="/current-appointment" element={<ProtectedRoute><CurrentAppointment /></ProtectedRoute>} />

        <Route path="/doctor/manage-slots" element={<ProtectedRoute><ManageSlots /></ProtectedRoute>} />
        <Route path="/doctor-appointments" element={<ProtectedRoute><DoctorAppointments /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
