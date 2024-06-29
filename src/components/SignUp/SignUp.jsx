import React, { useState, useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import { AuthContext } from "../../components/AuthContext/AuthContext";
import { FaGoogle } from "react-icons/fa6";

const StyledButton = styled(Button)`
  width: 100%;
  border-radius: 10px;
  margin-top: 15px;
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

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const FormContainer = styled.div`
  width: 50%;
  padding: 20px;
`;

const ImageContainer = styled.div`
  width: 62%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 355px;
`;

const StyledImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const SignUp = ({ setShow }) => {
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
    <SignUpContainer>
      <FormContainer>
        <form onSubmit={handleFormSubmit}>
          <Input
            type="text"
            placeholder="Name"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="date"
            placeholder="Date of birth"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="email"
            placeholder="Email"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Confirm password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <StyledButton type="submit" variant="primary">
            Sign Up
          </StyledButton>
        </form>
      </FormContainer>
      <ImageContainer>
        <StyledImage src="https://i.natgeofe.com/n/0b561e53-e75a-432d-b360-b72893f9dc47/GettyImages-76739548_4x3.jpg" />
      </ImageContainer>
    </SignUpContainer>
  );
};

export default SignUp;
