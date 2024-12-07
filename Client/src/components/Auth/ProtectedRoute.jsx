// ProtectedRoute.jsx
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { LogInContext } from "@/App"; // Adjust the path as needed to match your App context location

function ProtectedRoute({ children }) {
  const { isLoggedIn } = useContext(LogInContext);

  return isLoggedIn ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
