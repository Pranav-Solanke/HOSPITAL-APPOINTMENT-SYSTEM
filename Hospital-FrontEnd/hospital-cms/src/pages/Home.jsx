import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-dark px-4">
        <span className="navbar-brand">Hospital Appointment System</span>
        <div>
          <Link to="/" className="nav-link d-inline text-white me-3">
            Home
          </Link>
          <Link to="/login" className="nav-link d-inline text-white">
            Login
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div
        className="d-flex align-items-center"
        style={{ minHeight: "80vh", background: "#f8f9fa" }}
      >
        <div className="container text-center">
          <h1 className="display-4 fw-bold">
            Welcome to Hospital Appointment System
          </h1>
          <p className="lead">
            Book medical consultations with specialist doctors in your city.
          </p>

          <div className="mt-4">
            <Link to="/register-user" className="btn btn-success me-3">
              PATIENT SIGN UP
            </Link>

            <Link to="/login" className="btn btn-primary">
              LOGIN
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
