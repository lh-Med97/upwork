import React from 'react';
import { motion } from 'framer-motion';

const FeaturedTalentSection: React.FC = () => {
  return (
    <motion.div className="mt-8 p-6 bg-gray-50 rounded-lg shadow-lg transition-transform hover:scale-105" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <h2 className="text-4xl font-bold mb-4 text-gray-800">Featured Talent</h2>
      <p className="text-gray-700 mb-4">
        Check out some of our top-rated freelancers who can help you with your projects.
      </p>
    </motion.div>
  );
};

export default FeaturedTalentSection;
