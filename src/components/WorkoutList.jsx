// src/components/WorkoutList.js

import React from 'react';
import { ListGroup, Button, Container, Row, Col } from 'react-bootstrap';
import { useWorkouts } from '../context/WorkoutContext';

const WorkoutList = () => {
  const { workouts, deleteWorkout, completeWorkout } = useWorkouts();

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Row className="w-100">
        <Col xs={12} sm={8} md={6} lg={4} className="mx-auto">
          <div className="border p-4 rounded shadow-sm">
            <h2 className="text-center mb-4">My Workouts</h2>
            <ListGroup>
              {workouts.length === 0 ? (
                <p>No workouts added yet.</p>
              ) : (
                workouts.map((workout) => (
                  <ListGroup.Item key={workout._id}>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <h5>{workout.name}</h5>
                        <p>Duration: {workout.duration} minutes</p>
                      </div>
                      <div className="d-flex gap-2">
                        <Button
                          variant={workout.completed ? 'success' : 'warning'}
                          onClick={() => completeWorkout(workout._id)}
                        >
                          {workout.completed ? 'Completed' : 'Complete'}
                        </Button>
                        <Button
                          variant="danger"
                          onClick={() => deleteWorkout(workout._id)}
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                  </ListGroup.Item>
                ))
              )}
            </ListGroup>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default WorkoutList;  // Default export for WorkoutList
