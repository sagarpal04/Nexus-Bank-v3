// AuthContext.js
import React, { createContext, useState, useContext, useEffect } from "react";

// Create context
const AuthContext = createContext();

// Custom hook to use the auth context
export function useAuth() {
  return useContext(AuthContext);
}

// Auth Provider component
export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState("");
  const [remainingTime, setRemainingTime] = useState(0); // State for remaining time

  useEffect(() => {
    let timer;

    if (isAuthenticated) {
      setRemainingTime(60); // Set remaining time to 900 seconds (15 minutes)
      timer = setInterval(() => {
        setRemainingTime((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer);
            setIsAuthenticated(""); // Reset authentication
            return 0; // Clear remaining time
          }
          return prevTime - 1; // Decrement remaining time
        });
      }, 1000); // Update every second
    }

    return () => {
      clearInterval(timer); // Clean up on unmount
    };
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, remainingTime }}
    >
      {children}
    </AuthContext.Provider>
  );
}
