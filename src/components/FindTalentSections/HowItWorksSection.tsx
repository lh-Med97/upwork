import React from 'react';
import { motion } from 'framer-motion';

const HowItWorksSection: React.FC = () => {
  return (
    <motion.div className="mt-8 p-6 bg-gray-50 rounded-lg shadow-lg transition-transform hover:scale-105" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <h2 className="text-4xl font-bold mb-4 text-gray-800">How It Works</h2>
      <p className="text-gray-700 mb-4">
        Follow these simple steps to find the right talent:
      </p>
      <ol className="list-decimal list-inside mb-4 text-gray-700">
        <li>Post a job detailing your project requirements.</li>
        <li>Browse through our extensive talent pool.</li>
        <li>Review applications and select the best candidates.</li>
        <li>Hire and onboard your chosen freelancer.</li>
      </ol>
    </motion.div>
  );
};

export default HowItWorksSection;
