import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../../components/Navbar/Navbar";
import { Button, Container as BootstrapContainer } from "react-bootstrap";

// Styled components cho giao diện mới
const Container = styled.div`
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 15px;
  padding: 20px;
  margin-top: 90px;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 20px;
  margin-top: 0px;
`;

const Title = styled.h2`
  color: #333;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 20px;
  line-height: 1.6;
  color: #666;
  margin-bottom: 20px;
`;

const Highlight = styled.span`
  color: #007bff;
  font-weight: 500;
  font-size: 25px;
`;

const StyledList = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
  margin-bottom: 20px;
  padding: 0;

  li {
    margin: 0 10px;
  }

  button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const ButtonContent = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

const ImageContainer = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;

const Img = styled.img`
  width: 90%;
`;

const MainImage = styled.img`
  width: 100%;
  margin-top: 40px;
`;

const CenteredContent = styled.div`
  text-align: left;
`;

// Define images for each content type
const contentImages = {
  cut: "https://www.brilliance.com/front/img/diamond-shape-icon.843c0bfa.jpg",
  color: "https://www.brilliance.com/front/img/diamond-color-icon.c000e72e.jpg",
  clarity:
    "https://www.brilliance.com/front/img/diamond-clarity-icon.941f7067.jpg",
  carat: "https://www.brilliance.com/front/img/tmp-style-04-4.1f88a4a5.jpg", // Replace with appropriate image URL
};

