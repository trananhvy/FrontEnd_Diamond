import { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../../components/Navbar/Navbar";
const ListOfStaff = () => {
  const [staffList, setStaffList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://667c50033c30891b865c30f1.mockapi.io/accountManagement"
      );
      setStaffList(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <Navbar />
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
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ListOfStaff;
