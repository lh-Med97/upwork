import React, { useState } from 'react';


const FindJobs: React.FC = () => {
  const [jobSearch, setJobSearch] = useState<string>('');

  const handleJobSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setJobSearch(e.target.value);
  };

  return (
    <div className="bg-gray-50">
      {/* Navbar */}
      {/* <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-700">Indeed</div>
          <nav className="space-x-6 hidden md:flex">
            <a href="#find-job" className="text-gray-700 hover:text-blue-600">Find Jobs</a>
            <a href="#company" className="text-gray-700 hover:text-blue-600">Company Reviews</a>
            <a href="#salaries" className="text-gray-700 hover:text-blue-600">Salaries</a>
            <a href="#blog" className="text-gray-700 hover:text-blue-600">Blog</a>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-blue-600">Sign In</button>
            <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">Sign Up</button>
          </div>
        </div>
      </header> */}

      {/* Hero Section */}
      <section className="bg-blue-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">Find the right job for you</h1>
          <p className="text-lg text-gray-600 mb-6">
            Millions of people are searching for jobs, salary information, and company reviews.
            Find the job that’s right for you.
          </p>
          <div className="flex justify-center space-x-4">
            <div className="w-full md:w-1/2">
              <input
                type="text"
                placeholder="Job title, keywords, or company"
                value={jobSearch}
                onChange={handleJobSearchChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="w-full md:w-1/4">
              <button className="w-full bg-blue-700 text-white py-3 rounded-md hover:bg-blue-800">
                Find Jobs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Job Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Popular Job Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="border p-6 rounded-md hover:bg-gray-100">
              <h3 className="font-semibold text-lg text-gray-800">Software Engineer</h3>
              <p className="text-gray-600 mt-2">Find software development jobs in your area</p>
            </div>
            <div className="border p-6 rounded-md hover:bg-gray-100">
              <h3 className="font-semibold text-lg text-gray-800">Marketing</h3>
              <p className="text-gray-600 mt-2">Explore marketing roles and positions</p>
            </div>
            <div className="border p-6 rounded-md hover:bg-gray-100">
              <h3 className="font-semibold text-lg text-gray-800">Design</h3>
              <p className="text-gray-600 mt-2">Find creative design opportunities</p>
            </div>
            <div className="border p-6 rounded-md hover:bg-gray-100">
              <h3 className="font-semibold text-lg text-gray-800">Sales</h3>
              <p className="text-gray-600 mt-2">Explore sales and business development roles</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Featured Jobs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {/* Job 1 */}
            <div className="border p-6 rounded-md shadow-md hover:bg-gray-100">
              <h3 className="font-semibold text-lg text-gray-800">Frontend Developer</h3>
              <p className="text-gray-600 mt-2">Company: ABC Corp</p>
              <p className="text-gray-500 mt-1">Location: Remote</p>
              <button className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 mt-4">Apply Now</button>
            </div>
            {/* Job 2 */}
            <div className="border p-6 rounded-md shadow-md hover:bg-gray-100">
              <h3 className="font-semibold text-lg text-gray-800">Product Manager</h3>
              <p className="text-gray-600 mt-2">Company: XYZ Ltd.</p>
              <p className="text-gray-500 mt-1">Location: San Francisco, CA</p>
              <button className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 mt-4">Apply Now</button>
            </div>
            {/* Job 3 */}
            <div className="border p-6 rounded-md shadow-md hover:bg-gray-100">
              <h3 className="font-semibold text-lg text-gray-800">UX Designer</h3>
              <p className="text-gray-600 mt-2">Company: DesignWorks</p>
              <p className="text-gray-500 mt-1">Location: New York, NY</p>
              <button className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 mt-4">Apply Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h5 className="text-white font-bold mb-4">Company</h5>
              <ul className="space-y-2">
                <li>About Us</li>
                <li>Press</li>
                <li>Careers</li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-bold mb-4">Support</h5>
              <ul className="space-y-2">
                <li>Help Center</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-bold mb-4">Follow Us</h5>
              <ul className="space-y-2">
                <li>Facebook</li>
                <li>Twitter</li>
                <li>LinkedIn</li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-bold mb-4">More</h5>
              <ul className="space-y-2">
                <li>Site Map</li>
                <li>Blog</li>
                <li>Community Guidelines</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-8 text-gray-500">
            &copy; 2024 Indeed Clone. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FindJobs;