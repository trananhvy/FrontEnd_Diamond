import React, { useState } from "react";

function Header() {
  const [buttonClicked, setButtonClicked] = useState(false);

  const header = {
    height: "30vw",
    margin: "30px 40px",
    background:
      "url('src/assets/1000_F_784587516_qlrZBqw1kT4Mv5bR1JRX6Mmwi8wBD1X6.jpg')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 50%", // Đặt background ở trung tâm
    overflow: "hidden",
    display: "flex",
    position: "relative",
    borderRadius: "50px", // Viền tròn
  };

  const headerContents = {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    gap: "1.5vw",
    maxWidth: "50%",
    bottom: "10%",
    left: "6vw",
  };

  const a = {
    fontWeight: "500",
    color: "#49557e",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    transition: "color 0.3s ease-in-out",
  };

  const p = {
    color: "#49557e",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    transition: "color 0.3s ease-in-out",
  };

  const button = {
    border: "none",
    color: "#747474",
    fontWeight: "500",
    padding: "1vw 2.3vw",
    backgroundColor: "#fff",
    borderRadius: "35px",
    transition: "all 0.3s ease-in-out",
    cursor: "pointer",
  };

  function handleButtonClick() {
    setButtonClicked(true);
  }

  return (
    <div style={header}>
      <div style={headerContents}>
        <h2 style={a}>Where Diamond Value Begins</h2>
        <p style={p}>
          "Where Diamond Value Begins" encapsulates the essence of our
          commitment to providing unparalleled diamond valuation services. At
          our platform, we blend expertise with cutting-edge technology to offer
          precise and reliable appraisals. We believe that understanding the
          true value of a diamond is where the journey towards making informed,
          confident decisions starts. Whether you're a seasoned collector, a
          first-time buyer, or simply curious about the worth of a cherished
          piece, our comprehensive assessments ensure that you have all the
          information you need. Trust us to illuminate the true worth of your
          diamonds, setting the foundation for value that shines through.
        </p>
        <button
          style={button}
          className={buttonClicked ? "button-clicked" : ""}
          onClick={handleButtonClick}
        >
          View Diamond
        </button>
      </div>
    </div>
  );
}

export default Header;
