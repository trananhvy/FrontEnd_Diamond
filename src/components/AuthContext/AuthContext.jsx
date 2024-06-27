import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRole, setIsRole] = useState();
  const [userData, setUserData] = useState();
  useEffect(() => {
    // Check local storage for existing login state
    const storedLoginStatus = localStorage.getItem("isLoggedIn");

    if (storedLoginStatus === "true") {
      // Set state from local storage if user is logged in
      setIsLoggedIn(true);
    }
  }, []);

  const signIn = (user) => {
    // Set state and save to local storage on successful sign in
    setIsLoggedIn(true);
    setIsRole(user.role);
    setUserData(user);
  };

  const signOut = () => {
    // Clear state and local storage on sign out
    setIsLoggedIn(false);
    setIsRole("");
    setUserData("");
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, signIn, signOut, isRole, userData }}
    >
      {children}
    </AuthContext.Provider>
  );
};
