import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Startup Founder',
    quote: "Upwork helped me find the perfect developer for my project. Incredibly smooth experience!",
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    name: 'Michael Chen',
    role: 'Freelance Designer',
    quote: "I've found amazing clients and built a successful career through this platform.",
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    name: 'Elena Rodriguez',
    role: 'Marketing Consultant',
    quote: "Flexible work, great opportunities, and reliable payments. What more could I ask for?",
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg'
  }
];

const TestimonialCard: React.FC<{testimonial: typeof testimonials[0]}> = ({ testimonial }) => (
  <motion.div 
    whileHover={{ scale: 1.05 }}
    className="bg-white p-6 rounded-lg shadow-md"
  >
    <div className="flex items-center mb-4">
      <img 
        src={testimonial.avatar} 
        alt={testimonial.name} 
        className="w-12 h-12 rounded-full mr-4"
      />
      <div>
        <h3 className="font-bold">{testimonial.name}</h3>
        <p className="text-gray-500 text-sm">{testimonial.role}</p>
      </div>
    </div>
    <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
    <div className="flex">
      {[...Array(testimonial.rating)].map((_, i) => (
        <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
      ))}
    </div>
  </motion.div>
);

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Success Stories
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            See how professionals are transforming their careers
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
