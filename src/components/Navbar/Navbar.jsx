import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../components/AuthContext/AuthContext";
import Button from "react-bootstrap/Button";
import Login from "../../components/Login/Login";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
function Navbar({ menu, setMenu }) {
  const { isLoggedIn, signIn, signOut } = useContext(AuthContext);
  const [showLogin, setShowLogin] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLoginClick = () => {
    setShowLogin(true); // Show the Login popup
  };

  const handleLogoutClick = () => {
    setShowLogin(false); // Close the Login popup if open
    signOut();
  };

  const handleSuccessfulLogin = () => {
    setShowLogin(false); // Close the Login popup on successful login
    // Optionally, you can perform additional actions here after login
    signIn(); // Call signIn from AuthContext or perform other actions
  };

  const bodyStyle = {
    margin: 0,
    padding: 0,
  };

  const navbarStyle = {
    width: "100%",
    padding: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#EEEEEE",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 9999,
  };

  const navbarMenuStyle = {
    display: "flex",
    listStyle: "none",
    gap: "20px",
    color: "#49557e",
    fontSize: "20px",
    marginRight: "185px",
    marginTop: "10px",
  };

  const activeStyle = {
    paddingTop: "2px",
    borderBottom: "2px solid #49557e",
  };

  const liStyle = {
    marginLeft: "30px",
    cursor: "pointer",
    fontSize: "100%",
    fontWeight: 600,
    gap: "20px",
    marginRight: "10px",
    margin: "0px 20px 10px 20px",
  };

  return (
    <>
      <div style={bodyStyle}>
        <div style={navbarStyle}>
          <div className="name">
            <h1
              onClick={() => setMenu("home")}
              style={menu === "home" ? {} : null}
            >
              <Link to="/home">StoneAlgola</Link>
            </h1>
          </div>
          <ul style={navbarMenuStyle}>
            <li
              onClick={() => setMenu("search")}
              style={{ ...liStyle, ...(menu === "search" ? activeStyle : {}) }}
            >
              <Link to="/search">SEARCH</Link>
            </li>
            <li
              onClick={() => setMenu("diamondcheck")}
              style={{
                ...liStyle,
                ...(menu === "diamondcheck" ? activeStyle : {}),
              }}
            >
              <Link to="/diamondcheck">DIAMOND CHECK</Link>
            </li>
            <li
              onClick={() => setMenu("calculate")}
              style={{
                ...liStyle,
                ...(menu === "calculate" ? activeStyle : {}),
              }}
            >
              <Link to="/calculate">CALCULATE</Link>
            </li>
            <li
              onClick={() => setMenu("prices")}
              style={{ ...liStyle, ...(menu === "prices" ? activeStyle : {}) }}
            >
              <Link to="/prices">PRICE</Link>
            </li>
            <li
              onClick={() => setMenu("blogs")}
              style={{ ...liStyle, ...(menu === "blogs" ? activeStyle : {}) }}
            >
              <Link to="/blogs">BLOGS</Link>
            </li>
          </ul>
          <Login />
        </div>
      </div>
    </>
  );
}

export default Navbar;
