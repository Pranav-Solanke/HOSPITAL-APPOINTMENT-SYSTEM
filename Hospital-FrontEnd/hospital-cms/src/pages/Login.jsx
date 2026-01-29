import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authApi";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
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
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" placeholder="Email" onChange={e => setEmail(e.target.value)} />
        <input className="form-control mb-2" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
        <button className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
}

export default Login;
