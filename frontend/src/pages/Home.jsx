import React, { useEffect } from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import { useWorkoutContext } from "../hooks/useWorkoutContext";

const Home = () => {
  const { workouts, dispatch } = useWorkoutContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch("/api/workouts");
        const json = await response.json();

        if (response.ok) {
          dispatch({ type: "SET_WORKOUTS", payload: json });
        } else {
          console.error("Failed to fetch workouts:", json.error);
        }
      } catch (error) {
        console.error("Error fetching workouts:", error);
      }
    };

    fetchWorkouts();
  }, [dispatch]);

  return (
    <div className="home">
      <div className="workouts">
        {workouts && workouts.length > 0 ? (
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))
        ) : (
          <p>No workouts available.</p>
        )}
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;
