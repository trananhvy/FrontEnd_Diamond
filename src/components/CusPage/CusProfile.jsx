import React, { useContext } from "react";
import { AuthContext } from "../../components/AuthContext/AuthContext";
import Navbar from "../../components/Navbar/Navbar";

function CusProfile() {
  const { userData } = useContext(AuthContext);

  if (!userData) {
    return (
      <>
        <Navbar />
        <div style={{ marginTop: "100px" }}>Loading</div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div style={{ marginTop: "50px" }}>
        <h1>User Profile</h1>
        <p>
          <strong>ID:</strong> {userData.id}
        </p>
        <p>
          <strong>Name:</strong> {userData.name}
        </p>
        <p>
          <strong>Username:</strong> {userData.username}
        </p>
        <p>
          <strong>Password:</strong> {userData.password}
        </p>
        <p>
          <strong>Role:</strong> {userData.role}
        </p>
      </div>
    </>
  );
}

export default CusProfile;
