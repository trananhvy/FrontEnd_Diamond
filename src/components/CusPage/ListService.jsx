// ListService.jsx

import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../components/AuthContext/AuthContext";
import Navbar from "../../components/Navbar/Navbar";
import { Table } from "react-bootstrap";

function ListService() {
  const [formData, setFormData] = useState([]);
  const { userData } = useContext(AuthContext);
  const id = userData.id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://667c50033c30891b865c30f1.mockapi.io/serviceManagement"
        );
        const filteredData = response.data.filter((item) => item.userID === id);
        setFormData(filteredData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

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

export default ListService;
