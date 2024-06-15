import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Headers from "../../components/Headers/Headers";
import Navbar from "../../components/Navbar/Navbar";
import CertificateComponent from "../../components/CertificateComponent/CertificateComponent";
function DiamondCheck() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <CertificateComponent />
      </div>
    </>
  );
}

export default DiamondCheck;
