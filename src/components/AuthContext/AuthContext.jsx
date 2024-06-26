import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check local storage for existing login state
    const storedLoginStatus = localStorage.getItem("isLoggedIn");

    if (storedLoginStatus === "true") {
      // Set state from local storage if user is logged in
      setIsLoggedIn(true);
    }
  }, []);

  const signIn = () => {
    // Set state and save to local storage on successful sign in
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
  };

  const signOut = () => {
    // Clear state and local storage on sign out
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", "false");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
