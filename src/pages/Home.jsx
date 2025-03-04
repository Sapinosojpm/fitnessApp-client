import React from "react";
import Workouts from "../components/Workouts.jsx";
import '../css/Home.css';  // Import the CSS file

const Home = () => {
  return (
    <div className="home-bg text-white py-5">
      <div className="container text-center">
        <h1 className="display-4">Your Fitness Journey</h1>
        <p className="lead">Track your workouts and achieve your fitness goals</p>
      </div>

      <div className="container mt-5">
        <h2 className="text-center mb-4">My Workouts</h2>
        <Workouts />
      </div>

      <footer className="bg-dark text-white py-4 mt-5">
        <div className="container text-center">
          <p>&copy; 2025 MyFitnessApp. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
