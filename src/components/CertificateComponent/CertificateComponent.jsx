import React, { useState } from "react";
import { Container } from "react-bootstrap";

function CertificateComponent() {
  const [certificateId, setCertificateId] = useState("");
  const [focused, setFocused] = useState(false); // Đặt useState trước khi sử dụng

  const handleInputChange = (event) => {
    setCertificateId(event.target.value);
  };

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  const bodyStyle = {
    display: "flex",
    marginLeft: "300px",
    justifyContent: "center",
    marginTop: "100px",
  };

  const inputStyle = {
    position: "absolute",
    width: "70%",
    outline: "none",
    height: "42px",
    fontSize: "1.0em",
    padding: "0 30px",
    lineHeight: "80px",
    borderRadius: "10px",
    border: focused && certificateId ? "4px solid #66ff00" : "2px solid black",
    background: "transparent",
    transition: "0.1s ease",
    zIndex: "1111",
    color: focused && certificateId ? "#66ff00" : "",
  };

  const labelline = {
    position: "absolute",
    fontSize: "1.6em", // Sửa cú pháp fontSize
    color: "#f0ffff" && focused && certificateId ? "#66ff00" : "black",
    padding: "0 20px",
    margin: "2px 15px",
    transition: "0.2s ease",
    height: focused && certificateId ? "30px" : "",
    lineHeight: focused && certificateId ? "30px" : "",
    transform:
      focused && certificateId ? "translate(-15px, -16px) scale(0.88)" : "",
    zIndex: "1111",
    backgroundColor: "#FAF6F0",
  };

  return (
    <>
      <div style={bodyStyle}>
        <div style={{ marginTop: "265px" }}>
          <h1>
            Check any diamond's <br />
            price & quality{" "}
          </h1>
          <div
            style={{
              position: "relative",
              height: "45px",
              width: "650px",
            }}
            className={`entryarea ${focused && certificateId ? "focused" : ""}`}
          >
            <input
              type="text"
              required
              style={inputStyle}
              value={certificateId}
              onChange={handleInputChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <div style={labelline}>Enter the certificate id</div>
          </div>
        </div>
        <div>
          <img
            src="src/assets/z5538479592094_3f36f92a80b77984c14933057cf1d18d.jpg"
            style={{
              width: "60%",
              marginTop: "106px",
            }}
          />
        </div>
      </div>
    </>
  );
}

export default CertificateComponent;
