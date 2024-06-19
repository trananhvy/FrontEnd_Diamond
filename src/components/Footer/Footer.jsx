import React from "react";

function Footer() {
  const footer = {};

  return (
    <>
      <div className="footer" id="footer">
        <div className="footer-content">
          \
          <div className="footer-content-left">
            <h2>StoneAlogola</h2>
            <p>
              Welcome to Diamond Valuation Store, the premier destination for
              all your diamond appraisal and valuation needs! Our store is
              dedicated to providing accurate and reliable assessments of
              diamond quality and value. Whether you are looking to sell,
              insure, or simply gain a better understanding of your diamond's
              worth, we are here to assist you every step of the way.
            </p>
          </div>
          <div className="footer-content-center">
            <div>
              <h2>COMPANY</h2>
              <ul>
                <li>HOME</li>
                <li>ABOUT US</li>
                <li>SERVICE</li>
                <li>PRIVACY POLICY</li>
              </ul>
            </div>
            <div>
              <h2>FEATURES</h2>
              <ul>
                <li>PRICE CALCULATOR</li>
                <li>SEARCH</li>
                <li>LAB GROWN DIAMOND</li>
                <li>PRICE & QUALITY CHECK</li>
              </ul>
            </div>
          </div>
          <div className="footer-content-right">
            <h2>CONTACT US</h2>
            <ul>
              <li>+1-212-345-567</li>
              <li>diamondalgola@gmail.com</li>
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
