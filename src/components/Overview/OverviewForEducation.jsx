import React from "react";
import styled from "styled-components";
import Navbar from "../../components/Navbar/Navbar";
const PageContainer = styled.div`
  background-color: #f0f4f8;
  padding: 20px;
  min-height: 100vh;
  margin-top: 100px;
  font-family: "Arial", sans-serif;
`;

const Section = styled.div`
  margin: 20px 0;
  padding: 20px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-5px);
  }
`;

const SectionTitle = styled.h2`
  color: #2c3e50;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  font-family: "Georgia", serif;
  transition: color 0.3s;
  &:hover {
    color: #2980b9;
  }
`;

const SectionParagraph = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #34495e;
  font-family: "Verdana", sans-serif;
  transition: color 0.3s;
  &:hover {
    color: #16a085;
  }
`;

const Highlight = styled.span`
  color: #e74c3c;
  font-weight: bold;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
`;

function OverviewForEducation() {
  return (
    <div>
      <Navbar />
      <PageContainer>
        <Section>
          <SectionTitle>Overview of Diamond Education</SectionTitle>
          <SectionParagraph>
            Diamond education is essential for anyone interested in
            understanding the characteristics, value, and quality of diamonds.
            Whether you are a consumer, jeweler, or enthusiast, knowing about
            diamonds empowers you to make informed decisions. Here's a
            comprehensive overview of diamond education:
          </SectionParagraph>
        </Section>

        <Section>
          <SectionTitle>Understanding Diamonds</SectionTitle>

          <Section>
            <SectionTitle>1. Diamond Formation and Composition</SectionTitle>
            <SectionParagraph>
              Diamonds are formed deep within the Earth's mantle under high
              pressure and temperature. They are composed of carbon atoms
              arranged in a crystal structure, making them the hardest natural
              substance known.
            </SectionParagraph>
          </Section>

          <Section>
            <SectionTitle>2. The 4 Cs of Diamonds</SectionTitle>
            <SectionParagraph>
              The 4 Cs - Carat, Cut, Color, and Clarity - are the universal
              standards used to evaluate and grade diamonds:
            </SectionParagraph>
            <SectionParagraph>
              - <Highlight>Carat:</Highlight> Measures the weight and size of
              the diamond.
            </SectionParagraph>
            <SectionParagraph>
              - <Highlight>Cut:</Highlight> Refers to the diamond's proportions,
              symmetry, and polish, influencing its brilliance and sparkle.
            </SectionParagraph>
            <SectionParagraph>
              - <Highlight>Color:</Highlight> Grades range from colorless (D) to
              light yellow (Z). Colorless diamonds are the most valuable.
            </SectionParagraph>
            <SectionParagraph>
              - <Highlight>Clarity:</Highlight> Describes the presence of
              imperfections or inclusions within the diamond. Flawless diamonds
              have no visible flaws under 10x magnification.
            </SectionParagraph>
          </Section>

          <Section>
            <SectionTitle>3. Diamond Shapes and Cuts</SectionTitle>
            <SectionParagraph>
              Diamonds come in various shapes (e.g., round, princess, emerald)
              and cuts that affect their appearance and value. Round diamonds
              are the most popular due to their optimal light performance.
            </SectionParagraph>
          </Section>

          <Section>
            <SectionTitle>4. Diamond Certification</SectionTitle>
            <SectionParagraph>
              Certified diamonds are evaluated and graded by independent
              gemological laboratories (e.g., GIA, IGI, AGS). These certificates
              provide detailed information about a diamond's quality and ensure
              transparency in the diamond trade.
            </SectionParagraph>
          </Section>

          <Section>
            <SectionTitle>
              5. Ethical and Environmental Considerations
            </SectionTitle>
            <SectionParagraph>
              Awareness of ethical mining practices and the environmental impact
              of diamond mining is crucial. Lab-grown diamonds offer a
              sustainable and ethical alternative to mined diamonds.
            </SectionParagraph>
          </Section>
        </Section>

        <Section>
          <SectionTitle>Conclusion</SectionTitle>
          <SectionParagraph>
            Diamond education equips individuals with the knowledge needed to
            appreciate, evaluate, and responsibly engage with diamonds. Whether
            buying a diamond engagement ring or simply learning about these
            precious gems, understanding diamonds enhances the overall
            experience.
          </SectionParagraph>
        </Section>
      </PageContainer>
    </div>
  );
}

export default OverviewForEducation;
