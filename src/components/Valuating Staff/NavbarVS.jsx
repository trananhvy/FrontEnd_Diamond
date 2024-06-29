import React, { useContext, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../components/AuthContext/AuthContext";

const NavbarContainer = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #343a40;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;

const NavButton = styled.button`
  padding: 15px 20px;
  color: white;
  background: none;
  border: none;
  text-align: left;
  width: 100%;
  cursor: pointer;
  &:hover {
    background-color: #495057;
  }
  ${(props) =>
    props.active &&
    `
    background-color: #495057;
  `}
`;

function NavbarOfVS() {
  const navigate = useNavigate();
  const { signOut } = useContext(AuthContext);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleSignOut = () => {
    signOut();
    navigate("/home");
  };

  return (
    <NavbarContainer>
      <NavButton onClick={() => handleNavigation("/vsPage")}>
        Dashboard
      </NavButton>
      <NavButton onClick={() => handleNavigation("/vsProfile")}>
        Profile
      </NavButton>
      <NavButton onClick={() => handleNavigation("/home")}>Home</NavButton>
      <NavButton onClick={handleSignOut}>Logout</NavButton>
    </NavbarContainer>
  );
}

export default NavbarOfVS;
