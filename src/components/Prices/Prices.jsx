import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Headers from "../../components/Headers/Headers";
import Navbar from "../../components/Navbar/Navbar";
function Prices() {
  const [menu, setMenu] = useState("prices");
  return (
    <>
      <div>
        <Navbar menu={menu} setMenu={setMenu} />
      </div>
    </>
  );
}

export default Prices;
