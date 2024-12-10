import React from 'react';
import { motion } from 'framer-motion';

const FAQsSection: React.FC = () => {
  return (
    <motion.div className="mt-8 p-6 bg-gray-50 rounded-lg shadow-lg transition-transform hover:scale-105" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <h2 className="text-4xl font-bold mb-4 text-gray-800">FAQs</h2>
      <p className="text-gray-700 mb-4">
        Have questions? Check out our frequently asked questions to learn more about hiring freelancers.
      </p>
    </motion.div>
  );
};

export default FAQsSection;
