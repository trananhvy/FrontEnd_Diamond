import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import Headers from "../../components/Headers/Headers";

const BodyWrapper = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavbarMenu = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;
  color: #49557e;
  font-size: 20px;
  margin-right: 350px;
  margin-top: 10px;
`;

const ActiveMenuItem = styled.li`
  padding-top: 2px;
  border-bottom: 2px solid #49557e;
`;

const Logo = styled.div`
  width: 150px;
`;

const Name = styled.div`
  padding-left: 50px;
  color: #49557e;
  font-weight: 700;
  font-size: 100%;
`;

const MenuItem = styled.li`
  margin-left: 80px;
  cursor: pointer;
  font-size: 100%;
  font-weight: 600;
`;

function Layout() {
  const [menu, setMenu] = useState("home");

  return (
    <>
      <BodyWrapper>
        <Name onClick={() => setMenu("home")}>
          <h1>
            <Link to="/home">StoneAngola</Link>
          </h1>
        </Name>
        <NavbarMenu>
          <MenuItem
            onClick={() => setMenu("search")}
            as={menu === "search" ? ActiveMenuItem : MenuItem}
          >
            <Link to="/search">SEARCH</Link>
          </MenuItem>
          <MenuItem
            onClick={() => setMenu("diamondcheck")}
            as={menu === "diamondcheck" ? ActiveMenuItem : MenuItem}
          >
            <Link to="/diamondcheck">DIAMOND CHECK</Link>
          </MenuItem>
          <MenuItem
            onClick={() => setMenu("calculate")}
            as={menu === "calculate" ? ActiveMenuItem : MenuItem}
          >
            <Link to="/calculate">CALCULATE</Link>
          </MenuItem>
          <MenuItem
            onClick={() => setMenu("prices")}
            as={menu === "prices" ? ActiveMenuItem : MenuItem}
          >
            <Link to="/prices">PRICE</Link>
          </MenuItem>
          <MenuItem
            onClick={() => setMenu("blogs")}
            as={menu === "blogs" ? ActiveMenuItem : MenuItem}
          >
            <Link to="/blogs">BLOGS</Link>
          </MenuItem>
        </NavbarMenu>
        <div>
          <Button type="submit">Sign In</Button>
        </div>
      </BodyWrapper>

      <div>
        <Headers />
      </div>
    </>
  );
}

export default Layout;
