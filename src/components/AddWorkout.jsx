// src/components/AddWorkout.js

import React, { useState } from 'react';
import { useWorkouts } from '../context/WorkoutContext';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Importing useNavigate for navigation

const AddWorkout = () => {
  const { addWorkout } = useWorkouts();
  const [name, setName] = useState('');
  const [duration, setDuration] = useState('');
  const navigate = useNavigate();  // Hook for navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    const newWorkout = { name, duration: parseInt(duration) };
    addWorkout(newWorkout);  // Call addWorkout from context
    setName('');
    setDuration('');
  };

  const handleCancel = () => {
    // Navigate back to the workout list page or any desired page
    navigate('/workouts');
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Row className="w-100">
        <Col xs={12} sm={8} md={6} lg={4} className="mx-auto">
          <div className="border p-4 rounded shadow-sm">
            <h2 className="text-center mb-4">Add Workout</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formWorkoutName">
                <Form.Label>Workout Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter workout name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formWorkoutDuration">
                <Form.Label>Duration (minutes)</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter duration"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100 mb-2">
                Add Workout
              </Button>

              <Button variant="secondary" onClick={handleCancel} className="w-100">
                Cancel
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AddWorkout;
