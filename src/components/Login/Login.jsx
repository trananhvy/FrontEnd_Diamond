import React, { useState, useContext } from "react";
import { IoIosClose } from "react-icons/io";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContext } from "../../components/AuthContext/AuthContext"; // Import the context

const ACCOUNT_LIST = [
  {
    id: 1,
    name: "Nguyen Tuan Du",
    username: "customer1@gmail.com",
    password: "12345",
    role: "customer",
  },
  {
    id: 2,
    name: "Du Tuan Nguyen",
    username: "customer2@gmail.com",
    password: "12345",
    role: "customer",
  },
  {
    id: 3,
    name: "Little boy",
    username: "manager@gmail.com",
    password: "12345",
    role: "Manager",
  },
  {
    id: 4,
    name: "Little girl",
    username: "consultingstaff@gmail.com",
    password: "12345",
    role: "Consulting Staff",
  },
  {
    id: 5,
    name: "Truong Gay",
    username: "valuatingstaff@gmail.com",
    password: "12345",
    role: "Valuating Staff",
  },
];

const StyledButton = styled(Button)`
  width: 100%;
  border-radius: 10px;
  margin-top: ${(props) => (props.google ? "15px" : "0")};
`;

const CloseIcon = styled(IoIosClose)`
  width: 50px;
  cursor: pointer;
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

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Terms = styled.div`
  display: flex;
  align-items: center;
  margin-top: -14px;

  & > p {
    margin-left: 8px;
  }
`;

const SwitchMode = styled.p`
  color: blue;
  cursor: pointer;
`;

function Login() {
  const [show, setShow] = useState(false);
  const [currentState, setCurrentState] = useState("Sign In");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { isLoggedIn, userRole, signIn, signOut } = useContext(AuthContext); // Use context

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const user = ACCOUNT_LIST.find(
      (account) =>
        account.username === username && account.password === password
    );

    if (user) {
      signIn(user.role, user.name); // Update the global authentication state with role
      setShow(false);
    } else {
      alert("Invalid credentials");
    }
  };

  const handleSignOut = () => {
    signOut(); // Update the global authentication state
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
            <ModalContent>
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
            </ModalContent>
          </Modal.Footer>
        </Modal>
      </div>

      {isLoggedIn && (
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {userRole} Options
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {userRole === "customer" && (
              <>
                <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Your service</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Commitment Form</Dropdown.Item>
              </>
            )}
            {userRole === "Manager" && (
              <>
                <Dropdown.Item href="#/action-3">Profile</Dropdown.Item>
                <Dropdown.Item href="#/action-4">List of staff</Dropdown.Item>
                <Dropdown.Item href="#/action-4">List of service</Dropdown.Item>
                <Dropdown.Item href="#/action-4">List of request</Dropdown.Item>
              </>
            )}
            {userRole === "Consulting Staff" && (
              <>
                <Dropdown.Item href="#/action-6">Profile</Dropdown.Item>
                <Dropdown.Item href="#/action-5">List of request</Dropdown.Item>
              </>
            )}
            {userRole === "Valuating Staff" && (
              <>
                <Dropdown.Item href="#/action-6">Profile</Dropdown.Item>
                <Dropdown.Item href="#/action-5">List of request</Dropdown.Item>
              </>
            )}
          </Dropdown.Menu>
        </Dropdown>
      )}
    </>
  );
}

export default Login;
