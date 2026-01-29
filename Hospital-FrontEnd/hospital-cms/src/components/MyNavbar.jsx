import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const MyNavbar = () => {
  const navigate = useNavigate();
  // Check if user is logged in (mock logic)
  const isLoggedIn = localStorage.getItem('user');

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="py-3" style={{ backgroundColor: '#2c3e50' }}>
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          🏥 <span className="ms-2 fw-bold">Hospital Appointment System</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
            {isLoggedIn ? (
              <Button variant="danger" className="ms-2" onClick={handleLogout}>Logout</Button>
            ) : (
              <div className="d-flex gap-2">
                 <Button variant="outline-light" as={Link} to="/login">Login</Button>
                 <Button variant="primary" as={Link} to="/register-user">Sign Up</Button>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;