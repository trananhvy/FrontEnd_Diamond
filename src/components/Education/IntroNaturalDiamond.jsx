import React from "react";
import styled from "styled-components";
import Navbar from "../../components/Navbar/Navbar";

// Styled components with Bootstrap grid classes
const ContainerPage = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 150px;
`;

const ImageColumn = styled.div`
  flex: 0 0 50%; /* Equivalent to col-md-6 */
  max-width: 50%; /* Equivalent to col-md-6 */
  padding-right: 15px;
  padding-left: 15px;
`;

const ContentColumn = styled.div`
  flex: 0 0 50%; /* Equivalent to col-md-6 */
  max-width: 50%; /* Equivalent to col-md-6 */
`;

const Container = styled.div`
  padding: 20px;
  color: #49557e;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const Subtitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 15px;
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const List = styled.ul`
  list-style-type: disc;
  padding-left: 40px;
  margin-bottom: 20px;
`;

const ListItem = styled.li`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 10px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 590px; /* Ensure the image height adjusts proportionally */
  display: block;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Quote = styled.blockquote`
  font-style: italic;
  margin: 20px 0;
  padding: 10px;
  background-color: #f5f5f5;
  border-left: 5px solid #49557e;
`;

function IntroNaturalDiamond() {
  return (
    <div>
      <Navbar />
      <ContainerPage>
        <ImageColumn>
          <StyledImage
            src="src/assets/Natural-Rough-and-Polished-16x9-1 (1).webp"
            alt="Natural diamond"
          />
        </ImageColumn>
        <ContentColumn>
          <Container>
            <Title>Introduction to Natural Diamonds</Title>
            <Paragraph>
              Natural diamonds are precious gemstones formed deep within the
              Earth's mantle under extreme heat and pressure. These stunning
              gems are composed of carbon atoms arranged in a crystal lattice
              structure, giving them their remarkable hardness and brilliance.
            </Paragraph>
            <Subtitle>Key Characteristics of Natural Diamonds</Subtitle>
            <List>
              <ListItem>
                <strong>Hardness:</strong> Diamonds are the hardest known
                natural material.
              </ListItem>
              <ListItem>
                <strong>Brilliance:</strong> Diamonds are renowned for their
                exceptional brilliance and fire.
              </ListItem>
              <ListItem>
                <strong>Formation:</strong> Natural diamonds form over billions
                of years under intense heat and pressure.
              </ListItem>
              <ListItem>
                <strong>Rarity:</strong> High-quality natural diamonds are rare
                and highly valued.
              </ListItem>
              <ListItem>
                <strong>Uses:</strong> Diamonds are used in jewelry and for
                industrial purposes.
              </ListItem>
            </List>
            <Paragraph>
              Whether set in engagement rings, necklaces, or other fine jewelry,
              natural diamonds continue to captivate with their timeless beauty
              and unparalleled sparkle.
            </Paragraph>
            <Quote>"Diamonds are a symbol of enduring love and beauty."</Quote>
          </Container>
        </ContentColumn>
      </ContainerPage>
    </div>
  );
}

export default IntroNaturalDiamond;
