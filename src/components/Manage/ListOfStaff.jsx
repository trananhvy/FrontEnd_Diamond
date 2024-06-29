import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarOfManager from "./NavbarOfManager";

const ListOfStaff = () => {
  const [staffList, setStaffList] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingStaff, setEditingStaff] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://667c50033c30891b865c30f1.mockapi.io/accountManagement"
      );
      // Filter out staff with roles 'manager' or 'customer'
      const filteredStaff = response.data.filter(
        (staff) => staff.role !== "manager" && staff.role !== "customer"
      );
      setStaffList(filteredStaff);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const openEditModal = (staff) => {
    setEditingStaff(staff);
    setShowEditModal(true);
  };

  const closeEditModal = () => {
    setShowEditModal(false);
    setEditingStaff(null);
    setMessage("");
  };

  const handleEditStaff = async () => {
    try {
      const response = await axios.put(
        `https://667c50033c30891b865c30f1.mockapi.io/accountManagement/${editingStaff.id}`,
        editingStaff
      );
      if (response.status === 200) {
        setMessage("Staff role updated successfully");
        fetchData(); // Refresh data after edit
      } else {
        setMessage("Failed to update staff role");
      }
    } catch (error) {
      console.error("Error editing staff:", error);
      setMessage("Error occurred while updating staff role");
    }
    closeEditModal();
  };

  return (
    <div style={{ display: "flex" }}>
      <NavbarOfManager />
      <div style={{ marginLeft: "50px" }}>
        <h1 style={{ marginTop: "100px" }}>List of Staff</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Date of Birth</th>
              <th>Email</th>
              <th>Role</th>
              <th>Edit Role</th>
            </tr>
          </thead>
          <tbody>
            {staffList.map((staff) => (
              <tr key={staff.id}>
                <td>{staff.id}</td>
                <td>{staff.firstName}</td>
                <td>{staff.lastName}</td>
                <td>{staff.dateofbirth}</td>
                <td>{staff.email}</td>
                <td>{staff.role}</td>
                <td>
                  <Button
                    variant="primary"
                    onClick={() => openEditModal(staff)}
                  >
                    Edit Role
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {/* Edit Modal */}
      <Modal show={showEditModal} onHide={closeEditModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Staff Role</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formRole">
              <Form.Label>Role</Form.Label>
              <Form.Control
                as="select"
                value={editingStaff?.role}
                onChange={(e) =>
                  setEditingStaff({ ...editingStaff, role: e.target.value })
                }
              >
                <option value="consulting">consultingstaff</option>
                <option value="valuating">valuatingstaff</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeEditModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEditStaff}>
            Save Changes
          </Button>
        </Modal.Footer>
        {message && <p>{message}</p>}
      </Modal>
    </div>
  );
};

export default ListOfStaff;
