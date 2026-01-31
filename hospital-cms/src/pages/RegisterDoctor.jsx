import React, { useEffect, useState } from "react";
import MyNavbar from "../components/MyNavbar";
import { registerDoctor, getSpecializations } from "../services/adminApi";

function RegisterDoctor() {
  const [specializations, setSpecializations] = useState([]);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    specializationId: "",
    password: "",
  });

  // ✅ Error state (frontend only)
  const [error, setError] = useState("");

  // ✅ Validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const nameRegex = /^[a-zA-Z\s]+$/;

  useEffect(() => {
    getSpecializations().then(setSpecializations);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const { fullName, email, phoneNumber, specializationId, password } = form;

    // 🔍 FRONTEND VALIDATION (added only)
    if (!fullName || !email || !specializationId || !password) {
      setError("All required fields must be filled");
      return;
    }

    if (!nameRegex.test(fullName)) {
      setError("Doctor name must contain only letters and spaces");
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

    if (phoneNumber && !/^[0-9]{10}$/.test(phoneNumber)) {
      setError("Phone number must be exactly 10 digits");
      return;
    }

    try {
      // ✅ EXISTING BACKEND LOGIC — UNCHANGED
      await registerDoctor(form);
      alert("✅ Doctor registered successfully");

      setForm({
        fullName: "",
        email: "",
        phoneNumber: "",
        specializationId: "",
        password: "",
      });
    } catch (err) {
      alert("❌ Registration failed");
    }
  };

  return (
    <>
      <MyNavbar />

      <div className="container mt-4">
        <h3>Register New Doctor</h3>

        {/* ✅ Error message display */}
        {error && <p className="text-danger">{error}</p>}

        <form onSubmit={handleSubmit} className="col-md-6 mt-3">
          <input
            className="form-control mb-2"
            name="fullName"
            placeholder="Doctor Name"
            value={form.fullName}
            onChange={handleChange}
            required
          />

          <input
            className="form-control mb-2"
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          {/* ✅ SPECIALIZATION DROPDOWN */}
          <select
            className="form-control mb-2"
            name="specializationId"
            value={form.specializationId}
            onChange={handleChange}
            required
          >
            <option value="">Select Specialization</option>
            {specializations.map((s) => (
              <option key={s.specializationId} value={s.specializationId}>
                {s.name}
              </option>
            ))}
          </select>

          <input
            className="form-control mb-2"
            name="phoneNumber"
            placeholder="Phone Number"
            value={form.phoneNumber}
            onChange={handleChange}
          />

          <input
            className="form-control mb-3"
            name="password"
            type="password"
            placeholder="Temporary Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button className="btn btn-success w-100">
            Register Doctor
          </button>
        </form>
      </div>
    </>
  );
}

export default RegisterDoctor;
