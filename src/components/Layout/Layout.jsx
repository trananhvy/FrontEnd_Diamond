import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Headers from "../../components/Headers/Headers";

function Layout() {
  const [menu, setMenu] = useState("home");
  const bodyStyle = {
    margin: 0,
    padding: 0,
  };
  const navbarStyle = {
    width: "100%",
    padding: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };
  const navbarMenuStyle = {
    display: "flex",
    listStyle: "none",
    gap: "20px",
    color: "#49557e",
    fontSize: "20px",
    marginRight: "350px",
    marginTop: "10px",
  };
  const activeStyle = {
    paddingTop: "2px",
    borderBottom: "2px solid #49557e",
  };
  const logoStyle = {
    width: "150px",
  };
  const searchIconStyle = {
    position: "relative",
  };
  const nameStyle = {
    paddingLeft: "50px",
    color: "#49557e",
    fontWeight: "700",
    fontSize: "100%",
  };
  const liStyle = {
    marginLeft: "80px",
    cursor: "pointer",
    fontSize: "100%",
    fontWeight: 600,
  };
  return (
    <>
      <div style={{ ...bodyStyle, ...navbarStyle }}>
        <div className="name">
          <h1
            onClick={() => setMenu("home")}
            style={menu === "home" ? {} : null}
          >
            <Link className="" to="/home">
              StoneAngola
            </Link>
          </h1>
        </div>
        <ul style={navbarMenuStyle}>
          <li
            onClick={() => setMenu("search")}
            style={{ ...liStyle, ...(menu === "search" ? activeStyle : {}) }}
          >
            <Link to="/search">SEARCH</Link>
          </li>
          <li
            onClick={() => setMenu("diamondcheck")}
            style={{
              ...liStyle,
              ...(menu === "diamondcheck" ? activeStyle : {}),
            }}
          >
            <Link to="/diamondcheck">DIAMOND CHECK</Link>
          </li>
          <li
            onClick={() => setMenu("calculate")}
            style={{ ...liStyle, ...(menu === "calculate" ? activeStyle : {}) }}
          >
            <Link to="/calculate">CALCULATE</Link>
          </li>
          <li
            onClick={() => setMenu("prices")}
            style={{ ...liStyle, ...(menu === "prices" ? activeStyle : {}) }}
          >
            <Link to="/prices">PRICE</Link>
          </li>
          <li
            onClick={() => setMenu("blogs")}
            style={{ ...liStyle, ...(menu === "blogs" ? activeStyle : {}) }}
          >
            <Link to="/blogs">BLOGS</Link>
          </li>
        </ul>
        <div>
          <Button type="submit">Sign In</Button>
        </div>
      </div>

      <div>
        <Headers />
      </div>
    </>
  );
}

export default Layout;
