import React from 'react';
import styled from 'styled-components';

const HowItWorksContainer = styled.div`
  max-width: 100%;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Step = styled.div`
  margin-bottom: 1.5rem;
  padding: 1rem;
  border: 1px solid #e2e2e2;
  border-radius: 0.5rem;
  background-color: #fff;
  transition: transform 0.2s;
  margin-top: 1rem;

  &:hover {
    transform: scale(1.02);
  }
`;

const StepTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
`;

const StepContent = styled.p`
  margin-top: 0.5rem;
  color: #555;
`;

const HowItWorks: React.FC = () => {
  return (
    <HowItWorksContainer>
      <h2 className="text-3xl font-bold mb-4">How It Works</h2>
      <Step>
        <StepTitle>1. Post a Job</StepTitle>
        <StepContent>
          Describe your project and the skills you need.
        </StepContent>
      </Step>
      <Step>
        <StepTitle>2. Review Proposals</StepTitle>
        <StepContent>
          Browse through freelancer proposals and portfolios.
        </StepContent>
      </Step>
      <Step>
        <StepTitle>3. Hire the Right Talent</StepTitle>
        <StepContent>
          Select the freelancer that best fits your project needs.
        </StepContent>
      </Step>
      <Step>
        <StepTitle>4. Manage Your Project</StepTitle>
        <StepContent>
          Collaborate and communicate directly with your freelancer.
        </StepContent>
      </Step>
    </HowItWorksContainer>
  );
};

export default HowItWorks;
