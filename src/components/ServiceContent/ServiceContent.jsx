import React, { useState } from "react";
import { Card, Button, Modal, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function ServiceContent() {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    caratWeight: "",
    cutGrade: "",
    colorGrade: "",
    clarityGrade: "",
    fluorescence: "",
    shape: "",
    certification: "",
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
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-4 mb-3">
            <Card className="shadow">
              <Card.Img
                variant="top"
                src="src/assets/Natural-Rough-and-Polished-16x9-1.webp"
              />
              <Card.Body>
                <Card.Title>Valuate Lab Diamond</Card.Title>
                <Card.Text>
                  To evaluate a specific lab diamond, provide the following
                  details:
                </Card.Text>
                <Button variant="primary" onClick={handleShow}>
                  Book Service Now
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4 mb-3">
            <Card className="shadow">
              <Card.Img
                variant="top"
                src="src/assets/Natural-Rough-and-Polished-16x9-1.webp"
              />
              <Card.Body>
                <Card.Title>Valuate Natural Diamond</Card.Title>
                <Card.Text>
                  To evaluate a specific natural diamond, provide the following
                  details:
                </Card.Text>
                <Button variant="primary" onClick={handleShow}>
                  Book Service Now
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Diamond Appraisal Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formCaratWeight">
              <Form.Label>Carat Weight</Form.Label>
              <Form.Control
                type="text"
                name="caratWeight"
                value={formData.caratWeight}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formCutGrade">
              <Form.Label>Cut Grade</Form.Label>
              <Form.Control
                type="text"
                name="cutGrade"
                value={formData.cutGrade}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formColorGrade">
              <Form.Label>Color Grade</Form.Label>
              <Form.Control
                type="text"
                name="colorGrade"
                value={formData.colorGrade}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formClarityGrade">
              <Form.Label>Clarity Grade</Form.Label>
              <Form.Control
                type="text"
                name="clarityGrade"
                value={formData.clarityGrade}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formFluorescence">
              <Form.Label>Fluorescence</Form.Label>
              <Form.Control
                type="text"
                name="fluorescence"
                value={formData.fluorescence}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formShape">
              <Form.Label>Shape</Form.Label>
              <Form.Control
                type="text"
                name="shape"
                value={formData.shape}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formCertification">
              <Form.Label>Certification</Form.Label>
              <Form.Control
                type="text"
                name="certification"
                value={formData.certification}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ServiceContent;
