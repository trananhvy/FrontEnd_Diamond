import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { IoIosClose } from "react-icons/io";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContext } from "../../components/AuthContext/AuthContext";

const StyledButton = styled(Button)`
  width: 100%;
  border-radius: 10px;
  margin-top: ${(props) => (props.google ? "15px" : "0")};
`;

const Input = styled.input`
  outline: none;
  border: 1px solid #c9c9c9;
  padding: 10px;
  border-radius: 4px;
  margin-right: 1px;
  width: 100%;
  margin-top: 15px;
`;

const LoginPopup = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const SwitchMode = styled.p`
  color: blue;
  cursor: pointer;
`;

const Login = () => {
  const [show, setShow] = useState(false);
  const [currentState, setCurrentState] = useState("Sign In");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const { isLoggedIn, signIn, signOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://667c50033c30891b865c30f1.mockapi.io/accountManagement?email=${username}&password=${password}`
      );
      const users = response.data;
      const user = users[0]; // Assuming there's only one user with matching credentials

      if (user) {
        signIn(); // Update signIn with correct parameters
        setRole(user.role); // Set role based on user data
        setShow(false);
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Login failed. Please try again.");
    }
  };

  const handleSignOut = () => {
    signOut();
    navigate("/home");
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
            Sign In
          </StyledButton>
        )}

        <Modal show={show} onHide={handleClose} style={{ marginTop: "150px" }}>
          <Modal.Header closeButton>
            <h1>{currentState}</h1>
          </Modal.Header>
          <Modal.Body>
            <LoginPopup>
              <form onSubmit={handleFormSubmit}>
                <div>
                  {currentState === "Sign In" ? null : (
                    <Input
                      type="text"
                      placeholder="Your name"
                      required
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  )}
                  <Input
                    type="email"
                    placeholder="Your email"
                    required
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <Input
                    type="password"
                    placeholder="Your password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <StyledButton type="submit" variant="primary">
                  {currentState === "Sign Up" ? "Sign Up" : "Sign In"}
                </StyledButton>
                {currentState === "Sign Up" ? null : (
                  <StyledButton variant="primary" google>
                    Sign In with Google Account
                  </StyledButton>
                )}
              </form>
            </LoginPopup>
          </Modal.Body>
          <Modal.Footer>
            <div>
              {currentState === "Sign In" ? (
                <p>
                  Create a new account?{" "}
                  <SwitchMode onClick={() => setCurrentState("Sign Up")}>
                    Click here
                  </SwitchMode>
                </p>
              ) : (
                <p>
                  Already have an account?{" "}
                  <SwitchMode onClick={() => setCurrentState("Sign In")}>
                    Login here
                  </SwitchMode>
                </p>
              )}
            </div>
          </Modal.Footer>
        </Modal>
      </div>

      {isLoggedIn && (
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Options
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {role === "customer" && (
              <>
                <Dropdown.Item as={Link} to="/userprofile">
                  Profile
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/listservice">
                  Your service
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="#/action-2">
                  Commitment Form
                </Dropdown.Item>
              </>
            )}
            {role === "manager" && (
              <>
                <Dropdown.Item as={Link} to="/userprofile">
                  Profile
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/liststaff">
                  List of staff
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/listserviceM">
                  List of service
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="#/action-4">
                  List of request
                </Dropdown.Item>
              </>
            )}
            {role === "Consulting Staff" && (
              <>
                <Dropdown.Item as={Link} to="#/action-6">
                  Profile
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="#/action-5">
                  List of request
                </Dropdown.Item>
              </>
            )}
            {role === "Valuating Staff" && (
              <>
                <Dropdown.Item as={Link} to="#/action-6">
                  Profile
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="#/action-5">
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
