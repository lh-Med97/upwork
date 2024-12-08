import React from 'react';
import HeroBanner from '../components/Home/HeroBanner';
import FeaturedProjects from '../components/Home/FeaturedProjects';
import Testimonials from '../components/Home/Testimonials';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroBanner />
      <FeaturedProjects />
      <Testimonials />
    </div>
  );
};

export default HomePage;
