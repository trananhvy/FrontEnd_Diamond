import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
function Footer() {
  const footer = {
    color: "#d9d9d9",
    backgroundColor: "#323232",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    padding: "20px 8vw",
    paddingTop: "80px",
  };

  const footerContent = {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr",
    gap: "80px",
  };
  const footerContentRight = {
    width: "100%",
    flexDirection: "column",
    alignItems: "start",
    gap: "20px",
  };
  const footerContentCenter = {
    width: "100%",
    flexDirection: "column",
    alignItems: "start",
    gap: "20px",
  };
  const footerContentLeft = {
    width: "100%",
    flexDirection: "column",
    alignItems: "start",
    gap: "20px",
  };
  const liStyle = {
    listStyle: "none",
    marginBottom: "10px,",
  };
  const logo = {
    width: "40px",
    marginRight: "15px",
  };
  return (
    <>
      <div className="footer" id="footer" style={footer}>
        <div className="footer-content" style={footerContent}>
          <div className="footer-content-left" style={footerContentLeft}>
            <h2>StoneAlogola</h2>
            <p>
              Welcome to Diamond Valuation Store, the premier destination for
              all your diamond appraisal and valuation needs! Our store is
              dedicated to providing accurate and reliable assessments of
              diamond quality and value. Whether you are looking to sell,
              insure, or simply gain a better understanding of your diamond's
              worth, we are here to assist you every step of the way.
            </p>
            <div className="footer-social-icons">
              <FaFacebook style={logo} />
              <FaInstagram style={logo} />
            </div>
          </div>
          <div className="footer-content-center" style={footerContentCenter}>
            <div style={{ display: "flex" }}>
              <div>
                <h2 style={{ marginLeft: "30px" }}>FEATURES</h2>
                <ul>
                  <li style={liStyle}>PRICE CALCULATOR</li>
                  <li style={liStyle}>SEARCH</li>
                  <li style={liStyle}>LAB GROWN DIAMOND</li>
                  <li style={liStyle}>PRICE & QUALITY CHECK</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-content-right" style={footerContentRight}>
            <h2 style={{ marginLeft: "30px" }}>CONTACT US</h2>
            <ul>
              <li style={liStyle}>+1-212-345-567</li>
              <li style={liStyle}>diamondalgola@gmail.com</li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="footer-copyright">
          Copyright 2024 DiamondAlgola.com - All Right Service
        </p>
      </div>
    </>
  );
}
export default Footer;
