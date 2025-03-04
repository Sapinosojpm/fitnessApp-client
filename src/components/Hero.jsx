import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const HeroSection = () => {
  return (
    <div
      className="hero-section d-flex justify-content-center align-items-center text-center"
      style={{
        backgroundImage: 'url("https://example.com/gym-background.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        color: 'white',
      }}
    >
      <div className="overlay" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}></div>

      <div className="content">
        <h1 className="display-4">Welcome to FitZone</h1>
        <p className="lead">Your journey to a healthier life starts here.</p>
        <Button variant="primary" size="lg" href="/register">Join Us Now</Button>
      </div>
    </div>
  );
};

export default HeroSection;
