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
  height: 700px;
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

function IntroLabDiamond() {
  return (
    <div>
      <Navbar />
      <ContainerPage>
        <ImageColumn>
          <StyledImage
            src="src/assets/night-diamond-royalty-free-image-1695311139.jpg"
            alt="Lab-created diamonds"
          />
        </ImageColumn>
        <ContentColumn>
          <Container>
            <Title>Introduction to Lab-Created Diamonds</Title>
            <Paragraph>
              Lab-created diamonds, also known as synthetic or cultured
              diamonds, are produced in controlled laboratory environments using
              advanced technological processes that mimic the natural conditions
              under which diamonds form in the Earth's mantle.
            </Paragraph>
            <Subtitle>Key Characteristics of Lab-Created Diamonds</Subtitle>
            <List>
              <ListItem>
                <strong>Composition:</strong> Lab-created diamonds have the same
                chemical composition (carbon atoms) and crystal structure as
                natural diamonds.
              </ListItem>
              <ListItem>
                <strong>Origin:</strong> Unlike natural diamonds that form over
                billions of years, lab-created diamonds are created within a
                matter of weeks to months.
              </ListItem>
              <ListItem>
                <strong>Quality:</strong> High-quality lab-created diamonds
                exhibit the same hardness, brilliance, and fire as natural
                diamonds.
              </ListItem>
              <ListItem>
                <strong>Sustainability:</strong> Lab-created diamonds are often
                considered more environmentally friendly compared to mining
                natural diamonds.
              </ListItem>
              <ListItem>
                <strong>Uses:</strong> Lab-created diamonds are used in jewelry,
                technology, and industrial applications.
              </ListItem>
            </List>
            <Paragraph>
              Lab-created diamonds offer a sustainable and ethical alternative
              to natural diamonds while maintaining the beauty and durability
              that make diamonds so desirable.
            </Paragraph>
            <Quote>
              "Lab-created diamonds are crafted with precision and innovation
              for a sustainable future."
            </Quote>
          </Container>
        </ContentColumn>
      </ContainerPage>
    </div>
  );
}

export default IntroLabDiamond;
