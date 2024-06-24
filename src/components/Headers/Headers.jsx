import React, { useState } from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  margin: ${(props) =>
    props.isLoggedIn
      ? "3px 40px"
      : "103px 40px"}; // Điều chỉnh giá trị margin dựa trên isLoggedIn
  height: 30vw;
  background: url("src/assets/lab-grown-diamonds-malaysia-1024x597.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  overflow: hidden;
  display: flex;
  position: relative;
  border-radius: 50px;
`;

const HeaderContents = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1.5vw;
  max-width: 50%;
  bottom: 10%;
  left: 6vw;
`;

const HeaderText = styled.h2`
  font-weight: 500;
  color: #49557e;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  transition: color 0.3s ease-in-out;
`;

const Paragraph = styled.p`
  color: #49557e;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  transition: color 0.3s ease-in-out;
`;

const Button = styled.button`
  border: none;
  color: #747474;
  font-weight: 500;
  padding: 1vw 2.3vw;
  background-color: #fff;
  border-radius: 35px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &.button-clicked {
    background-color: #eee;
  }
`;

function Header({ isLoggedIn }) {
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setButtonClicked(true);
  };

  return (
    <HeaderContainer isLoggedIn={isLoggedIn}>
      <HeaderContents>
        <HeaderText>Where Diamond Value Begins</HeaderText>
        <Paragraph>
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
        </Paragraph>
        <Button
          className={buttonClicked ? "button-clicked" : ""}
          onClick={handleButtonClick}
        >
          View Diamond
        </Button>
      </HeaderContents>
    </HeaderContainer>
  );
}

export default Header;
