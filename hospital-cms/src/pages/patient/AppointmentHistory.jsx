import React, { useEffect, useState } from "react";
import { getPatientAppointments } from "../../services/patientApi";
import MyNavbar from "../../components/MyNavbar";

function AppointmentHistory() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      getPatientAppointments(user.userId)
        .then(setAppointments)
        .finally(() => setLoading(false));
    }
  }, []);

  return (
    <>
      <MyNavbar />
      <div className="container mt-4">
        <h3>Appointment History</h3>

        {loading ? (
          <p>Loading...</p>
        ) : appointments.length === 0 ? (
          <div className="alert alert-info">No appointment history</div>
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
              {appointments.map((a) => (
                <tr key={a.appointmentId}>
                  <td>{a.doctor?.fullName}</td>
                  <td>{a.doctor?.specialization?.name}</td>
                  <td>
                    {new Date(a.appointmentDate).toLocaleDateString()}
                  </td>
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
