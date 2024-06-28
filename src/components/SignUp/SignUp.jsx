import React, { useState, useContext } from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import { AuthContext } from "../../components/AuthContext/AuthContext";

const StyledButton = styled(Button)`
  width: 100%;
  border-radius: 10px;
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

const SignUp = ({ setShow }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useContext(AuthContext);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `https://667c50033c30891b865c30f1.mockapi.io/accountManagement`,
        {
          email: username,
          password: password,
        }
      );
      const user = response.data;
      signIn(user);
      setShow(false);
    } catch (error) {
      console.error("Error during sign up:", error);
      alert("Sign up failed. Please try again.");
    }
  };

  return (
    <LoginPopup>
      <form onSubmit={handleFormSubmit}>
        <Input
          type="text"
          placeholder="Your name"
          required
          onChange={(e) => setUsername(e.target.value)}
        />
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
          Sign Up
        </StyledButton>
      </form>
    </LoginPopup>
  );
};

export default SignUp;
