import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { WorkoutsContextProvider } from "./context/WorkoutContext.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <WorkoutsContextProvider>
      <App />
    </WorkoutsContextProvider>
  </AuthContextProvider>
);
