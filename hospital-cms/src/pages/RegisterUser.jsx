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

  // ✅ NEW STATES (added only)
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ VALIDATION CHECK FOR BUTTON
  const isValid =
    form.fullName &&
    form.age >= 1 &&
    form.age <= 100 &&
    form.gender &&
    emailRegex.test(form.email) &&
    /^[0-9]{10}$/.test(form.phoneNumber) &&
    form.password.length >= 8 &&
    form.password === confirmPassword;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const { fullName, age, gender, email, phoneNumber, password } = form;

    if (!isValid) {
      setError("Please fill all fields correctly");
      return;
    }

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
      setConfirmPassword("");
    } catch {
      alert("Registration failed");
    }
  };

  return (
    <>
      <MyNavbar />
      <div className="container mt-4">
        <h3>Patient Registration</h3>

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

          {/* PASSWORD WITH EYE BUTTON */}
          <div className="mb-2 position-relative">
            <input
              className="form-control"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: "absolute",
                right: "10px",
                top: "8px",
                cursor: "pointer",
                fontSize: "14px",
                color: "blue"
              }}
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>

          {/* CONFIRM PASSWORD */}
          <input
            className="form-control mb-3"
            type={showPassword ? "text" : "password"}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button
            className="btn btn-success w-100"
            disabled={!isValid}
            style={{
              opacity: isValid ? 1 : 0.5,
              cursor: isValid ? "pointer" : "not-allowed",
            }}
          >
            Register
          </button>
        </form>
      </div>
    </>
  );
}

export default RegisterUser;