// Component chính
function OverviewForEducation() {
  const [content, setContent] = useState("");
  const [imgContent, setImgContent] = useState("");
  const handleButtonClick = (type) => {
    switch (type) {
      case "cut":
        setContent(
          `Diamonds are known for their unmistakable sparkle. They are often associated with engagements and special occasions, however they can be incorporated into just about any situation. Children have been raised to think diamonds are a symbol of wealth and class. This is most likely because they can be very expensive! They truly are one of nature's most prized possessions. However, without being polished and cut, this precious stone is somewhat ordinary. Diamonds are made deep within the earth under extreme temperatures and pressure, so it is only fitting that they are not very pretty upon their ascent to the earth's surface. The cut of a diamond determines exactly how much twinkle you will see.
When stone cutters first realized diamonds will sparkle more depending on the manner in which they are cut, they embarked on a journey to find the best way to showcase this stone. After years of trial and error, they settled on one design: The ideal cut. This cut consists of 58 facets and maximizes the brilliance and sparkle every diamond is capable of having. Having an established jeweler cut your diamond can mean the difference between having a great ring and having the most perfect ring anyone has ever seen!
`
        );
        setImgContent(contentImages.cut);
        break;
      case "color":
        setContent(
          `Diamonds can come in many colors other than your popular clear or white variety. These colors can positively or negatively affect the value of your stone. Understanding why diamonds are different colors will enable you to make an educated decision as to which one you should buy. At the end of the day it is all a matter of preference, but with knowledge comes the power to make an educated and informed decision pertaining to your next diamond purchase.
The scale that grades the color of diamonds ranges from D-Z. A diamond with the grade of D would mean it is colorless and worth more than the subsequent letters. A diamond graded as Z would have visible amounts of color. Although colorless diamonds are preferred by some, colored diamonds are not only increasing in popularity, but also in price. The color of your next diamond is strictly up to you. You do not have to succumb to society's standards when choosing your diamond's color. This can be the one time in which being unique can be a really great thing! Whether you choose a white diamond, black one or anything in between, it will forever be cherished by its recipient.
D-F: Absolutely colorless. This is the highest color grade and quite rare.
G-J: Near to colorless. These may appear colorless when mounted in white gold or platinum.
K-M: Diamonds in this category have a visible yellow or brownish tinge. These diamonds are not generally recommended for engagement rings and where large-sized stones are appropriate.`
        );
        setImgContent(contentImages.color);
        break;
      case "clarity":
        setContent(
          `Diamond clarity can be defined as the existence of imperfections on the inside and outside of the stone. Most of these flaws are not visible to the naked eye. It takes a professional jeweler to detect these flaws and grade the diamond accordingly.
Internal imperfections in the diamond are called inclusions while surface imperfections are called blemishes. The flaws diminish the value of the diamond. Everyone seeks a completely flawless diamond but they are very rare. As a result, they are very expensive. Since diamonds are formed deep within the earth's mantle at exceptionally high temperatures, it only makes sense that most of the time they can possess numerous flaws. Before being polished and cut, diamonds are actually pretty unimpressive. It takes a lot of work to dress these stones up to the gorgeous diamonds we are used to seeing on a variety of jewelry. Since most people cannot afford a flawless diamond, it is likely you will end up with a diamond that has flaws. This is completely fine because most imperfections are not visible to the naked eye. Some people may even prefer flawed diamonds because they are more affordable and no one will know that it is not absolutely perfect.`
        );
        setImgContent(contentImages.clarity);
        break;
      case "carat":
        setContent(
          `Carat weight is the term used to reference the weight of a diamond. It is typically thought that the larger the carat weight, the more valuable the diamond. There can be an exception if the diamond's clarity has been significantly compromised. It is safe to say that two diamonds rated similarly on the clarity can be more expensive as the carat weight of the stone increases. This is a key factor to remember when choosing the right diamond for you. Figuring out your budget will greatly narrow down which diamonds are affordable.
There are number of factors to keep in mind when choosing a diamond. You want to be aware of the recipient's personal preference, finger size, the type of setting it will be placed in and your budget. Even if your budget is not incredibly large, there are more than enough options for you to consider. Keep in mind that bigger is not always necessarily better. A ring that is too big can get in the way and possibly become damaged. Above all, your lady should fall in love with the ring the minute she sees it. That should not be an insurmountable task considering she has already fallen in love with you.`
        );
        setImgContent(contentImages.carat);
        break;
      default:
        setContent("");
    }
  };

  return (
    <Container>
      <Navbar />
      <BootstrapContainer>
        <FlexContainer>
          <div style={{ width: "50%" }}>
            <div>
              <Title>How to Choose a Diamond</Title>
              <Paragraph>
                Choosing the right diamond involves considering several factors
                to ensure you get the best quality stone for your budget. Here
                are some tips on what to look for:
              </Paragraph>
              <ul style={{ fontSize: "20px" }}>
                <li>
                  <strong>Carat Weight:</strong> While larger diamonds are often
                  more expensive, the carat doesn't guarantee a better quality
                  diamond. It's important to balance size with other factors
                  like cut and clarity.
                </li>
                <li>
                  <strong>Cut:</strong> The cut of a diamond affects its sparkle
                  and brilliance. Look for a well-proportioned diamond that
                  maximizes light reflection.
                </li>
                <li>
                  <strong>Color:</strong> Most diamonds have slight color
                  tinting. For white diamonds, color grades range from D
                  (colorless) to Z (light yellow). Higher color grades are more
                  rare and thus more expensive.
                </li>
                <li>
                  <strong>Clarity:</strong> Diamonds can have internal flaws
                  called inclusions. The fewer inclusions a diamond has, the
                  higher its clarity grade and the more valuable it is.
                </li>
              </ul>
              <Paragraph>
                Remember, the perfect diamond is one that fits your personal
                style and budget. Educating yourself on these factors will help
                you make an informed decision when purchasing a diamond.
              </Paragraph>
            </div>
          </div>
          <ImageContainer>
            <Img src="https://www.kingfursandfinejewelry.com/images/diamond-diagram-01.jpg" />
          </ImageContainer>
        </FlexContainer>
        <MainImage src="https://www.kingfursandfinejewelry.com/images/Diamond-Shapes.jpg" />
        <StyledList>
          <li>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => handleButtonClick("cut")}
            >
              Diamond Cut
            </Button>
          </li>
          <li>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => handleButtonClick("color")}
            >
              Diamond Color
            </Button>
          </li>
          <li>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => handleButtonClick("clarity")}
            >
              Diamond Clarity
            </Button>
          </li>
          <li>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => handleButtonClick("carat")}
            >
              Diamond Carat Weight
            </Button>
          </li>
        </StyledList>
        <ButtonContent>
          {content && (
            <CenteredContent>
              <div>
                <MainImage src={imgContent} />
                <Paragraph>{content}</Paragraph>
              </div>
            </CenteredContent>
          )}
        </ButtonContent>
      </BootstrapContainer>
    </Container>
  );
}

export default OverviewForEducation;
