import React from "react";
import { useNavigate } from "react-router-dom";
import MyNavbar from "../components/MyNavbar";

function DoctorDashboard() {
  const navigate = useNavigate();

  return (
    <>
      <MyNavbar />

      <div className="container mt-4">
        <h3>Hello, Doctor</h3>

        <div className="row g-4">
          {/* Active Appointments */}
          <div className="col-md-6">
            <div className="card p-3 shadow">
              <h5>Active Appointments</h5>
              <button
                className="btn btn-primary w-100"
                onClick={() => navigate("/doctor-appointments")}
              >
                View
              </button>
            </div>
          </div>

          {/* Create / Block Slots */}
          <div className="col-md-6">
            <div className="card p-3 shadow">
              <h5>Create / Block Slots</h5>
              <button
                className="btn btn-success w-100"
                onClick={() => navigate("/doctor/manage-slots")}
              >
                Manage Slots
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DoctorDashboard;
