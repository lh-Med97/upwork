import React from 'react';
import HeroBanner from '../components/Home/HeroBanner';
import FeaturedProjects from '../components/Home/FeaturedProjects';
import Testimonials from '../components/Home/Testimonials';
import JobList  from '../components/Home/JobList';


const HomePage: React.FC = () => {
  return (
    <div>
      <HeroBanner />
      <FeaturedProjects />
      <JobList />
      <Testimonials />
    </div>
  );
};

export default HomePage;
