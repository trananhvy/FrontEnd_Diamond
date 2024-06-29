import React, { useContext, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import DiamondComponent from "../DiamondComponent/DiamondComponent";
import Footer from "../Footer/Footer";
import Header from "../Headers/Headers";
import { AuthContext } from "../AuthContext/AuthContext"; // Import the context
import styled, { keyframes } from "styled-components";

// Tạo animation cho WelcomeMessage
const scroll = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const Body = styled.div`
  background-color: #faf6f0;
  min-height: 100vh;
`;

const WelcomeMessageContainer = styled.div`
  overflow: hidden;
  white-space: nowrap;
  margin-top: 77px;
`;

const WelcomeMessage = styled.div`
  display: inline-block;
  padding-left: 100%;
  margin-top: 10px;
  font-size: 30px;
  font-weight: 500;
  color: #333;
  animation: ${scroll} 5s linear infinite;
`;

function Home() {
  const [category, setCategory] = useState("All");
  const { isLoggedIn, name } = useContext(AuthContext); // Get isLoggedIn and name from context
  const [menu, setMenu] = useState("home");

  return (
    <>
      <Navbar menu={menu} setMenu={setMenu} />
      <Body>
        {isLoggedIn && name && (
          <WelcomeMessageContainer>
            <WelcomeMessage>Welcome {name}</WelcomeMessage>
          </WelcomeMessageContainer>
        )}
        <Header isLoggedIn={isLoggedIn && name} />
        <DiamondComponent category={category} setCategory={setCategory} />
      </Body>
    </>
  );
}

export default Home;
