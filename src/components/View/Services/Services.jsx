import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import ServiceContent from "../ServiceContent/ServiceContent";

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

function Services() {
  const [menu, setMenu] = useState("services");

  return (
    <>
      <div>
        <Navbar menu={menu} setMenu={setMenu} />
      </div>
      <PageContainer>
        <Section>
          <SectionTitle>Our Diamond Appraisal Services</SectionTitle>
          <SectionParagraph>
            At our diamond appraisal service, we provide expert evaluations of
            both natural diamonds and lab-grown diamonds. Our experienced
            gemologists use state-of-the-art technology and adhere to industry
            standards to ensure accurate and reliable assessments. Whether you
            are looking to buy, sell, or insure a diamond, our comprehensive
            appraisal services will give you the information you need to make
            informed decisions.
          </SectionParagraph>
        </Section>

        <Section>
          <SectionTitle>Comprehensive Evaluation Criteria</SectionTitle>

          <Section>
            <SectionTitle>
              1. The 4 Cs: Carat, Cut, Color, and Clarity
            </SectionTitle>
            <SectionParagraph>
              <Highlight>Carat:</Highlight> Carat weight measures the size of
              the diamond. One carat equals 0.2 grams. Larger diamonds are rarer
              and often more valuable. However, carat weight must be balanced
              with other quality factors.
            </SectionParagraph>
            <SectionParagraph>
              <Highlight>Cut:</Highlight> The cut grade assesses the quality of
              the diamond’s proportions, symmetry, and polish. It affects the
              diamond's brilliance and sparkle. Cut grades range from Excellent
              to Poor. An expertly cut diamond will reflect light beautifully,
              enhancing its aesthetic appeal.
            </SectionParagraph>
            <SectionParagraph>
              <Highlight>Color:</Highlight> Diamonds are graded on a scale from
              D (colorless) to Z (light yellow or brown). Colorless diamonds are
              the most desirable and valuable. Our gemologists evaluate the
              diamond under controlled lighting conditions to determine its
              color grade accurately.
            </SectionParagraph>
            <SectionParagraph>
              <Highlight>Clarity:</Highlight> Clarity measures the presence of
              internal inclusions and external blemishes. Clarity grades range
              from Flawless (no inclusions or blemishes visible under 10x
              magnification) to Included (inclusions and/or blemishes visible to
              the naked eye). Each diamond is meticulously examined under
              magnification to assess its clarity.
            </SectionParagraph>
          </Section>

          <Section>
            <SectionTitle>2. Certification</SectionTitle>
            <SectionParagraph>
              Certified diamonds come with an independent evaluation report from
              renowned gemological laboratories such as the Gemological
              Institute of America (GIA), the International Gemological
              Institute (IGI), and the American Gem Society (AGS). These
              certificates provide an unbiased and detailed assessment of the
              diamond’s characteristics.
            </SectionParagraph>
          </Section>

          <Section>
            <SectionTitle>3. Fluorescence</SectionTitle>
            <SectionParagraph>
              Fluorescence refers to the diamond's ability to emit a visible
              light when exposed to ultraviolet (UV) light. While fluorescence
              can affect the appearance and value of a diamond, its impact
              varies. Our experts assess the diamond's fluorescence and explain
              how it influences the overall value.
            </SectionParagraph>
          </Section>

          <Section>
            <SectionTitle>4. Shape</SectionTitle>
            <SectionParagraph>
              The shape of the diamond (round, princess, emerald, etc.)
              influences its appearance and market value. Round brilliant
              diamonds are the most popular and typically command higher prices
              due to their superior light performance. Other shapes are
              evaluated based on their cut quality and appeal.
            </SectionParagraph>
          </Section>
        </Section>

        <Section>
          <SectionTitle>Advanced Technology and Techniques</SectionTitle>
          <SectionParagraph>
            Our gemologists employ advanced tools and technology to perform
            precise measurements and analyses. This includes:
          </SectionParagraph>
          <SectionParagraph>
            - <Highlight>Microscopic Examination:</Highlight> To detect and
            evaluate inclusions and blemishes.
          </SectionParagraph>
          <SectionParagraph>
            - <Highlight>Spectrophotometry:</Highlight> For accurate color
            grading.
          </SectionParagraph>
          <SectionParagraph>
            - <Highlight>Laser Inscription Review:</Highlight> To verify any
            inscriptions and certification details.
          </SectionParagraph>
          <SectionParagraph>
            - <Highlight>Proportions Analysis:</Highlight> Using computerized
            tools to measure the diamond’s cut proportions accurately.
          </SectionParagraph>
        </Section>

        <Section>
          <SectionTitle>Market Analysis and Valuation</SectionTitle>
          <SectionParagraph>
            In addition to the 4 Cs and certification, we consider current
            market conditions, consumer trends, and demand to provide an
            accurate valuation. Our gemologists are well-versed in the latest
            market dynamics and can offer insights into the potential resale
            value of your diamond.
          </SectionParagraph>
        </Section>

        <Section>
          <SectionTitle>Personalized Consultation</SectionTitle>
          <SectionParagraph>
            Every appraisal includes a personalized consultation with one of our
            expert gemologists. We take the time to explain the findings in
            detail, answer any questions, and provide guidance based on your
            specific needs—whether you're buying, selling, or insuring your
            diamond.
          </SectionParagraph>
        </Section>

        <Section>
          <SectionTitle>Ethical and Environmental Considerations</SectionTitle>
          <SectionParagraph>
            For those interested in lab-grown diamonds, we offer evaluations
            that emphasize their ethical and environmental benefits. Lab-grown
            diamonds are identical to natural diamonds in terms of physical,
            chemical, and optical properties but are created with a lower
            environmental impact and no ethical concerns related to mining.
          </SectionParagraph>
        </Section>

        <Section>
          <SectionTitle>Conclusion</SectionTitle>
          <SectionParagraph>
            Our commitment to accuracy, transparency, and customer education
            ensures that you receive a comprehensive and reliable appraisal.
            With our expert evaluations, you can make informed decisions with
            confidence, knowing that you have all the necessary information
            about your diamond's true value.
          </SectionParagraph>
        </Section>

        <ServiceContent />
      </PageContainer>
      <div></div>
    </>
  );
}

export default Services;
