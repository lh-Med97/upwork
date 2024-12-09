import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const FeaturesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding: 2rem 0;
`;

const FeatureCard = styled(motion.div)`
    background: white;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    
    h3 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        color: #333;
    }

    p {
        color: #666;
        line-height: 1.6;
    }
`;

const Features: React.FC = () => {
    const features = [
        {
            title: 'Global Talent Pool',
            description: 'Access top freelancers from around the world with diverse skills and expertise.'
        },
        {
            title: 'Secure Payments',
            description: 'Our escrow system ensures safe and timely payments for all parties.'
        },
        {
            title: 'Quality Work',
            description: 'Get high-quality deliverables from verified professionals.'
        }
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2 
                    className="text-3xl font-bold text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Why Choose Our Platform?
                </motion.h2>
                <FeaturesGrid>
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            whileHover={{ scale: 1.03 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </FeatureCard>
                    ))}
                </FeaturesGrid>
            </div>
        </section>
    );
};

export default Features;
