import React, { useState, useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
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

const SignIn = ({ setShow }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useContext(AuthContext);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://667c50033c30891b865c30f1.mockapi.io/accountManagement?email=${username}&password=${password}`
      );
      const users = response.data;
      const user = users[0];

      if (user) {
        signIn(user);
        setShow(false);
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Login failed. Please try again.");
    }
  };

  return (
    <LoginPopup>
      <form onSubmit={handleFormSubmit}>
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
        <StyledButton type="submit" variant="primary">
          Sign In
        </StyledButton>

        <p> Forget password? Click here to reset your password</p>
        <StyledButton variant="primary" google>
          Sign In with Google Account
        </StyledButton>
      </form>
    </LoginPopup>
  );
};

export default SignIn;
