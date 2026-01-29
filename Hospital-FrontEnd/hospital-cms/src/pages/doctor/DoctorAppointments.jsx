import React, { useEffect, useState } from "react";
import { getDoctorAppointments } from "../../services/doctorApi";
import MyNavbar from "../../components/MyNavbar";

function DoctorAppointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const doctor = JSON.parse(localStorage.getItem("user"));
    if (doctor) {
      getDoctorAppointments(doctor.userId).then(setAppointments);
    }
  }, []);

  return (
    <>
      <MyNavbar />
      <div className="container mt-4">
        <h3>Active Appointments</h3>

        {appointments.length === 0 ? (
          <p>No appointments found.</p>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>Patient</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map(a => (
                <tr key={a.appointmentId}>
                  <td>{a.patient?.fullName}</td>
                  <td>{new Date(a.appointmentDate).toLocaleDateString()}</td>
                  <td>{a.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default DoctorAppointments;
