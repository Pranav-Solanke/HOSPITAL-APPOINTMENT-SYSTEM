import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import MyNavbar from "../components/MyNavbar";
import { FaUserMd, FaList, FaUserInjured } from "react-icons/fa";

function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <>
      <MyNavbar />

      <Container className="mt-5">
        <h2 className="mb-4">Admin Dashboard</h2>

        <Row>
          {/* Add New Doctor */}
          <Col md={4} className="mb-4">
            <Card className="text-center p-3 shadow h-100">
              <FaUserMd size={50} className="text-primary mb-3" />
              <h5>Add New Doctor</h5>
              <Button
                variant="primary"
                className="mt-3"
                onClick={() => navigate("/admin/register-doctor")}
              >
                ADD
              </Button>
            </Card>
          </Col>

          {/* View Appointments */}
          <Col md={4} className="mb-4">
            <Card className="text-center p-3 shadow h-100">
              <FaList size={50} className="text-info mb-3" />
              <h5>View Appointments</h5>
              <Button
                variant="info"
                className="mt-3"
                onClick={() => navigate("/admin/appointments")}
              >
                VIEW
              </Button>
            </Card>
          </Col>

          {/* View Patients */}
          <Col md={4} className="mb-4">
            <Card className="text-center p-3 shadow h-100">
              <FaUserInjured size={50} className="text-success mb-3" />
              <h5>View Patients</h5>
              <Button
                variant="success"
                className="mt-3"
                onClick={() => navigate("/admin/patients")}
              >
                VIEW
              </Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AdminDashboard;
