import React, { useState } from "react";
import { Card, Button, Modal, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../../components/Navbar/Navbar";

function ServiceContent() {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    description: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add logic to handle form submission, e.g., send data to backend
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
              essential: <br /> Carat Weight <br />
              Cut Grade <br /> Color Grade <br /> Clarity Grade <br />{" "}
              Fluorescence <br /> Shape <br />
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
              essential: <br /> Carat Weight <br />
              Cut Grade <br /> Color Grade <br /> Clarity Grade <br />{" "}
              Fluorescence <br /> Shape <br />
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
            <Form.Group controlId="formCaratWeight">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="fistName"
                value={formData.caratWeight}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formCutGrade">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={formData.cutGrade}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formFluorescence">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                name="fluorescence"
                value={formData.fluorescence}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formColorGrade">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="number"
                name="phoneNumber"
                value={formData.colorGrade}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formClarityGrade">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={formData.clarityGrade}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formClarityGrade">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={formData.clarityGrade}
                onChange={handleChange}
                required
              />
            </Form.Group>
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
