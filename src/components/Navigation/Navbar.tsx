import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MagnifyingGlassIcon, BellIcon, UserCircleIcon } from '@heroicons/react/24/solid';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/">
                <img 
                  className="h-8 w-auto" 
                  src="/upwork-logo.svg" 
                  alt="Upwork Logo" 
                />
              </Link>
            </div>

            {/* Search Bar */}
            <div className="ml-6 flex items-center flex-1">
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search for jobs, freelancers"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-upwork-green focus:border-upwork-green"
                />
              </div>
            </div>
          </div>

          {/* Right side icons */}
          <div className="ml-6 flex items-center space-x-4">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-gray-600"
            >
              <BellIcon className="h-6 w-6" />
            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-gray-600"
            >
              <UserCircleIcon className="h-8 w-8" />
            </motion.button>

            <Link 
              to="/post-job" 
              className="bg-upwork-green text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
            >
              Post a Job
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
