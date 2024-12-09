// import React from 'react';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { MagnifyingGlassIcon, BellIcon, UserCircleIcon } from '@heroicons/react/24/solid';

// const Navbar: React.FC = () => {
//   return (
//     <nav className="bg-white shadow-sm">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex">
//             {/* Logo */}
//             <div className="flex-shrink-0 flex items-center">
//               <Link to="/">
//                 <img 
//                   className="h-8 w-auto" 
//                   src="/upwork-logo.svg" 
//                   alt="Upwork Logo" 
//                 />
//               </Link>
//             </div>

//             {/* Search Bar */}
//             <div className="ml-6 flex items-center flex-1">
//               <div className="relative w-full">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
//                 </div>
//                 <input
//                   type="text"
//                   placeholder="Search for jobs, freelancers"
//                   className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-upwork-green focus:border-upwork-green"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Right side icons */}
//           <div className="ml-6 flex items-center space-x-4">
//             <motion.button 
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               className="text-gray-400 hover:text-gray-600"
//             >
//               <BellIcon className="h-6 w-6" />
//             </motion.button>

//             <motion.button 
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               className="text-gray-400 hover:text-gray-600"
//             >
//               <UserCircleIcon className="h-8 w-8" />
//             </motion.button>

//             <Link 
//               to="/post-job" 
//               className="bg-upwork-green text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
//             >
//               Post a Job
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-green-600">Upwork</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="/find-jobs" className="text-gray-700 hover:text-blue-600">Find Jobs</a>
          <a href="#why-upwork" className="text-gray-700 hover:text-green-600">
            Why Upwork
          </a>
          <a href="#resources" className="text-gray-700 hover:text-green-600">
            Resources
          </a>
        </nav>

        {/* Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-gray-700 hover:text-green-600">Log In</button>
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="px-4 py-4 space-y-2">
            <a href="/find-jobs" className="block text-gray-700 hover:text-blue-600">
              Find Jobs
            </a>
            <a href="#why-upwork" className="block text-gray-700 hover:text-green-600">
              Why Upwork
            </a>
            <a href="#resources" className="block text-gray-700 hover:text-green-600">
              Resources
            </a>
          </nav>
          <div className="px-4 py-4 border-t border-gray-200">
            <button className="block w-full text-left text-gray-700 hover:text-green-600 mb-2">
              Log In
            </button>
            <button className="block w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;