import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar";

const Container = styled.div`
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 15px;
`;

const Content = styled.div`
  margin-top: 100px;
  text-align: center;
`;

const Line = styled.div`
  width: 30%;
  height: 2px;
  background-color: white;
  margin: 20px 0;
`;

const Paragraph = styled.p`
  font-size: 25px;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const Button = styled.button`
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
`;

const ImageContainer = styled.div`
  position: relative;
  margin-top: 50px;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  max-height: 500px;
  object-fit: cover;
`;

const OverlayText = styled.div`
  position: absolute;
  top: 50%;
  left: 35%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 24px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
`;

const Title = styled.h2`
  color: white;
  font-size: 35px;
  font-weight: bold;
`;

const Note = styled.div`
  background-color: gba(255, 255, 255, 0.9) r; /* Tăng độ tương phản */
  color: black; /* Tăng độ tương phản */
  border-radius: 10px; /* Tăng độ bo tròn để trông mềm mại hơn */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 255, 255, 0.6); /* Thêm hiệu ứng glow */
  max-width: 700px;
  margin-right: 20px;
  padding: 20px; /* Thêm padding để tạo không gian bên trong */
  font-size: 1.2em; /* Tăng kích thước chữ */
  text-align: center; /* Căn giữa văn bản */
  position: relative; /* Để sử dụng z-index */
  z-index: 1000; /* Đảm bảo nó nổi trên các phần tử khác */
`;

function WhyCertificateDiamond() {
  return (
    <div>
      <Navbar />
      <ImageContainer>
        <Img
          src="https://vinhcara.com/images/1658477545521mom-GIA%20certified%20diamonds.webp"
          alt="Certificate Diamond"
        />
        <OverlayText>
          <div>
            <Title>Certified Diamond</Title>
            <Line />
            <Paragraph>
              Skip the jewelry store (and their high markups) and explore our
              extensive collection of certified diamonds.
            </Paragraph>
            <Button>Learn More</Button>
          </div>
        </OverlayText>
      </ImageContainer>
      <Container>
        <Content>
          <div>
            <h1>What are certified diamonds?</h1>
            <Paragraph>
              Certified diamonds are diamonds that have been assessed and graded
              by a reputable gemological laboratory based on the 4C's—cut,
              color, clarity, and carat weight. When shopping for a diamond, it
              is highly recommended to purchase a certified diamond to ensure
              that you are paying the right price based on the actual value of
              the diamond and to guarantee that you are getting a real diamond.
            </Paragraph>
            <div style={{ display: "flex" }}>
              <div style={{ width: "100%" }}>
                <Note style={{ width: "100%" }}>
                  <h1>Diamond Certificate vs. Diamond Appraisal</h1>
                  <Paragraph>
                    Some retailers will pass off a diamond appraisal as a
                    diamond certificate when there is a significant difference
                    between the two documents. A diamond certificate is an
                    unbiased analysis of the stone's quality prepared by a
                    gemological laboratory. It provides information on the
                    diamond quality and the physical characteristics of the
                    diamond. A diamond appraisal estimates a diamond's worth
                    based on the current market conditions and quality. It is
                    typically prepared by the seller of the diamond to denote
                    the estimated value for insurance purposes.
                  </Paragraph>
                </Note>
              </div>
              <div>
                <img
                  src="src/assets/6360e7326e64cf02efa09800b70990af (1).avif"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </div>
          <div>
            <h1>Purchasing Certified Diamonds</h1>
            <Paragraph>
              When purchasing certified diamonds, make sure that the diamond
              certification is from a third-party laboratory rather than one
              associated with the store, jeweler, or diamond wholesaler, who may
              offer a biased opinion to facilitate the sale. Also, verify that
              the third-party laboratory has a history of stringent grading
              practices and that they've been in business long enough to
              establish a solid reputation in the jewelry industry. Brilliance
              recommends the following major lab entities, in order of
              preference: GIA (Gemological Institute of America), AGS (American
              Gem Society), IGI (International Gemological Institute), EGL
              (European Gemological Laboratories), HRD (Hoge Raad voor Diamant,
              translated as Diamond High Council).
            </Paragraph>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ width: "100%" }}>
                <Note style={{ width: "100%" }}>
                  <h1>Diamond Certificate vs. Diamond Appraisal</h1>
                  <Paragraph>
                    Some retailers will pass off a diamond appraisal as a
                    diamond certificate when there is a significant difference
                    between the two documents. A diamond certificate is an
                    unbiased analysis of the stone's quality prepared by a
                    gemological laboratory. It provides information on the
                    diamond quality and the physical characteristics of the
                    diamond. A diamond appraisal estimates a diamond's worth
                    based on the current market conditions and quality. It is
                    typically prepared by the seller of the diamond to denote
                    the estimated value for insurance purposes.
                  </Paragraph>
                </Note>
              </div>
              <div style={{ width: "100%" }}>
                <img
                  src="https://www.gemsforeveryone.com/wp-content/uploads/2023/06/Edu-GIA-Certified-Diamonds.jpg"
                  alt="Diamond Certification"
                  style={{ width: "100%", height: "100%", marginLeft: "-67px" }}
                />
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <img
                src="https://www.gia.edu/images/Diamond-Grading-Report-552x311.jpg"
                style={{ width: "100%" }}
                alt="Diamond Grading Report 1"
              />
              <img
                src="https://www.gia.edu/images/Diamond-Grading-Report-552x311.jpg"
                style={{ width: "100%" }}
                alt="Diamond Grading Report 2"
              />
            </div>
          </div>
        </Content>
      </Container>
    </div>
  );
}

export default WhyCertificateDiamond;
