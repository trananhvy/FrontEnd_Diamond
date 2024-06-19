import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Headers from "../../components/Headers/Headers";
import Navbar from "../../components/Navbar/Navbar";
function Search() {
  const [menu, setMenu] = useState("search");
  const category = useContext(UserContext);
  return (
    <>
      <div>
        <Navbar menu={menu} setMenu={setMenu} />
      </div>
      <div style={{ marginTop: "200px" }}>
        <h1>{category}</h1>
      </div>
    </>
  );
}

export default Search;
