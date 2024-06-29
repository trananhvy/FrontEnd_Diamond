import React, { useState, useContext } from "react";
import { AuthContext } from "../../components/AuthContext/AuthContext";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function CusProfile() {
  const { userData, updateUser } = useContext(AuthContext);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [newFirstName, setNewFirstName] = useState(userData.firstName);
  const [newLastName, setNewLastName] = useState(userData.lastName);
  const [newDateOfBirth, setNewDateOfBirth] = useState(userData.dateofbirth);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);

  const handleChangeProfile = async () => {
    if (newPassword && newPassword !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.put(
        `https://667c50033c30891b865c30f1.mockapi.io/accountManagement/${userData.id}`,
        {
          firstName: newFirstName,
          lastName: newLastName,
          dateofbirth: newDateOfBirth,
          ...(newPassword && { password: newPassword }),
        }
      );

      if (response.status === 200) {
        const updatedUser = {
          ...userData,
          firstName: newFirstName,
          lastName: newLastName,
          dateofbirth: newDateOfBirth,
          ...(newPassword && { password: newPassword }),
        };
        updateUser(updatedUser); // Update user data in AuthContext
        setMessage("Profile updated successfully");
      } else {
        setMessage("Failed to update profile");
      }
    } catch (error) {
      setMessage("Error occurred while updating profile");
    }

    setLoading(false);
    setShowProfileModal(false);
  };

  const formatDateOfBirth = (date) => {
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year}`;
  };

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
          <strong>DATE OF BIRTH: </strong>{" "}
          {formatDateOfBirth(userData.dateofbirth)}
        </p>
        <p>
          <strong>EMAIL: </strong> {userData.email}
        </p>
        <p>
          <strong>PASSWORD: </strong> ********
        </p>
        <p>
          <strong>ROLE: </strong> {userData.role}
        </p>
        <Button variant="primary" onClick={() => setShowProfileModal(true)}>
          Edit Profile
        </Button>
      </div>

      <Modal show={showProfileModal} onHide={() => setShowProfileModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              handleChangeProfile();
            }}
          >
            <Form.Group controlId="newFirstName">
              <Form.Label>First Name:</Form.Label>
              <Form.Control
                type="text"
                value={newFirstName}
                onChange={(e) => setNewFirstName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="newLastName">
              <Form.Label>Last Name:</Form.Label>
              <Form.Control
                type="text"
                value={newLastName}
                onChange={(e) => setNewLastName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="newDateOfBirth">
              <Form.Label>Date of Birth (yyyy-mm-dd):</Form.Label>
              <Form.Control
                type="date"
                value={newDateOfBirth}
                onChange={(e) => setNewDateOfBirth(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="newPassword">
              <Form.Label>New Password:</Form.Label>
              <Form.Control
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="confirmPassword">
              <Form.Label>Confirm Password:</Form.Label>
              <Form.Control
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={loading}>
              {loading ? "Updating..." : "Update Profile"}
            </Button>
          </Form>
          {message && <p>{message}</p>}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CusProfile;
