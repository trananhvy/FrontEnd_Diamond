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

function OverviewForGIACertificateCheck() {
  return (
    <div>
      <Navbar />
      <PageContainer>
        <Section>
          <SectionTitle>Overview of GIA Diamond Certificate Check</SectionTitle>
          <SectionParagraph>
            The GIA (Gemological Institute of America) diamond certificate is a
            trusted document that provides detailed information about a
            diamond's characteristics and quality. Here's what you need to know
            about verifying a diamond using its GIA certificate ID:
          </SectionParagraph>
        </Section>

        <Section>
          <SectionTitle>Understanding GIA Certificate Details</SectionTitle>

          <Section>
            <SectionTitle>1. Certificate ID</SectionTitle>
            <SectionParagraph>
              Each GIA certificate includes a unique ID that can be used to
              verify the diamond's authenticity and details online. This ID is
              essential for accessing the diamond's grading report and
              confirming its attributes.
            </SectionParagraph>
          </Section>

          <Section>
            <SectionTitle>2. Grading Report</SectionTitle>
            <SectionParagraph>
              The GIA grading report provides comprehensive information about
              the diamond's 4 Cs (Carat, Cut, Color, Clarity), as well as other
              relevant characteristics such as fluorescence and proportions.
              Reviewing this report ensures transparency and accuracy in diamond
              assessment.
            </SectionParagraph>
          </Section>

          <Section>
            <SectionTitle>3. Verification Process</SectionTitle>
            <SectionParagraph>
              To verify a diamond using its GIA certificate ID:
              <ul>
                <li>Visit the official GIA website or use their mobile app.</li>
                <li>Enter the certificate ID into the verification tool.</li>
                <li>Access the diamond's detailed grading information.</li>
                <li>
                  Confirm the diamond's attributes match the provided report.
                </li>
              </ul>
              This process allows buyers, sellers, and jewelers to authenticate
              diamonds with confidence.
            </SectionParagraph>
          </Section>

          <Section>
            <SectionTitle>4. Importance of GIA Certification</SectionTitle>
            <SectionParagraph>
              Diamonds with GIA certificates are valued for their authenticity
              and quality assurance. The GIA is renowned for its unbiased
              grading standards and rigorous evaluation process, providing peace
              of mind to consumers and industry professionals alike.
            </SectionParagraph>
          </Section>
        </Section>

        <Section>
          <SectionTitle>Conclusion</SectionTitle>
          <SectionParagraph>
            Verifying a diamond's GIA certificate ID ensures transparency and
            reliability in diamond transactions. By understanding the
            certificate details and utilizing the verification process,
            stakeholders can make informed decisions based on accurate diamond
            information.
          </SectionParagraph>
        </Section>
      </PageContainer>
    </div>
  );
}

export default OverviewForGIACertificateCheck;
