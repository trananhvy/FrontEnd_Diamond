import React, { useState } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 10px 22px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: ${({ active }) => (active ? "green" : "#f9f9f9")};
  cursor: pointer;
  transition: background-color 0.3s;
`;

const StyledWideButton = styled.button`
  padding: 10px 55px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: ${({ active }) => (active ? "green" : "#f9f9f9")};
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e6e6e6;
  }
`;

function CalculateContent() {
  const bodyStyle = {
    margin: "109px 28px 8px 189px",
    padding: "20px",
    width: "50%",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    backgroundColor: "#fff",
  };
  const sectionStyle = {
    marginBottom: "20px",
  };
  const buttonContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: "5px",
  };
  const buttonContainerStyle2 = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "5px",
  };
  const buttonContainerStyle1 = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "5px",
  };

  const [selectedOrigin, setSelectedOrigin] = useState(null);
  const [selectedShape, setSelectedShape] = useState(null);
  const [selectedClarity, setSelectedClarity] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleOriginButtonClick = (origin) => {
    setSelectedOrigin(origin);
  };

  const handleShapeButtonClick = (shape) => {
    setSelectedShape(shape);
  };

  const handleClarityButtonClick = (clarity) => {
    setSelectedClarity(clarity);
  };
  const handleColorButtonClick = (color) => {
    setSelectedColor(color);
  };
  return (
    <div style={bodyStyle}>
      <h1>Diamond Price Calculator</h1>
      <div style={sectionStyle}>
        <h3>DIAMOND ORIGIN</h3>
        <div style={buttonContainerStyle2}>
          <div>
            <button
              className={`btn${selectedOrigin === "NATURAL" ? " active" : ""}`}
              style={{ width: "100%" }}
              onClick={() => handleOriginButtonClick("NATURAL")}
            >
              NATURAL
            </button>
          </div>
          <div>
            <button
              className={`btn${
                selectedOrigin === "LAB GROWN" ? " active" : ""
              }`}
              onClick={() => handleOriginButtonClick("LAB GROWN")}
              style={{ width: "100%" }}
            >
              LAB GROWN
            </button>
          </div>
        </div>
      </div>
      <div style={sectionStyle}>
        <h3>SHAPE</h3>
        <div style={buttonContainerStyle}>
          <div>
            <StyledButton
              active={selectedShape === "ROUND"}
              onClick={() => handleShapeButtonClick("ROUND")}
            >
              ROUND
            </StyledButton>
          </div>
          <div>
            <StyledButton
              active={selectedShape === "CUSHION"}
              onClick={() => handleShapeButtonClick("CUSHION")}
            >
              CUSHION
            </StyledButton>
          </div>
          <div>
            <StyledButton
              active={selectedShape === "EMERALD"}
              onClick={() => handleShapeButtonClick("EMERALD")}
            >
              EMERALD
            </StyledButton>
          </div>
          <div>
            <StyledButton
              active={selectedShape === "OVAL"}
              onClick={() => handleShapeButtonClick("OVAL")}
            >
              OVAL
            </StyledButton>
          </div>
          <div>
            <StyledButton
              active={selectedShape === "PRINCESS"}
              onClick={() => handleShapeButtonClick("PRINCESS")}
            >
              PRINCESS
            </StyledButton>
          </div>
          <div>
            <StyledButton
              active={selectedShape === "PEAR"}
              onClick={() => handleShapeButtonClick("PEAR")}
            >
              PEAR
            </StyledButton>
          </div>
          <div>
            <StyledButton
              active={selectedShape === "RADIANT"}
              onClick={() => handleShapeButtonClick("RADIANT")}
            >
              RADIANT
            </StyledButton>
          </div>
          <div>
            <StyledButton
              active={selectedShape === "MARQUISE"}
              onClick={() => handleShapeButtonClick("MARQUISE")}
            >
              MARQUISE
            </StyledButton>
          </div>
          <div>
            <StyledButton
              active={selectedShape === "ASSCHER"}
              onClick={() => handleShapeButtonClick("ASSCHER")}
            >
              ASSCHER
            </StyledButton>
          </div>
          <div>
            <StyledButton
              active={selectedShape === "HEART"}
              onClick={() => handleShapeButtonClick("HEART")}
            >
              HEART
            </StyledButton>
          </div>
        </div>
      </div>
      <div
        style={{
          padding: "20px",
          backgroundColor: "#f2f2f2",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      >
        <h2 style={{ color: "#333" }}>CARAT</h2>
        <input
          type="range"
          style={{
            width: "100%",
            height: "20px",
            backgroundColor: "#ddd",
            borderRadius: "10px",
            outline: "none",
            WebkitAppearance: "none",
          }}
        />
      </div>
      <div style={sectionStyle}>
        <h2>COLOR</h2>
        <div style={buttonContainerStyle1}>
          <div>
            <StyledWideButton
              active={selectedColor === "K"} // Sử dụng selectedColor
              onClick={() => handleColorButtonClick("K")} // Sử dụng handleColorButtonClick
            >
              K
            </StyledWideButton>
          </div>
          <div>
            <StyledWideButton
              active={selectedColor === "J"} // Sử dụng selectedColor
              onClick={() => handleColorButtonClick("J")} // Sử dụng handleColorButtonClick
            >
              J
            </StyledWideButton>
          </div>
          <div>
            <StyledWideButton
              active={selectedColor === "I"} // Sử dụng selectedColor
              onClick={() => handleColorButtonClick("I")} // Sử dụng handleColorButtonClick
            >
              I
            </StyledWideButton>
          </div>
          <div>
            <StyledWideButton
              active={selectedColor === "H"} // Sử dụng selectedColor
              onClick={() => handleColorButtonClick("K")} // Sử dụng handleColorButtonClick
            >
              H
            </StyledWideButton>
          </div>
          <div>
            <StyledWideButton
              active={selectedColor === "G"} // Sử dụng selectedColor
              onClick={() => handleColorButtonClick("G")} // Sử dụng handleColorButtonClick
            >
              G
            </StyledWideButton>
          </div>
          <div>
            <StyledWideButton
              active={selectedColor === "F"} // Sử dụng selectedColor
              onClick={() => handleColorButtonClick("F")} // Sử dụng handleColorButtonClick
            >
              F
            </StyledWideButton>
          </div>
          <div>
            <StyledWideButton
              active={selectedColor === "E"} // Sử dụng selectedColor
              onClick={() => handleColorButtonClick("E")} // Sử dụng handleColorButtonClick
            >
              E
            </StyledWideButton>
          </div>
          <div>
            <StyledWideButton
              active={selectedColor === "D"} // Sử dụng selectedColor
              onClick={() => handleColorButtonClick("D")} // Sử dụng handleColorButtonClick
            >
              D
            </StyledWideButton>
          </div>
        </div>
      </div>
      <div style={sectionStyle}>
        <h2>CLARITY</h2>
        <div style={buttonContainerStyle1}>
          <div>
            <StyledWideButton
              active={selectedClarity === "SI2"}
              onClick={() => handleClarityButtonClick("SI2")}
            >
              SI2
            </StyledWideButton>
          </div>
          <div>
            <StyledWideButton
              active={selectedClarity === "SI3"}
              onClick={() => handleClarityButtonClick("SI3")}
            >
              SI3
            </StyledWideButton>
          </div>
          <div>
            <StyledWideButton
              active={selectedClarity === "VS2"}
              onClick={() => handleClarityButtonClick("VS2")}
            >
              VS2
            </StyledWideButton>
          </div>
          <div>
            <StyledWideButton
              active={selectedClarity === "VS1"}
              onClick={() => handleClarityButtonClick("VS1")}
            >
              VS1
            </StyledWideButton>
          </div>
          <div>
            <StyledWideButton
              active={selectedClarity === "VVS2"}
              onClick={() => handleClarityButtonClick("VVS2")}
            >
              VVS2
            </StyledWideButton>
          </div>
          <div>
            <StyledWideButton
              active={selectedClarity === "VVS1"}
              onClick={() => handleClarityButtonClick("VVS1")}
            >
              VVS2
            </StyledWideButton>
          </div>
          <div>
            <StyledWideButton
              active={selectedClarity === "IF"}
              onClick={() => handleClarityButtonClick("IF")}
            >
              VVS2
            </StyledWideButton>
          </div>
          <div>
            <StyledWideButton
              active={selectedClarity === "FL"}
              onClick={() => handleClarityButtonClick("FL")}
            >
              VVS2
            </StyledWideButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalculateContent;
