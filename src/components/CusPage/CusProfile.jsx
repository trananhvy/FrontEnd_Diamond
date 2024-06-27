import React, { useState, useContext } from "react";
import { AuthContext } from "../../components/AuthContext/AuthContext";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";

function CusProfile() {
  const { userData, updateUser } = useContext(AuthContext);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  if (!userData) {
    return (
      <>
        <Navbar />
        <div style={{ marginTop: "100px" }}>Loading</div>
      </>
    );
  }

  const handleChangePassword = async () => {
    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.put(
        `https://667c50033c30891b865c30f1.mockapi.io/accountManagement/${userData.id}`,
        { password: newPassword }
      );

      if (response.status === 200) {
        const updatedUser = { ...userData, password: newPassword };
        updateUser(updatedUser); // Update user data in AuthContext
        setMessage("Password changed successfully");
      } else {
        setMessage("Failed to change password");
      }
    } catch (error) {
      setMessage("Error occurred while changing password");
    }

    setLoading(false);
  };

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
        <p>
          <strong>PASSWORD: </strong> {userData.password}
        </p>
        <p>
          <strong>ROLE: </strong> {userData.role}
        </p>
      </div>

      <div style={{ marginTop: "50px" }}>
        <h2>Change Password</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleChangePassword();
          }}
        >
          <div>
            <label htmlFor="newPassword">New Password:</label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Changing..." : "Change Password"}
          </button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </>
  );
}

export default CusProfile;
