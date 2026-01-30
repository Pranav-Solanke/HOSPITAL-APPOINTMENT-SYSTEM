import React, { useEffect, useState } from "react";
import { getCurrentAppointment } from "../../services/patientApi";
import MyNavbar from "../../components/MyNavbar";

function CurrentAppointment() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      getCurrentAppointment(user.userId)
        .then(setAppointments)
        .finally(() => setLoading(false));
    }
  }, []);

  return (
    <>
      <MyNavbar />
      <div className="container mt-4">
        <h3>Current Appointments</h3>

        {loading ? (
          <p>Loading...</p>
        ) : appointments.length === 0 ? (
          <div className="alert alert-info">
            No current appointments
          </div>
        ) : (
          appointments.map((a) => (
            <div
              className="card p-3 mb-3 shadow"
              key={a.appointmentId}
            >
              <p>
                <b>Doctor:</b> {a.doctor?.fullName}
              </p>
              <p>
                <b>Specialization:</b>{" "}
                {a.doctor?.specialization?.name}
              </p>
              <p>
                <b>Date:</b>{" "}
                {new Date(a.appointmentDate).toLocaleDateString()}
              </p>
              <p>
                <b>Status:</b> {a.status}
              </p>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default CurrentAppointment;
