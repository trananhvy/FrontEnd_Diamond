// ListService.jsx

import React, { useContext } from "react";
import { FormDataContext } from "../../components/AuthContext/FormDataContext"; // Adjust the path as per your actual structure
import Navbar from "../../components/Navbar/Navbar";
import { Table } from "react-bootstrap"; // Import Table from react-bootstrap
function ListServiceOfManager() {
  const { formData } = useContext(FormDataContext);

  console.log(formData);
  if (!formData || formData.length === 0) {
    return (
      <>
        <Navbar />
        <div style={{ marginTop: "100px", textAlign: "center" }}>
          No data available
        </div>
      </>
    );
  }
  return (
    <>
      <Navbar />
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
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default ListServiceOfManager;
