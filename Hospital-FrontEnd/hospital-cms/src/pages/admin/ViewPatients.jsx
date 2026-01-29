import React, { useEffect, useState } from "react";
import MyNavbar from "../../components/MyNavbar";
import { getAllPatients } from "../../services/adminApi";

function ViewPatients() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    getAllPatients()
      .then(setPatients)
      .catch(() => alert("Failed to load patients"));
  }, []);

  return (
    <>
      <MyNavbar />

      <div className="container mt-4">
        <h3>Registered Patients</h3>

        <table className="table table-bordered mt-3">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>

          <tbody>
            {patients.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center">
                  No patients found
                </td>
              </tr>
            ) : (
              patients.map((p, index) => (
                <tr key={p.patientId}>
                  <td>{index + 1}</td>
                  <td>{p.fullName}</td>
                  <td>{p.email}</td>
                  <td>{p.phoneNumber}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ViewPatients;
