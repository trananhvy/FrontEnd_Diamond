import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Headers from "../../components/Headers/Headers";
import Navbar from "../../components/Navbar/Navbar";
function Prices() {
  const [menu, setMenu] = useState("prices");
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
          <Headers />
        </div>
      </div>
    </>
  );
}

export default Prices;
