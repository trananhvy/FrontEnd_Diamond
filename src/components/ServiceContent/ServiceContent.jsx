// ServiceContent.jsx

import React, { useState, useContext } from "react";
import { Card, Button, Modal, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";
import { AuthContext } from "../../components/AuthContext/AuthContext";

function ServiceContent() {
  const [show, setShow] = useState(false);
  const { userData } = useContext(AuthContext);
  const { isLoggedIn, signOut, isRole } = useContext(AuthContext);
  const [localFormData, setLocalFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    description: "",
    userID: isLoggedIn ? userData.id : "0", // Thêm userId vào localFormData
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log("Local Form Data:", localFormData); // Debugging log
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form:", localFormData); // Debugging log
    try {
      const response = await axios.post(
        "https://667c50033c30891b865c30f1.mockapi.io/serviceManagement",
        localFormData
      );
      if (response.status === 201) {
        console.log("Data successfully saved:", response.data);
      } else {
        console.log("Failed to save data");
      }
    } catch (error) {
      console.error("Error occurred while saving data:", error);
    }
    handleClose();
  };

  return (
    <>
      <Navbar />
      <div
        className="d-flex justify-content-around"
        style={{ marginTop: "200px" }}
      >
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="src/assets/Natural-Rough-and-Polished-16x9-1.webp"
          />
          <Card.Body>
            <Card.Title>Valuate Lab Diamond</Card.Title>
            <Card.Text>
              To evaluate a specific lab diamond, the following details are
              essential: <br />
              Carat Weight <br />
              Cut Grade <br />
              Color Grade <br />
              Clarity Grade <br />
              Fluorescence <br />
              Shape <br />
              Certification
            </Card.Text>
            <Button variant="primary" onClick={handleShow}>
              Book Service Now
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="src/assets/Natural-Rough-and-Polished-16x9-1.webp"
          />
          <Card.Body>
            <Card.Title>Valuate Natural Diamond</Card.Title>
            <Card.Text>
              To evaluate a specific natural diamond, the following details are
              essential: <br />
              Carat Weight <br />
              Cut Grade <br />
              Color Grade <br />
              Clarity Grade <br />
              Fluorescence <br />
              Shape <br />
              Certification
            </Card.Text>
            <Button variant="primary" onClick={handleShow}>
              Book Service Now
            </Button>
          </Card.Body>
        </Card>
      </div>

      <Modal show={show} onHide={handleClose} style={{ marginTop: "100px" }}>
        <Modal.Header closeButton>
          <Modal.Title>Diamond Appraisal Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={localFormData.firstName}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={localFormData.lastName}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={localFormData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                value={localFormData.phone}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formDate">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={localFormData.date}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={localFormData.description}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Control
              type="hidden"
              name="userId"
              value={localFormData.userId}
              readOnly
            />

            <div className="d-flex justify-content-center">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ServiceContent;
