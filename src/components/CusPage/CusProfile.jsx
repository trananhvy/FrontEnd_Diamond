import React, { useContext } from "react";
import { AuthContext } from "../../components/AuthContext/AuthContext";
import Navbar from "../../components/Navbar/Navbar";

function CusProfile() {
  const { userData, id } = useContext(AuthContext);

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
          <strong>ID: </strong> {userData.id}
        </p>
        <p>
          <strong>FIRST NAME: </strong> {userData.firstName}
        </p>
        <p>
          <strong>LAST NAME: </strong> {userData.lastName}
        </p>
        <p>
          <strong>DATE OF BIRTH: </strong> {userData.dateofbirth}
        </p>
        <p>
          <strong>EMAIL: </strong> {userData.email}
        </p>
        a
        <p>
          <strong>PASSWORD: </strong> {userData.password}
        </p>
        <p>
          <strong>ROLE: </strong> {userData.role}
        </p>
      </div>
    </>
  );
}

export default CusProfile;
