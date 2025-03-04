// src/App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { WorkoutProvider } from "./context/WorkoutContext";  // Import WorkoutProvider
import Workouts from "./components/Workouts";  // Import Workouts component
import AddWorkout from "./components/AddWorkout";  // Import AddWorkout component
import AppNavbar from "./components/Navbar";  // Import Navbar
import Login from "./components/Login";  // Import Login component
import Register from "./components/Register";  // Import Register component
import Home from "./pages/Home"
const App = () => {
  return (
    <WorkoutProvider>
      <Router>
        <AppNavbar />
        <Routes>
          <Route path="/" element={<Home />} />  {/* Display workouts */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add-workout" element={<AddWorkout />} />
          <Route path="/workouts" element={<Workouts />} />
        </Routes>
      </Router>
    </WorkoutProvider>
  );
};

export default App;
