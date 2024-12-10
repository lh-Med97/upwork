import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import FAQ from '../components/FAQ';
import HowItWorks from '../components/HowItWorks';

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Flexible Hiring Options</h2>
            <p className="text-gray-600">
              Hire freelancers for short-term projects or long-term engagements, tailored to your needs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Quality Assurance</h2>
            <p className="text-gray-600">
              Benefit from a review system that helps you find top-rated freelancers based on past work.
            </p>
          </div>
        </div>
        <h2 className="text-3xl font-bold mt-10 mb-4">What Our Users Say</h2>
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <p className="text-gray-600 mb-4">"Upwork has transformed the way I hire freelancers. The quality of talent is unmatched!" - Client A</p>
          <p className="text-gray-600">"I found my dream job on Upwork! The platform is easy to use and very supportive." - Freelancer B</p>
        </div>
        <HowItWorks />
        <FAQ />
        <button className="mt-8 bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors duration-200">
          Sign Up Now
        </button>
      </Container>
    </motion.div>
  );
};

export default WhyUpworkPage;
