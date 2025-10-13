import { createContext, useReducer } from "react";

export const WorkoutsContext = createContext();

export const workoutsReducer = (state, action) => {
  switch (action.type) {
    case "SET_WORKOUTS":
      return {
        workouts: action.payload, // ✅ fixed spelling
      };
    case "CREATE_WORKOUT":
      return {
        workouts: [action.payload, ...state.workouts], // ✅ fixed spelling
      };
    case "DELETE_WORKOUT":
      return {
        workouts: state.workouts.filter(
          (w) => w._id !== action.payload._id
        ),
      };
    default:
      return state;
  }
};

export const WorkoutsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutsReducer, {
    workouts: [],
  });

  return (
    <WorkoutsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WorkoutsContext.Provider>
  );
};
