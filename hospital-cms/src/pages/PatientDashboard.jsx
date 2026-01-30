import React from 'react'; // ✅ Added React import
import { useNavigate } from 'react-router-dom';
import MyNavbar from "../components/MyNavbar"; // ✅ Added Navbar

function PatientDashboard() {
  const navigate = useNavigate();

  return (
    <>
      <MyNavbar />
      <div className="container mt-4">
        <h3>Hello, User</h3>

        <div className="row g-4">

          {/* Book Appointment */}
          <div className="col-md-4">
            <div className="card p-3 shadow text-center">
              <h5>Book Appointment</h5>
              <button
                className="btn btn-primary"
                onClick={() => navigate("/find-doctor")}
              >
                BOOK
              </button>
            </div>
          </div>

          {/* Current Appointment */}
          <div className="col-md-4">
            <div className="card p-3 shadow text-center">
              <h5>Current Appointment</h5>
              <button
                className="btn btn-warning"
                onClick={() => navigate("/current-appointment")}
              >
                VIEW
              </button>
            </div>
          </div>

          {/* Appointment History */}
          <div className="col-md-4">
            <div className="card p-3 shadow text-center">
              <h5>Appointment History</h5>
              <button
                className="btn btn-info"
                onClick={() => navigate("/patient-appointments")}
              >
                View Appointment History
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default PatientDashboard;