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

  // ✅ Error state added (frontend only)
  const [error, setError] = useState("");

  // ✅ Email regex (lightweight)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const { fullName, age, gender, email, phoneNumber, password } = form;

    // 🔍 FRONTEND VALIDATION (added only)
    if (!fullName || !age || !gender || !email || !phoneNumber || !password) {
      setError("All fields are required");
      return;
    }

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }

    if (!/^[0-9]{10}$/.test(phoneNumber)) {
      setError("Phone number must be exactly 10 digits");
      return;
    }

    try {
      // ✅ EXISTING BACKEND LOGIC — UNTOUCHED
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

        {/* ✅ Error message display */}
        {error && <p className="text-danger">{error}</p>}

        <form onSubmit={handleSubmit} className="col-md-6 mt-3">
          <input
            className="form-control mb-2"
            name="fullName"
            placeholder="Full Name"
            value={form.fullName}
            onChange={handleChange}
          />

          <input
            className="form-control mb-2"
            name="age"
            type="number"
            placeholder="Age"
            value={form.age}
            onChange={handleChange}
          />

          <select
            className="form-control mb-2"
            name="gender"
            value={form.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

          <input
            className="form-control mb-2"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />

          <input
            className="form-control mb-2"
            name="phoneNumber"
            placeholder="Phone"
            value={form.phoneNumber}
            onChange={handleChange}
          />

          <input
            className="form-control mb-3"
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />

          <button className="btn btn-success w-100">Register</button>
        </form>
      </div>
    </>
  );
}

export default RegisterUser;
