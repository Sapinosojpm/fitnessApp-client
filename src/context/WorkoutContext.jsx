// src/context/WorkoutContext.js

import { createContext, useState, useContext } from "react";

const API_URL = process.env.REACT_APP_API_URL;
// Create the WorkoutContext
const WorkoutContext = createContext();

// Create the WorkoutProvider component
export const WorkoutProvider = ({ children }) => {
  const [workouts, setWorkouts] = useState([]);

  // Function to fetch workouts from the server
  const fetchWorkouts = async () => {
    try {
      const response = await fetch(`${API_URL}/workouts/getMyWorkouts`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setWorkouts(data); // Set the workouts in state
      } else {
        console.error("Failed to fetch workouts");
      }
    } catch (error) {
      console.error("Error fetching workouts:", error);
    }
  };

  // Function to add a new workout
  const addWorkout = async (workout) => {
    try {
      const response = await fetch(`${API_URL}/workouts/addWorkout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(workout),
      });

      if (response.ok) {
        fetchWorkouts(); // Re-fetch workouts after adding
      } else {
        console.error("Failed to add workout");
      }
    } catch (error) {
      console.error("Error adding workout:", error);
    }
  };

  return (
    <WorkoutContext.Provider value={{ workouts, fetchWorkouts, addWorkout }}>
      {children}
    </WorkoutContext.Provider>
  );
};

// Hook to use workouts context
export const useWorkouts = () => useContext(WorkoutContext);
