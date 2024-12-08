import React, { createContext } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./App.css";

// Components and Pages
import NavbarMain from "./components/Navbar/TopNav/NavbarMain";
import Footer from "./components/Navbar/Footer/Footer";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import { PublicRoutes, PrivateRoutes } from "./Routes/RouteConfig.js";

// Custom Hook
import { useAuth } from "./hooks/useAuth";

// Create Context
export const LogInContext = createContext();

function App() {
  const { isLoggedIn, user, handleLogin, handleLogout } = useAuth();

  return (
    <LogInContext.Provider
      value={{ isLoggedIn, login: handleLogin, logout: handleLogout, user }}
    >
      <NavbarMain />
      <main>
        <Routes>
          {/* Public Routes */}
          {PublicRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}

          {/* Protected Routes */}
          {PrivateRoutes.map(({ path, Component }) => (
            <Route
              key={path}
              path={path}
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Component />
                </ProtectedRoute>
              }
            />
          ))}

          {/* Fallback Route */}
          <Route
            path="*"
            element={
              <div className="min-h-screen mx-auto text-xl text-center my-auto p-10">
                404 Page Not Found
              </div>
            }
          />
        </Routes>
      </main>
      <Footer />
      <Toaster position="top-right" />
    </LogInContext.Provider>
  );
}

export default App;
