import React from 'react';
import styled from 'styled-components';

const TestimonialsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const TestimonialItem = styled.div`
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`;

const EnterpriseTestimonials: React.FC = () => {
  return (
    <TestimonialsContainer>
      <h2 className="text-3xl font-bold mb-4">What Our Enterprise Clients Say</h2>
      <TestimonialItem>
        <p className="text-gray-600 mb-2">"Upwork has transformed our hiring process. The quality of talent is exceptional!" - Client A</p>
      </TestimonialItem>
      <TestimonialItem>
        <p className="text-gray-600 mb-2">"The dedicated account management has made a significant difference in our projects." - Client B</p>
      </TestimonialItem>
      <TestimonialItem>
        <p className="text-gray-600 mb-2">"We appreciate the enhanced security measures that Upwork provides." - Client C</p>
      </TestimonialItem>
    </TestimonialsContainer>
  );
};

export default EnterpriseTestimonials;
