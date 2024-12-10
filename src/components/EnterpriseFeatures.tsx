import React from 'react';
import styled from 'styled-components';

const FeaturesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const FeatureItem = styled.div`
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`;

const FeatureImage = styled.img`
  width: 100%;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
`;

const EnterpriseFeatures: React.FC = () => {
  return (
    <FeaturesContainer>
      <h2 className="text-3xl font-bold mb-4">Enterprise Solutions</h2>
      <FeatureItem>
        <FeatureImage src="/path/to/customizable-solutions.jpg" alt="Customizable Solutions" />
        <h3 className="text-2xl font-semibold">Customizable Solutions</h3>
        <p>Tailor your projects to meet specific business needs and requirements.</p>
      </FeatureItem>
      <FeatureItem>
        <FeatureImage src="/path/to/account-management.jpg" alt="Dedicated Account Management" />
        <h3 className="text-2xl font-semibold">Dedicated Account Management</h3>
        <p>Get personalized support from our dedicated account managers.</p>
      </FeatureItem>
      <FeatureItem>
        <FeatureImage src="/path/to/security.jpg" alt="Enhanced Security Measures" />
        <h3 className="text-2xl font-semibold">Enhanced Security Measures</h3>
        <p>Ensure your projects are secure with our top-notch security protocols.</p>
      </FeatureItem>
      <FeatureItem>
        <FeatureImage src="/path/to/scalable-talent.jpg" alt="Scalable Talent Pool" />
        <h3 className="text-2xl font-semibold">Scalable Talent Pool</h3>
        <p>Access a vast pool of freelancers that can scale with your business.</p>
      </FeatureItem>
    </FeaturesContainer>
  );
};

export default EnterpriseFeatures;
