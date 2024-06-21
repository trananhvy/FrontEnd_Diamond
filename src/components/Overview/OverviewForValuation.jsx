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

function OverviewForValuation() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <PageContainer>
        <Section>
          <SectionTitle>Overview of Diamond Valuation</SectionTitle>
          <SectionParagraph>
            Diamond valuation involves assessing various factors to determine
            the monetary worth of a diamond. Whether you're selling, insuring,
            or buying a diamond, understanding these valuation criteria is
            crucial.
          </SectionParagraph>
        </Section>

        <Section>
          <SectionTitle>Key Valuation Criteria</SectionTitle>

          <Section>
            <SectionTitle>
              1. The 4 Cs: Carat, Cut, Color, and Clarity
            </SectionTitle>
            <SectionParagraph>
              <Highlight>Carat:</Highlight> The weight of the diamond, measured
              in carats, affects its value. Larger diamonds generally command
              higher prices, but other factors must also be considered.
            </SectionParagraph>
            <SectionParagraph>
              <Highlight>Cut:</Highlight> The diamond's cut influences its
              brilliance and fire. A well-cut diamond reflects light beautifully
              and is more valuable than a poorly cut one.
            </SectionParagraph>
            <SectionParagraph>
              <Highlight>Color:</Highlight> Diamonds are graded from D
              (colorless) to Z (light yellow or brown). Colorless diamonds are
              more valuable due to their rarity.
            </SectionParagraph>
            <SectionParagraph>
              <Highlight>Clarity:</Highlight> Clarity measures the presence of
              internal flaws (inclusions) and surface irregularities
              (blemishes). The clearer the diamond, the higher its value.
            </SectionParagraph>
          </Section>

          <Section>
            <SectionTitle>2. Diamond Certification</SectionTitle>
            <SectionParagraph>
              Certified diamonds come with a grading report from independent
              laboratories like the Gemological Institute of America (GIA).
              These reports provide an unbiased assessment of the diamond's
              quality, confirming its authenticity and characteristics.
            </SectionParagraph>
          </Section>

          <Section>
            <SectionTitle>3. Market Conditions</SectionTitle>
            <SectionParagraph>
              Diamond prices fluctuate based on market demand, economic factors,
              and supply. Understanding current market trends is essential for
              accurate valuation.
            </SectionParagraph>
          </Section>

          <Section>
            <SectionTitle>4. Appraisal Methods</SectionTitle>
            <SectionParagraph>
              Experienced gemologists use various appraisal methods, including
              comparative sales analysis and cost approach, to determine a
              diamond's fair market value.
            </SectionParagraph>
          </Section>
        </Section>

        <Section>
          <SectionTitle>Conclusion</SectionTitle>
          <SectionParagraph>
            Diamond valuation requires expertise and adherence to industry
            standards. By considering the 4 Cs, certification, market
            conditions, and appraisal methods, you can make informed decisions
            about diamond buying, selling, or insurance.
          </SectionParagraph>
        </Section>
      </PageContainer>
    </div>
  );
}

export default OverviewForValuation;
