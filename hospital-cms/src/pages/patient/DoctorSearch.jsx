import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDoctorsBySpecialization } from "../../services/patientApi";
import MyNavbar from "../../components/MyNavbar";

function DoctorSearch() {
  const [specialization, setSpecialization] = useState("");
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (!specialization) {
      alert("Select specialization");
      return;
    }

    const data = await getDoctorsBySpecialization(specialization);
    setDoctors(data);
  };

  return (
    <>
      <MyNavbar />
      <div className="container mt-4">
        <h3>Find Doctor</h3>

        <select
          className="form-control mb-3"
          onChange={(e) => setSpecialization(e.target.value)}
        >
          <option value="">Select Specialization</option>
          <option value="1">Cardiology</option>
          <option value="2">Neurology</option>
          <option value="3">Orthopedics</option>
          <option value="4">Dermatology</option>
          <option value="5">General Medicine</option>
        </select>

        <button className="btn btn-primary mb-4" onClick={handleSearch}>
          Search
        </button>

        <div className="row">
          {doctors.length === 0 && (
            <p className="text-muted">No doctors found</p>
          )}

          {doctors.map((doc) => (
            <div className="col-md-4" key={doc.doctorId}>
              <div className="card p-3 shadow">
                <h5>{doc.fullName}</h5>
                <p>{doc.specialization?.name}</p>
                <button
                  className="btn btn-success"
                  onClick={() =>
                    navigate("/book-appointment", {
                      state: { doctor: doc },
                    })
                  }
                >
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default DoctorSearch;
