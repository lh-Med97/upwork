import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const WhyUpworkPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50"
    >
      <Container>
        <h1 className="text-4xl font-bold mb-8">Why Upwork</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Proven Talent</h2>
            <p className="text-gray-600">
              Access a vast network of skilled professionals, vetted and ready to work.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Safe & Secure</h2>
            <p className="text-gray-600">
              Protected payments and constant support ensure worry-free collaboration.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Global Reach</h2>
            <p className="text-gray-600">
              Connect with talent and clients from around the world.
            </p>
          </div>
        </div>
      </Container>
    </motion.div>
  );
};

export default WhyUpworkPage;
