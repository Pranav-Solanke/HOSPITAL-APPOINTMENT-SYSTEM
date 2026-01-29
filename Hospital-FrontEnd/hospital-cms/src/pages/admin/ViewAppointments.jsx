import React, { useEffect, useState } from "react";
import MyNavbar from "../../components/MyNavbar";
import { getAllAppointments } from "../../services/adminApi";

function ViewAppointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    getAllAppointments()
      .then(setAppointments)
      .catch(() => alert("Failed to load appointments"));
  }, []);

  return (
    <>
      <MyNavbar />

      <div className="container mt-4">
        <h3>All Appointments</h3>

        <table className="table table-bordered mt-3">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Patient</th>
              <th>Doctor</th>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {appointments.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center">
                  No appointments found
                </td>
              </tr>
            ) : (
              appointments.map((a, index) => {
                const dateObj = new Date(a.appointmentDate);
                const isPast = dateObj < new Date();

                return (
                  <tr key={a.appointmentId}>
                    <td>{index + 1}</td>
                    <td>{a.patient?.fullName}</td>
                    <td>
                      Dr. {a.doctor?.fullName} (
                      {a.doctor?.specialization?.name})
                    </td>
                    <td>{a.appointmentDate?.split("T")[0]}</td>
                    <td>
                      {dateObj.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </td>
                    <td>
                      <span
                        className={`badge ${
                          isPast ? "bg-success" : "bg-warning"
                        }`}
                      >
                        {isPast ? "Completed" : "Upcoming"}
                      </span>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ViewAppointments;
