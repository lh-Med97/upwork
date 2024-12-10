import React from 'react';
import { motion } from 'framer-motion';

const IntroductionSection: React.FC = () => {
  return (
    <motion.div className="mt-8 p-6 bg-gray-50 rounded-lg shadow-lg transition-transform hover:scale-105" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <h2 className="text-4xl font-bold mb-4 text-gray-800">Introduction</h2>
      <p className="text-gray-700 mb-4">
        Discover how easy it is to find talented freelancers for your projects. Our platform connects you with skilled professionals ready to help you succeed.
      </p>
    </motion.div>
  );
};

export default IntroductionSection;
