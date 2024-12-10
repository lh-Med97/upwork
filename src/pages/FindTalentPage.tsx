import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import IntroductionSection from '../components/FindTalentSections/IntroductionSection';
import HowItWorksSection from '../components/FindTalentSections/HowItWorksSection';
import BrowseTalentSection from '../components/FindTalentSections/BrowseTalentSection';
import FeaturedTalentSection from '../components/FindTalentSections/FeaturedTalentSection';
import SuccessStoriesSection from '../components/FindTalentSections/SuccessStoriesSection';
import FAQsSection from '../components/FindTalentSections/FAQsSection';
import CallToActionSection from '../components/FindTalentSections/CallToActionSection';
import ResourcesSection from '../components/FindTalentSections/ResourcesSection';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const FindTalentPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50"
    >
      <Container>
        <h1 className="text-4xl font-bold mb-8">Find Talent</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Post a Job</h2>
            <p className="text-gray-600 mb-4">
              Create a job posting to find the perfect freelancer for your project.
            </p>
            <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors duration-200">
              Post a Job
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Browse Talent</h2>
            <p className="text-gray-600 mb-4">
              Search through our pool of skilled freelancers and find the perfect match.
            </p>
            <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors duration-200">
              Browse Talent
            </button>
          </div>
        </div>
        <IntroductionSection />
        <HowItWorksSection />
        <BrowseTalentSection />
        <FeaturedTalentSection />
        <SuccessStoriesSection />
        <FAQsSection />
        <CallToActionSection />
        <ResourcesSection />
      </Container>
    </motion.div>
  );
};

export default FindTalentPage;
