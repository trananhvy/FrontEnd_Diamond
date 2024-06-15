import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Headers from "../../components/Headers/Headers";
import Navbar from "../../components/Navbar/Navbar";
function Calculate() {
  const [menu, setMenu] = useState("calculate");
  return (
    <>
      <div>
        <Navbar menu={menu} setMenu={setMenu} />
      </div>
    </>
  );
}
export default Calculate;
