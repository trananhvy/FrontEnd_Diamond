import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRole, setIsRole] = useState("");
  const [userData, setUserData] = useState(null);

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
