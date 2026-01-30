import React, { useState } from "react";
import MyNavbar from "../components/MyNavbar";
import api from "../services/api";

function RegisterUser() {
  const [form, setForm] = useState({
    fullName: "",
    age: "",
    gender: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/Patient", form);
      alert("Patient registered successfully");

      setForm({
        fullName: "",
        age: "",
        gender: "",
        email: "",
        phoneNumber: "",
        password: "",
      });
    } catch {
      alert("Registration failed");
    }
  };

  return (
    <>
      <MyNavbar />
      <div className="container mt-4">
        <h3>Patient Registration</h3>

        <form onSubmit={handleSubmit} className="col-md-6 mt-3">
          <input className="form-control mb-2" name="fullName" placeholder="Full Name" value={form.fullName} onChange={handleChange} />
          <input className="form-control mb-2" name="age" type="number" placeholder="Age" value={form.age} onChange={handleChange} />
          <select className="form-control mb-2" name="gender" value={form.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
          <input className="form-control mb-2" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
          <input className="form-control mb-2" name="phoneNumber" placeholder="Phone" value={form.phoneNumber} onChange={handleChange} />
          <input className="form-control mb-3" name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} />
          <button className="btn btn-success w-100">Register</button>
        </form>
      </div>
    </>
  );
}

export default RegisterUser;
