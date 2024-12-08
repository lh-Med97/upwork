import React from 'react';
import { motion } from 'framer-motion';
import { 
  BriefcaseIcon, 
  CodeBracketIcon, 
  ChartBarIcon 
} from '@heroicons/react/24/solid';

const featuredProjects = [
  {
    title: 'Web Development',
    description: 'Build scalable web applications with modern technologies',
    icon: CodeBracketIcon,
    color: 'text-blue-500'
  },
  {
    title: 'Design & Branding',
    description: 'Create stunning visual identities for businesses',
    icon: ChartBarIcon,
    color: 'text-purple-500'
  },
  {
    title: 'Business Consulting',
    description: 'Strategic advice for growth and optimization',
    icon: BriefcaseIcon,
    color: 'text-green-500'
  }
];

const FeaturedProjects: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Explore Top Project Categories
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Find the perfect project or talent across diverse domains
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div 
              key={index}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)"
              }}
              className="bg-gray-50 p-6 rounded-lg text-center transition-all"
            >
              <div className="flex justify-center mb-4">
                <project.icon 
                  className={`h-16 w-16 ${project.color}`} 
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
