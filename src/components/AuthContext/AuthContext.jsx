import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRole, setIsRole] = useState("");
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Check local storage for existing login state
    const storedLoginStatus = localStorage.getItem("isLoggedIn");
    const storedUserData = localStorage.getItem("userData");

    if (storedLoginStatus === "true" && storedUserData) {
      // Set state from local storage if user is logged in
      setIsLoggedIn(true);
      setUserData(JSON.parse(storedUserData));
      setIsRole(JSON.parse(storedUserData).role);
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
    setUserData(null);
  };

  const updateUser = (updatedData) => {
    setUserData(updatedData);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, signIn, signOut, isRole, userData, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
