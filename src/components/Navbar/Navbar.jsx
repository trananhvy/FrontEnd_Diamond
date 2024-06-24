import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../components/AuthContext/AuthContext";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import Login from "../../components/Login/Login";

const NavbarContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center; /* Căn giữa các phần tử */
  background-color: #333;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const NavbarBrand = styled.h1`
  color: #fff;
  cursor: pointer;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`;

const NavbarMenu = styled.div`
  display: flex;
  gap: 20px;
  color: #fff;
  font-size: 20px;
`;

const StyledDropdownButton = styled(DropdownButton)`
  & > .btn-primary {
    background-color: transparent;
    border: none;
    color: #fff;
    font-size: 100%;
    font-weight: 600;
    &:hover,
    &:focus,
    &:active {
      background-color: transparent;
      border: none;
      color: #ffd700;
    }
  }

  & > .dropdown-menu {
    background-color: #444;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  & .dropdown-item {
    color: #fff;
    &:hover {
      background-color: #555;
    }
  }
`;

const AuthButton = styled(Button)`
  background-color: #49557e;
  border: none;
  &:hover {
    background-color: #6a75a3;
  }
`;

const StyledLogin = styled(Login)`
  margin-right: 20px; /* Điều chỉnh khoảng cách với các dropdown */
`;

function Navbar({ setMenu }) {
  const { isLoggedIn, signIn, signOut } = useContext(AuthContext);
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => setShowLogin(true);
  const handleLogoutClick = () => {
    setShowLogin(false);
    signOut();
  };

  const handleSuccessfulLogin = () => {
    setShowLogin(false);
    signIn();
  };

  return (
    <>
      <NavbarContainer>
        <NavbarBrand onClick={() => setMenu("home")}>
          <Link to="/home" style={{ color: "inherit", textDecoration: "none" }}>
            StoneAlgola
          </Link>
        </NavbarBrand>
        <NavbarMenu>
          <StyledDropdownButton id="education-dropdown" title="EDUCATION">
            <Dropdown.Item as={Link} to="/overviewedu">
              Overview
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/intronatural">
              Introduce Natural Diamond
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/introlab">
              Introduce Lab Diamond
            </Dropdown.Item>
          </StyledDropdownButton>

          <StyledDropdownButton
            id="diamondcheck-dropdown"
            title="DIAMOND CHECK"
          >
            <Dropdown.Item as={Link} to="/overviewcheck">
              OVERVIEW
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/diamondCheck">
              Diamond Check
            </Dropdown.Item>
          </StyledDropdownButton>

          <StyledDropdownButton id="calculate-dropdown" title="VALUATION">
            <Dropdown.Item as={Link} to="/overviewval">
              OVERVIEW
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/calculate">
              Calculate
            </Dropdown.Item>
          </StyledDropdownButton>

          <StyledDropdownButton id="services-dropdown" title="SERVICES">
            <Dropdown.Item as={Link} to="/overviewser">
              OVERVIEW
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/serviceslab">
              BOOKING
            </Dropdown.Item>
          </StyledDropdownButton>

          <StyledDropdownButton id="blogs-dropdown" title="BLOGS">
            <Dropdown.Item as={Link} to="/blogs">
              BLOGS
            </Dropdown.Item>
          </StyledDropdownButton>
        </NavbarMenu>
        <StyledLogin />
      </NavbarContainer>
    </>
  );
}

export default Navbar;
