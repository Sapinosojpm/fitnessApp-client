import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Container, Alert } from "react-bootstrap";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset error state
    setError(null);
    setSuccess(null);

    // Validation
    if (!username || !email || !password) {
      setError("All fields are required.");
      return;
    }
    console.log("API URL:", process.env.REACT_APP_API_URL);

    try {
        const response = await fetch('http://localhost:4000/users/register', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, email, password }),
          });
          
          

      const data = await response.json();

      if (response.ok) {
        setSuccess("Registration successful! You can now log in.");
        setTimeout(() => navigate("/login"), 2000); // Redirect to login after success
      } else {
        setError(data.message || "Failed to register.");
      }
    } catch (err) {
      setError("Server error. Please try again later.");
    }
  };

  return (
    <Container className="mt-5">
      <h2>Register</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Register
        </Button>
      </Form>

      <div className="mt-3 text-center">
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </Container>
  );
};

export default Register;
