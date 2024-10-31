// AuthContext.js
import React, { createContext, useState, useContext } from "react";

// Create context
const AuthContext = createContext();

// Custom hook to use the auth context
export function useAuth() {
  return useContext(AuthContext);
}

// Auth Provider component
export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState("");

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
