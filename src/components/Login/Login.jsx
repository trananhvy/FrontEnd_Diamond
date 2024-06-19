import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  const [show, setShow] = useState(false);
  const [currentState, setCurrentState] = useState("Sign In");

  const handleLogoutClick = () => {
    setShowLogin(false); // Close the Login popup
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here (e.g., API call or validation)
    // After successful login, call handleSuccessfulLogin()
    handleSuccessfulLogin();
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const close = {
    width: "50px",
    cursor: "pointer",
  };
  const inputStyle = {
    outLine: "none",
    border: "1px solid #c9c9c9",
    padding: "10px",
    borderRadius: "4px",
    marginRight: "1px",
    width: "100%",
    marginTop: "15px",
  };
  const loginPopup = {
    display: "flex",
    width: "100%",
    height: "100%",
  };
  return (
    <>
      <div>
        <Button variant="primary" onClick={handleShow}>
          Sign In
        </Button>

        <Modal show={show} onHide={handleClose} style={{ marginTop: "150px" }}>
          <Modal.Header closeButton>
            <h1>{currentState}</h1>
          </Modal.Header>
          <Modal.Body>
            <div style={loginPopup}>
              <form>
                <div>
                  {currentState === "Sign In" ? null : (
                    <input
                      type="text"
                      placeholder="Your name"
                      required
                      style={inputStyle}
                    />
                  )}
                  <input
                    type="email"
                    placeholder="Your email"
                    required
                    style={inputStyle}
                  />
                  <input
                    type="password"
                    placeholder="Your password"
                    required
                    style={inputStyle}
                  />
                </div>
              </form>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <div style={{ display: "flex" }}>
                <input
                  type="checkbox"
                  required
                  style={{ marginTop: "-14px", marginRight: "8px" }}
                />
                <p>
                  By continuing, I agree to the terms of use & privacy policy.
                </p>
              </div>
              <div>
                {currentState === "Sign In" ? (
                  <p>
                    Create a new account?{" "}
                    <span
                      onClick={() => setCurrentState("Sign Up")}
                      style={{ color: "blue" }}
                    >
                      Click here
                    </span>
                  </p>
                ) : (
                  <p>
                    Already have an account?{" "}
                    <span
                      onClick={() => setCurrentState("Sign In")}
                      style={{ color: "blue" }}
                    >
                      Login here
                    </span>
                  </p>
                )}
              </div>
              <div>
                <Button
                  variant="primary"
                  onClick={handleClose}
                  style={{
                    display: "block",
                    width: "100%",
                    borderRadius: "10px",
                  }}
                >
                  {currentState === "Sign Up" ? "Sign Up" : "Sign In"}
                </Button>
              </div>
              {currentState === "Sign Up" ? null : (
                <div>
                  <Button
                    variant="primary"
                    onClick={handleClose}
                    style={{
                      display: "block",
                      width: "100%",
                      marginTop: "15px",
                      borderRadius: "10px",
                    }}
                  >
                    Sign In with Google Account
                  </Button>
                </div>
              )}
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default Login;
