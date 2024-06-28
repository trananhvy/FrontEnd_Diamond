import React, { useState, useContext } from "react";
import { AuthContext } from "../../components/AuthContext/AuthContext";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function VStaffProfile() {
  const { userData, updateUser } = useContext(AuthContext);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [newFirstName, setNewFirstName] = useState(userData.firstName);
  const [newLastName, setNewLastName] = useState(userData.lastName);
  const [newDateOfBirth, setNewDateOfBirth] = useState(userData.dateofbirth);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showFirstNameModal, setShowFirstNameModal] = useState(false);
  const [showLastNameModal, setShowLastNameModal] = useState(false);
  const [showDateOfBirthModal, setShowDateOfBirthModal] = useState(false);

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
    setShowPasswordModal(false);
  };

  const handleChangeFirstName = async () => {
    setLoading(true);

    try {
      const response = await axios.put(
        `https://667c50033c30891b865c30f1.mockapi.io/accountManagement/${userData.id}`,
        { firstName: newFirstName }
      );

      if (response.status === 200) {
        const updatedUser = { ...userData, firstName: newFirstName };
        updateUser(updatedUser);
        setMessage("First name changed successfully");
      } else {
        setMessage("Failed to change first name");
      }
    } catch (error) {
      setMessage("Error occurred while changing first name");
    }

    setLoading(false);
    setShowFirstNameModal(false);
  };

  const handleChangeLastName = async () => {
    setLoading(true);

    try {
      const response = await axios.put(
        `https://667c50033c30891b865c30f1.mockapi.io/accountManagement/${userData.id}`,
        { lastName: newLastName }
      );

      if (response.status === 200) {
        const updatedUser = { ...userData, lastName: newLastName };
        updateUser(updatedUser);
        setMessage("Last name changed successfully");
      } else {
        setMessage("Failed to change last name");
      }
    } catch (error) {
      setMessage("Error occurred while changing last name");
    }

    setLoading(false);
    setShowLastNameModal(false);
  };

  const handleChangeDateOfBirth = async () => {
    setLoading(true);

    try {
      const response = await axios.put(
        `https://667c50033c30891b865c30f1.mockapi.io/accountManagement/${userData.id}`,
        { dateofbirth: newDateOfBirth }
      );

      if (response.status === 200) {
        const updatedUser = { ...userData, dateofbirth: newDateOfBirth };
        updateUser(updatedUser);
        setMessage("Date of birth changed successfully");
      } else {
        setMessage("Failed to change date of birth");
      }
    } catch (error) {
      setMessage("Error occurred while changing date of birth");
    }

    setLoading(false);
    setShowDateOfBirthModal(false);
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
          <Button variant="link" onClick={() => setShowFirstNameModal(true)}>
            Edit
          </Button>
        </p>
        <p>
          <strong>LAST NAME: </strong> {userData.lastName}
          <Button variant="link" onClick={() => setShowLastNameModal(true)}>
            Edit
          </Button>
        </p>
        <p>
          <strong>DATE OF BIRTH: </strong>{" "}
          {formatDateOfBirth(userData.dateofbirth)}
          <Button variant="link" onClick={() => setShowDateOfBirthModal(true)}>
            Edit
          </Button>
        </p>
        <p>
          <strong>EMAIL: </strong> {userData.email}
        </p>
        <p>
          <strong>PASSWORD: </strong> ********
          <Button variant="link" onClick={() => setShowPasswordModal(true)}>
            Change Password
          </Button>
        </p>
        <p>
          <strong>ROLE: </strong> {userData.role}
        </p>
      </div>

      <Modal
        show={showPasswordModal}
        onHide={() => setShowPasswordModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Change Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              handleChangePassword();
            }}
          >
            <Form.Group controlId="newPassword">
              <Form.Label>New Password:</Form.Label>
              <Form.Control
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="confirmPassword">
              <Form.Label>Confirm Password:</Form.Label>
              <Form.Control
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={loading}>
              {loading ? "Changing..." : "Change Password"}
            </Button>
          </Form>
          {message && <p>{message}</p>}
        </Modal.Body>
      </Modal>

      <Modal
        show={showFirstNameModal}
        onHide={() => setShowFirstNameModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Change First Name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              handleChangeFirstName();
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
            <Button variant="primary" type="submit" disabled={loading}>
              {loading ? "Changing..." : "Change First Name"}
            </Button>
          </Form>
          {message && <p>{message}</p>}
        </Modal.Body>
      </Modal>

      <Modal
        show={showLastNameModal}
        onHide={() => setShowLastNameModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Change Last Name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              handleChangeLastName();
            }}
          >
            <Form.Group controlId="newLastName">
              <Form.Label>Last Name:</Form.Label>
              <Form.Control
                type="text"
                value={newLastName}
                onChange={(e) => setNewLastName(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={loading}>
              {loading ? "Changing..." : "Change Last Name"}
            </Button>
          </Form>
          {message && <p>{message}</p>}
        </Modal.Body>
      </Modal>

      <Modal
        show={showDateOfBirthModal}
        onHide={() => setShowDateOfBirthModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Change Date of Birth</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              handleChangeDateOfBirth();
            }}
          >
            <Form.Group controlId="newDateOfBirth">
              <Form.Label>Date of Birth (dd/mm/yyyy):</Form.Label>
              <Form.Control
                type="date"
                value={newDateOfBirth}
                onChange={(e) => setNewDateOfBirth(e.target.value)}
                placeholder="dd/mm/yyyy"
                pattern="\d
{1,2}/\d{1,2}/\d{4}"
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={loading}>
              {loading ? "Changing..." : "Change Date of Birth"}
            </Button>
          </Form>
          {message && <p>{message}</p>}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default VStaffProfile;
