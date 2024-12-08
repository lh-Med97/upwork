import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroBanner: React.FC = () => {
  return (
    <div className="relative bg-upwork-green text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold sm:text-5xl md:text-6xl"
        >
          Find Great Work
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-3 max-w-md mx-auto text-lg text-white/90 sm:text-xl md:mt-5 md:max-w-3xl"
        >
          Connect with top freelancers and businesses. Get quality work done flexibly and securely.
        </motion.p>
        
        <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Link
              to="/signup/freelancer"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-upwork-green bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10"
            >
              I'm a Freelancer
            </Link>
            <Link
              to="/signup/client"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-upwork-green/80 hover:bg-upwork-green/90 md:py-4 md:text-lg md:px-10"
            >
              I'm Hiring
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
