import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContext } from "../../components/AuthContext/AuthContext";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";

const StyledButton = styled(Button)`
  width: 100%;
  border-radius: 10px;
`;

const Login = () => {
  const [show, setShow] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentState, setCurrentState] = useState("Sign In");
  const { isLoggedIn, signOut, isRole } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setShowDropdown(false);
  }, [location]);

  const handleSignOut = () => {
    signOut();
    navigate("/home");
  };

  const handleItemClick = (link) => {
    navigate(link);
  };

  return (
    <>
      <div>
        {isLoggedIn ? (
          <StyledButton variant="primary" onClick={handleSignOut}>
            Sign Out
          </StyledButton>
        ) : (
          <StyledButton variant="primary" onClick={handleShow}>
            Sign In / Sign Up
          </StyledButton>
        )}

        <Modal show={show} onHide={handleClose} style={{ marginTop: "150px" }}>
          <Modal.Header closeButton>
            <Button
              variant={currentState === "Sign In" ? "primary" : ""}
              onClick={() => setCurrentState("Sign In")}
            >
              Sign In
            </Button>
            <Button
              variant={currentState === "Sign Up" ? "primary" : ""}
              onClick={() => setCurrentState("Sign Up")}
            >
              Sign Up
            </Button>
          </Modal.Header>
          <Modal.Body>
            {currentState === "Sign In" ? (
              <SignIn setShow={setShow} />
            ) : (
              <SignUp setShow={setShow} />
            )}
          </Modal.Body>
        </Modal>
      </div>

      {isLoggedIn && (
        <Dropdown
          show={showDropdown}
          onToggle={() => setShowDropdown(!showDropdown)}
        >
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Options
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {isRole === "customer" && (
              <>
                <Dropdown.Item onClick={() => handleItemClick("/userprofile")}>
                  Profile
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleItemClick("/listservice")}>
                  Your service
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleItemClick("#/action-2")}>
                  Commitment Form
                </Dropdown.Item>
              </>
            )}
            {isRole === "manager" && (
              <>
                <Dropdown.Item onClick={() => handleItemClick("/userprofile")}>
                  Profile
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleItemClick("/liststaff")}>
                  List of staff
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleItemClick("/listserviceM")}>
                  List of service
                </Dropdown.Item>
                <Dropdown.Item
                  as="button"
                  onClick={() => handleItemClick("/listRequest")}
                >
                  List of request
                </Dropdown.Item>
              </>
            )}
            {isRole === "consultingstaff" && (
              <>
                <Dropdown.Item
                  as="button"
                  onClick={() => handleItemClick("/staffprofile")}
                >
                  Profile
                </Dropdown.Item>
                <Dropdown.Item
                  as="button"
                  onClick={() => handleItemClick("/liststaffcs")}
                >
                  List of service
                </Dropdown.Item>
              </>
            )}
            {isRole === "valuatingstaff" && (
              <>
                <Dropdown.Item
                  as="button"
                  onClick={() => handleItemClick("/liststaffvs")}
                >
                  Profile
                </Dropdown.Item>
                <Dropdown.Item
                  as="button"
                  onClick={() => handleItemClick("#/action-5")}
                >
                  List of request
                </Dropdown.Item>
              </>
            )}
          </Dropdown.Menu>
        </Dropdown>
      )}
    </>
  );
};

export default Login;
