import React, { useState } from "react";
import { Navbar, Nav, Offcanvas, Button, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const AppNavbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();
  
  // Check if the user is logged in based on the token in localStorage
  const isLoggedIn = localStorage.getItem("token");

  const handleLogout = () => {
    // Remove the token from localStorage (user is logged out)
    localStorage.removeItem("token");
    navigate("/login");  // Redirect to the login page
  };

  return (
    <>
      {/* Navbar - Always Visible */}
      <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
        <Container>
          {/* Brand Logo */}
          <Navbar.Brand as={Link} to="/" className="fw-bold text-light">
          Nangangayayat Fitness Zone
          </Navbar.Brand>

          {/* ☰ Button (Hidden on Large Screens) - Opens Sidebar on the Right */}
          <Button
            variant="outline-light"
            onClick={() => setShowSidebar(true)}
            className="d-lg-none ms-auto"
          >
            ☰
          </Button>

          {/* Normal Navbar Menu (Hidden on Small & Medium Screens) */}
          <Nav className="ms-auto d-none d-lg-flex align-items-center">
            <Nav.Link as={Link} to="/" className="text-light">Home</Nav.Link>
            <Nav.Link as={Link} to="/workouts" className="text-light">Workouts</Nav.Link>
            <Nav.Link as={Link} to="/add-workout" className="text-light">Add Workout</Nav.Link>

            {/* Conditionally render Login, Register or Logout */}
            {!isLoggedIn ? (
              <>
                <Link to="/login" className="btn btn-outline-light mx-2">Login</Link>
                <Link to="/register" className="btn btn-primary">Register</Link>
              </>
            ) : (
              <Button variant="outline-light" onClick={handleLogout}>Logout</Button>
            )}
          </Nav>
        </Container>
      </Navbar>

      {/* Right Sidebar - Only for Small & Medium Screens */}
      <Offcanvas
        show={showSidebar}
        onHide={() => setShowSidebar(false)}
        placement="end"
        className="bg-dark text-light d-lg-none"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="fw-bold">Nangangayayat Fitness Zone</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/" className="nav-custom">Home</Nav.Link>
            <Nav.Link as={Link} to="/workouts" className="nav-custom">Workouts</Nav.Link>
            <Nav.Link as={Link} to="/addWorkout" className="nav-custom">Add Workout</Nav.Link>

            {/* Conditionally render Sidebar Login, Register or Logout */}
            {!isLoggedIn ? (
              <>
                <Link to="/login" className="btn btn-outline-light my-2">Login</Link>
                <Link to="/register" className="btn btn-primary">Register</Link>
              </>
            ) : (
              <Button variant="outline-light" onClick={handleLogout} className="my-2">Logout</Button>
            )}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Custom Styles */}
      <style>
        {`
          .nav-custom {
            color: white !important;
            font-size: 18px;
            padding: 10px;
            transition: background 0.3s;
          }

          .nav-custom:hover {
            background: rgba(255, 255, 255, 0.2);
            border-radius: 5px;
          }
        `}
      </style>
    </>
  );
};

export default AppNavbar;
