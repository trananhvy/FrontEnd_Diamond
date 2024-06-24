import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState("");
  const [name, setName] = useState("");
  const [id, setID] = useState("");
  useEffect(() => {
    // Check localStorage for existing login data on component mount
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    const role = localStorage.getItem("userRole") || "";
    const name = localStorage.getItem("name") || "";
    const id = localStorage.getItem("id") || "";
    if (loggedIn) {
      setIsLoggedIn(true);
      setUserRole(role);
      setName(name);
      setID(id);
    }
  }, []);

  const signIn = (role, name, id) => {
    setIsLoggedIn(true);
    setUserRole(role);
    setName(name);
    setID(id);
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userRole", role);
    localStorage.setItem("name", name);
    localStorage.setItem("id", id);
  };

  const signOut = () => {
    setIsLoggedIn(false);
    setUserRole("");
    setName("");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userRole");
    localStorage.removeItem("name");
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, userRole, signIn, signOut, name }}
    >
      {children}
    </AuthContext.Provider>
  );
};
