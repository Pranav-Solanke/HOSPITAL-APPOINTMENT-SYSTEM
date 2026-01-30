import React, { useState } from "react";
import MyNavbar from "../../components/MyNavbar";
import api from "../../services/api"; // ✅ only once

function ManageSlots() {
  const [date, setDate] = useState("");

  const today = new Date();
  const todayStr = today.toISOString().split("T")[0];

  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  const tomorrowStr = tomorrow.toISOString().split("T")[0];

  const handleBlock = async () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user || !user.userId) {
      alert("Doctor not logged in");
      return;
    }

    if (!date) {
      alert("Please select a date");
      return;
    }

    try {
      await api.post("/Appointment/block", {
        doctorId: user.userId,
        appointmentDate: date,
      });

      alert("✅ Date blocked successfully");
      setDate("");
    } catch (err) {
      alert(
        "❌ " +
          (err.response?.data ||
            err.response?.data?.message ||
            "Failed to block date")
      );
    }
  };

  return (
    <>
      <MyNavbar />
      <div className="container mt-4">
        <h3>Manage Slot Availability</h3>

       <input
  type="date"
  className="form-control mb-3"
  value={date}
  min={todayStr}        // ✅ blocks past dates
  onChange={(e) => setDate(e.target.value)}
/>

        <button className="btn btn-danger" onClick={handleBlock}>
          Block Date
        </button>
      </div>
    </>
  );
}

export default ManageSlots;
