import React from 'react';

const JobList: React.FC = () => {
  const jobs = [
    { id: 1, title: 'Frontend Developer', company: 'ABC Corp', location: 'Remote' },
    { id: 2, title: 'Product Manager', company: 'XYZ Ltd.', location: 'San Francisco, CA' },
    { id: 3, title: 'UX Designer', company: 'DesignWorks', location: 'New York, NY' },
  ];
 
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Job Listings</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {jobs.map(job => (
          <div key={job.id} className="border border-gray-200 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
            <h3 className="font-semibold text-lg text-gray-800">{job.title}</h3>
            <p className="text-gray-600 mt-2">Company: {job.company}</p>
            <p className="text-gray-500 mt-1">Location: {job.location}</p>
            <button className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 mt-4 transition duration-300 ease-in-out">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;