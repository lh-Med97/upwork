import React, { useState } from 'react';
import styled from 'styled-components';

const FAQContainer = styled.div`
  max-width: 100%;
  margin: 3rem auto;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const FAQItem = styled.div`
  margin-bottom: 2rem;
  border: 1px solid #e2e2e2;
  border-radius: 0.5rem;
  background-color: #fff;
  transition: transform 0.2s;
  margin-top: 2rem;
`;

const FAQTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  padding: 1rem;
`;

const FAQContent = styled.p`
  margin: 0;
  padding: 1rem;
  color: #555;
`;

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQContainer>
      <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
      {[
        { question: "How does payment work on Upwork?", answer: "Payments are securely processed through Upwork, ensuring that both freelancers and clients are protected." },
        { question: "Can I hire freelancers from anywhere in the world?", answer: "Yes, Upwork connects you with freelancers from around the globe." },
        { question: "What if I’m not satisfied with the work?", answer: "You can request revisions or dispute the payment through Upwork’s support system." },
      ].map((faq, index) => (
        <FAQItem key={index}>
          <FAQTitle onClick={() => toggleFAQ(index)}>{faq.question}</FAQTitle>
          {openIndex === index && <FAQContent>{faq.answer}</FAQContent>}
        </FAQItem>
      ))}
    </FAQContainer>
  );
};

export default FAQ;
