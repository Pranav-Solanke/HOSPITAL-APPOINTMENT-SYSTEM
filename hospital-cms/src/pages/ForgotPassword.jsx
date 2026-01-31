import React, { useState } from "react";
import api from "../services/api";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  // ✅ NEW STATE (added only)
  const [showPassword, setShowPassword] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const isValid =
    emailRegex.test(email) &&
    password.length >= 8 &&
    password === confirm;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!isValid) {
      setError("Please fill all fields correctly");
      return;
    }

    try {
      await api.post("/auth/simple-reset-password", {
        email,
        newPassword: password,
      });

      alert("Password updated successfully");
      setEmail("");
      setPassword("");
      setConfirm("");
    } catch {
      setError("Email not found");
    }
  };

  return (
    <div className="container mt-5 col-md-4">
      <h4>Forgot Password</h4>

      {error && <p className="text-danger">{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          placeholder="Registered Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        {/* PASSWORD WITH EYE */}
        <div className="mb-2 position-relative">
          <input
            type={showPassword ? "text" : "password"}
            className="form-control"
            placeholder="New Password (min 8 chars)"
            value={password}
            onChange={e => setPassword(e.target.value)}
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

        {/* CONFIRM PASSWORD WITH SAME EYE */}
        <input
          type={showPassword ? "text" : "password"}
          className="form-control mb-3"
          placeholder="Confirm Password"
          value={confirm}
          onChange={e => setConfirm(e.target.value)}
        />

        <button
          className="btn btn-primary w-100"
          disabled={!isValid}
          style={{
            opacity: isValid ? 1 : 0.5,
            cursor: isValid ? "pointer" : "not-allowed",
          }}
        >
          Update Password
        </button>
      </form>
    </div>
  );
}

export default ForgotPassword;
