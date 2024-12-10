import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import EnterpriseFeatures from '../components/EnterpriseFeatures';
import EnterpriseTestimonials from '../components/EnterpriseTestimonials';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const EnterprisePage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50"
    >
      <Container>
        <h1 className="text-4xl font-bold mb-8">Enterprise Solutions</h1>
        <p className="text-gray-600 mb-4">
          Discover how our enterprise solutions can help your business scale and succeed.
        </p>
        <EnterpriseFeatures />
        <EnterpriseTestimonials />
        <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors duration-200">
          Learn More
        </button>
      </Container>
    </motion.div>
  );
};

export default EnterprisePage;
