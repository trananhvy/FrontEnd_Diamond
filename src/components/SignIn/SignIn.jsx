import React, { useState, useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import { AuthContext } from "../../components/AuthContext/AuthContext";
import { FaGoogle } from "react-icons/fa6";

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

const LoginPopup = styled.div``;

const StyledButton2 = styled(Button)`
  width: 80%;
  background-color: grey;
  border-radius: 10px;
  margin-left: 10%;
  margin-top: ${(props) => (props.google ? "15px" : "20px")};
`;

const SignInContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const FormContainer = styled.div`
  width: 50%;
  padding: 20px;
`;

const ImageContainer = styled.div`
  width: 60%;
  display: flex;
  height: 270px;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const StyledImage = styled.img`
  width: 100%;
  border-radius: 10px;
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
    <SignInContainer>
      <FormContainer>
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
          <p>Forget password? Click here to reset your password</p>
          <StyledButton type="submit" variant="primary">
            Sign In
          </StyledButton>
        </form>
        <StyledButton2 google>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FaGoogle style={{ marginRight: "8px" }} />
            Sign in with Google
          </div>
        </StyledButton2>
      </FormContainer>
      <ImageContainer>
        <StyledImage src="https://physics.aps.org/assets/58434729-f278-4bc7-ad3c-faf98d3db26b/e40_1.png" />
      </ImageContainer>
    </SignInContainer>
  );
};

export default SignIn;
