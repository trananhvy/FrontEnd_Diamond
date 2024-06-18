import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
function Login({ setShowLogin, handleSuccessfulLogin }) {
  const [currentState, setCurrentState] = useState("Login");

  const handleLogoutClick = () => {
    setShowLogin(false); // Close the Login popup
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here (e.g., API call or validation)
    // After successful login, call handleSuccessfulLogin()
    handleSuccessfulLogin();
  };

  const test = {
    marginTop: "500px",
  };
  const loginPopup = {
    position: "absolute",
    zIndex: "1",
    width: "100%",
    height: "100%",
    backgroundColor: "#00000090",
    display: "grid",
  };
  const loginPopupContainer = {
    placeSelf: "center",
    width: "max(23vw,330px)",
    color: "#808080",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    gap: "25px",
    padding: "25px 30px",
    borderRadius: "8px",
    fontSize: "15px",
    Animation: "fadeIn 0.5s",
  };
  const logInPopUpTitle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "black",
  };
  const close = {
    width: "50px",
    cursor: "pointer",
  };
  const logInPopUpInputs = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  };
  const inputStyle = {
    outLine: "none",
    border: "1px solid #c9c9c9",
    padding: "10px",
    borderRadius: "4px",
  };
  const button = {
    border: "none",
    padding: "10px",
    borderRadius: "4px",
    color: "White",
    backgroundColor: "grey",
    fontSize: "15px",
    cursot: "pointer",
  };
  const logInPopUpInputCondition = {
    display: "flex",
    alignItems: "start",
    gap: "8px",
    marginTop: "-15px",
  };
  const input2 = {
    marginTop: "5px",
  };
  return (
    <>
      <div className="login-popup" style={loginPopup}>
        <form
          className="login-popup-container"
          onSubmit={handleFormSubmit}
          style={loginPopupContainer}
        >
          <div className="login-popup-title" style={logInPopUpTitle}>
            <h2>{currentState}</h2>
            <IoIosClose style={close} onClick={() => setShowLogin(false)} />
          </div>
          <div className="login-popup-inputs" style={logInPopUpInputs}>
            {currentState === "Login" ? null : (
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
          <button style={button}>
            {currentState === "Sign Up" ? "Login" : "Sign Up"}
          </button>
          <div
            className="login-popup-condition"
            style={logInPopUpInputCondition}
          >
            <input type="checkbox" required />
            <p>By continuing, I agree to the terms of use & privacy policy.</p>
          </div>
          <div style={{ margin: "-20px 27px 0px 1px" }}>
            {currentState === "Login" ? (
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
                  onClick={() => setCurrentState("Login")}
                  style={{ color: "blue" }}
                >
                  Login here
                </span>
              </p>
            )}
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
