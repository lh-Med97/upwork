import React from 'react';
import { motion } from 'framer-motion';

const CallToActionSection: React.FC = () => {
  return (
    <motion.div className="mt-8 p-6 bg-gray-50 rounded-lg shadow-lg transition-transform hover:scale-105" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <h2 className="text-4xl font-bold mb-4 text-gray-800">Call to Action</h2>
      <p className="text-gray-700 mb-4">
        Ready to find the right talent? Click below to get started!
      </p>
      <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors duration-200 mb-4">
        Start Hiring
      </button>
    </motion.div>
  );
};

export default CallToActionSection;
