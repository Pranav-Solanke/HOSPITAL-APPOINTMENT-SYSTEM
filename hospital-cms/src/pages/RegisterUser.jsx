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

  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ Email validation when user leaves field
  const validateEmail = () => {
    if (form.email && !emailRegex.test(form.email)) {
      alert("Invalid email format");
    }
  };

  const validateAge = () => {
    if (form.age && (form.age < 1 || form.age > 100)) {
      alert("Age must be between 1 and 100");
    }
  };

  const validatePhone = () => {
    if (form.phoneNumber && !/^[0-9]{10}$/.test(form.phoneNumber)) {
      alert("Phone number must be 10 digits");
    }
  };

  const validatePassword = () => {
    if (form.password && form.password.length < 8) {
      alert("Password must be at least 8 characters");
    }
  };

  const validateConfirmPassword = () => {
    if (confirmPassword && form.password !== confirmPassword) {
      alert("Passwords do not match");
    }
  };

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

    if (!isValid) {
      alert("Please fill all fields correctly");
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
            onBlur={validateAge}
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
            onBlur={validateEmail}
          />

          <input
            className="form-control mb-2"
            name="phoneNumber"
            placeholder="Phone"
            value={form.phoneNumber}
            onChange={handleChange}
            onBlur={validatePhone}
          />

          <div className="mb-2 position-relative">
            <input
              className="form-control"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              onBlur={validatePassword}
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

          <input
            className="form-control mb-3"
            type={showPassword ? "text" : "password"}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            onBlur={validateConfirmPassword}
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
