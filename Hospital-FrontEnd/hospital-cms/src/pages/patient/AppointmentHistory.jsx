import React, { useEffect, useState } from "react";
import { getPatientAppointments } from "../../services/patientApi";
import MyNavbar from "../../components/MyNavbar";

function AppointmentHistory() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      getPatientAppointments(user.userId).then(setAppointments);
    }
  }, []);

  return (
    <>
      <MyNavbar />
      <div className="container mt-4">
        <h3>My Appointments</h3>

        {appointments.length === 0 ? (
          <p>No appointments found</p>
        ) : (
          <table className="table table-bordered mt-3">
            <thead className="table-dark">
              <tr>
                <th>Doctor</th>
                <th>Specialization</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {appointments.map(a => (
                <tr key={a.appointmentId}> {/* ✅ UNIQUE KEY */}
                  <td>{a.doctor?.fullName}</td>
                  <td>{a.doctor?.specialization?.name}</td>
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

export default AppointmentHistory;
