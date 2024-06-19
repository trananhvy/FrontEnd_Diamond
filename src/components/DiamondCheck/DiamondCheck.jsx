import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Headers from "../../components/Headers/Headers";
import Navbar from "../../components/Navbar/Navbar";
import CertificateComponent from "../../components/CertificateComponent/CertificateComponent";
import Footer from "../../components/Footer/Footer";
import { UserContext } from "../../components/CalculateContext/CalculateContent";

function DiamondCheck() {
  const [menu, setMenu] = useState("diamondcheck");
  const body = {
    backgroundColor: "#FAF6F0",
  };

  // Correctly accessing context values

  return (
    <>
      <div style={body}>
        <Navbar menu={menu} setMenu={setMenu} />
      </div>
      <div style={body}>
        <CertificateComponent />
      </div>
    </>
  );
}

export default DiamondCheck;
