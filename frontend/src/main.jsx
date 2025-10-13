import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { WorkoutsContextProvider } from "./context/WorkoutContext.jsx";

createRoot(document.getElementById("root")).render(
  <WorkoutsContextProvider>
    <App />
  </WorkoutsContextProvider>
);
