import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import axiosInstance from "../Api/AxiosInstance";

export const useAuth = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [sessionTokenStored, setSessionTokenStored] = useState("");

  // Validate session on load
  useEffect(() => {
    const validateSession = async () => {
      try {
        const res = await axiosInstance.post("/session/validate");

        if (res.status === 200) {
          setUser(res.data.data);
          setIsLoggedIn(true);
          const token = uuidv4();
          sessionStorage.setItem("UUID", token);
        } else {
          handleLogout();
        }
      } catch (error) {
        console.error("Session validation failed:", error);
        handleLogout();
      }
    };

    // Trigger session validation after a delay
    setTimeout(() => {
      validateSession();
    }, 500);
  }, []);

  // Login function
  const handleLogin = (userData) => {
    if (userData) {
      const token = uuidv4();
      setUser(userData);
      sessionStorage.setItem("UUID", token);
      setSessionTokenStored(token);
      setIsLoggedIn(true);
    } else {
      handleLogout();
    }
  };

  // Logout function
  const handleLogout = async () => {
    try {
      const res = await axiosInstance.post("/user/logout");
      if (res.data) {
        setIsLoggedIn(false);
        setUser(null);
        sessionStorage.removeItem("UUID");
        navigate("/login");
      } else {
        console.error("Logout API failed.");
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return { isLoggedIn, user, handleLogin, handleLogout };
};
