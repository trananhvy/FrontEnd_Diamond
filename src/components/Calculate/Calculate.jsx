import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Headers from "../../components/Headers/Headers";
import Navbar from "../../components/Navbar/Navbar";
import CalculateContent from "../CalculateContext/CalculateContent1";
function Calculate() {
  const [menu, setMenu] = useState("calculate");
  const body = {
    backgroundColor: "#FAF6F0",
  };
  return (
    <>
      <div style={body}>
        <div>
          <Navbar menu={menu} setMenu={setMenu} />
        </div>
        <div>
          <CalculateContent />
        </div>
      </div>
    </>
  );
}
export default Calculate;
