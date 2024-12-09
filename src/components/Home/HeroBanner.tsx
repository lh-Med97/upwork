import React from 'react';

const HeroBanner: React.FC = () => {
  return (
    <div className="relative cursor-animation  min-h-screen  bg-gray-600 flex items-center justify-center text-white">
      <video className="absolute top-0 left-0 w-full h-full object-cover opacity-20 bg-green-600" autoPlay loop muted style={{ opacity: 0.1 }}>
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="bg-black bg-opacity-70 p-5 w-full h-full flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold mb-4" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>Welcome to Upwork Clone</h1>
        <p className="text-lg mb-6" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>Find the best freelancers for your projects.</p>
        <p className="text-sm mb-4">Your success starts here!</p>
        <div className="space-x-4">
          <button className="bg-white text-green-600 px-6 py-3 rounded hover:bg-gray-200 transition duration-300">Get Started</button>
          <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition duration-300">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
