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

  useEffect(() => {
    getSpecializations().then(setSpecializations);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
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
