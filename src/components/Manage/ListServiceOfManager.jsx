import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Modal, Button, Form } from "react-bootstrap";

function ListServiceOfManager() {
  const [formData, setFormData] = useState([]);
  const [editingService, setEditingService] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://667c50033c30891b865c30f1.mockapi.io/serviceManagement"
      );
      setFormData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const openEditModal = (service) => {
    setEditingService(service);
    setShowEditModal(true);
  };

  const closeEditModal = () => {
    setShowEditModal(false);
  };

  const handleEditService = async () => {
    try {
      await axios.put(
        `https://667c50033c30891b865c30f1.mockapi.io/serviceManagement/${editingService.id}`,
        editingService
      );
      closeEditModal();
      fetchData();
    } catch (error) {
      console.error("Error editing service:", error);
    }
  };

  const handleDeleteService = async (id) => {
    try {
      await axios.delete(
        `https://667c50033c30891b865c30f1.mockapi.io/serviceManagement/${id}`
      );
      fetchData();
    } catch (error) {
      console.error("Error deleting service:", error);
    }
  };

  if (!formData || formData.length === 0) {
    return (
      <>
        <div style={{ marginTop: "100px", textAlign: "center" }}>
          No data available
        </div>
      </>
    );
  }

  return (
    <>
      <div className="container" style={{ marginTop: "50px" }}>
        <h1>List of Service</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Date</th>
              <th>Description</th>
              <th>Status</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {formData.map((data, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
                <td>{data.date}</td>
                <td>{data.description}</td>
                <td>{data.status}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => openEditModal(data)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteService(data.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {/* Edit Modal */}
      <Modal show={showEditModal} onHide={closeEditModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Service</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                value={editingService?.firstName}
                onChange={(e) =>
                  setEditingService({
                    ...editingService,
                    firstName: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                value={editingService?.lastName}
                onChange={(e) =>
                  setEditingService({
                    ...editingService,
                    lastName: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={editingService?.email}
                onChange={(e) =>
                  setEditingService({
                    ...editingService,
                    email: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group controlId="formPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                value={editingService?.phone}
                onChange={(e) =>
                  setEditingService({
                    ...editingService,
                    phone: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group controlId="formDate">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="text"
                value={editingService?.date}
                onChange={(e) =>
                  setEditingService({
                    ...editingService,
                    date: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={editingService?.description}
                onChange={(e) =>
                  setEditingService({
                    ...editingService,
                    description: e.target.value,
                  })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeEditModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEditService}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ListServiceOfManager;
