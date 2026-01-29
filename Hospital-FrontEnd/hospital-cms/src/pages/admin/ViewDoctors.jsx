import React from "react";
import MyNavbar from "../../components/MyNavbar";

function ViewDoctors() {
  // Dummy data (replace with API later)
  const doctors = [
    {
      id: 1,
      name: "Dr. Amit Sharma",
      email: "amit@gmail.com",
      specialization: "Cardiology",
      phone: "9876543210",
      status: "Active",
    },
    {
      id: 2,
      name: "Dr. Neha Verma",
      email: "neha@gmail.com",
      specialization: "Neurology",
      phone: "9123456789",
      status: "Active",
    },
  ];

  return (
    <>
      <MyNavbar />
      <div className="container mt-4">
        <h3>All Registered Doctors</h3>

        <table className="table table-bordered table-hover mt-3">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Specialization</th>
              <th>Phone</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((d, index) => (
              <tr key={d.id}>
                <td>{index + 1}</td>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>{d.specialization}</td>
                <td>{d.phone}</td>
                <td>
                  <span className="badge bg-success">
                    {d.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ViewDoctors;
