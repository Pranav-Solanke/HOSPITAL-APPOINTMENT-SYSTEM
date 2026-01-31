import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authApi";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ✅ Error state (frontend only)
  const [error, setError] = useState("");

  // ✅ Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // 🔍 FRONTEND VALIDATION (added only)
    if (!email || !password) {
      setError("Email and password are required");
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

    try {
      // ✅ EXISTING BACKEND LOGIC — UNCHANGED
      const res = await login({ email, password });
      localStorage.setItem("user", JSON.stringify(res));

      if (res.role === "Admin") navigate("/admin-dashboard");
      else if (res.role === "Doctor") navigate("/doctor-dashboard");
      else navigate("/patient-dashboard");
    } catch {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="container mt-5 col-md-4">
      <h4>Login</h4>

      {/* ✅ Error message display */}
      {error && <p className="text-danger">{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <input
          className="form-control mb-2"
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
}

export default Login;
