import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../AuthContext/AuthContext";
import Navbar from "../Navbar/Navbar";
import { Table } from "react-bootstrap";

function ListServiceCS() {
  const [formData, setFormData] = useState([]);

  useEffect(() => {
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

    fetchData();
  }, []);

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

export default ListServiceCS;
