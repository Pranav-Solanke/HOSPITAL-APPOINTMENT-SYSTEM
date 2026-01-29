import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { bookAppointment } from "../../services/patientApi";
import MyNavbar from "../../components/MyNavbar";

function BookAppointment() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const doctor = state?.doctor;
  const [date, setDate] = useState("");

  if (!doctor) {
    return (
      <>
        <MyNavbar />
        <div className="container mt-5">
          <h4>No doctor selected</h4>
        </div>
      </>
    );
  }

  const handleBook = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      alert("Login required");
      return;
    }

    try {
      await bookAppointment({
        doctorId: doctor.doctorId,
        patientId: user.userId,
        appointmentDate: date
      });

      alert("✅ Booking confirmed");
      navigate("/current-appointment");
    } catch (err) {
      alert(err?.response?.data || "❌ Booking failed");
    }
  };

  return (
    <>
      <MyNavbar />
      <div className="container mt-4">
        <h3>Book Appointment</h3>

        <p><b>Doctor:</b> {doctor.fullName}</p>
        <p><b>Specialization:</b> {doctor.specialization?.name}</p>

        <input
  type="date"
  className="form-control mb-3"
  min={new Date().toISOString().split("T")[0]}   // ✅ TODAY
  onChange={(e) => setDate(e.target.value)}
/>


        <button
          className="btn btn-primary"
          disabled={!date}
          onClick={handleBook}
        >
          Confirm Booking
        </button>
      </div>
    </>
  );
}

export default BookAppointment;
