import React, { useEffect, useState } from "react";
import { getCurrentAppointment } from "../../services/patientApi";
import MyNavbar from "../../components/MyNavbar";

function CurrentAppointment() {
  const [appointment, setAppointment] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      getCurrentAppointment(user.userId).then(setAppointment);
    }
  }, []);

  return (
    <>
      <MyNavbar />
      <div className="container mt-4">
        <h3>Current Appointment</h3>

        {!appointment ? (
          <div className="alert alert-info">No current appointment</div>
        ) : (
          <div className="card p-4 shadow">
            <p>
              <b>Doctor:</b> {appointment.doctor?.fullName}
            </p>
            <p>
              <b>Specialization:</b>{" "}
              {appointment.doctor?.specialization?.name}
            </p>
            <p>
              <b>Date:</b>{" "}
              {new Date(appointment.appointmentDate).toLocaleDateString()}
            </p>
            <p>
              <b>Status:</b> {appointment.status}
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default CurrentAppointment;
