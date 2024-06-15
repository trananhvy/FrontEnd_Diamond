import React from "react";
import { Container } from "react-bootstrap";

function CertificateComponent() {
  const certificateBody1 = {
    display: "flex",
    justifyContent: "space-evenly",
  };

  return (
    <>
      <div style={certificateBody1}>
        <div>
          <h1>
            Check any diamond's <br />
            price & quality{" "}
          </h1>
          <input type="text" placeholder="Enter Certificate ID" />
        </div>
        <div>
          <h1>Hello B</h1>
        </div>
      </div>
    </>
  );
}

export default CertificateComponent;
