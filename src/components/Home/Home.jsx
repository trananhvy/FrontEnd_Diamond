import React, { useContext, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import DiamondComponent from "../DiamondComponent/DiamondComponent";
import Footer from "../Footer/Footer";
import CompactCarousel from "../Headers/Headers";
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
  min-height: 100vh;
  text-align: left;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 15px;
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
    <Body>
      <div>
        <Navbar />
        <CompactCarousel />
        <Container>
          <DiamondComponent category={category} setCategory={setCategory} />
        </Container>
      </div>
    </Body>
  );
}

export default Home;
