import React, { createContext, useState, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // TIP: Set this to { name: "Alex" } temporarily to bypass the login screen
  const [user, setUser] = useState(null); 

  const login = (data) => setUser(data);
  const register = (data) => setUser(data);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Add this helper hook
export const useAuth = () => useContext(AuthContext);