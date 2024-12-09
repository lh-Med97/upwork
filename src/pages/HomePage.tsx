import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import HeroBanner from '../components/Home/HeroBanner';
import Testimonials from '../components/Home/Testimonials';
import JobList from '../components/Home/JobList';
import FeaturedProjects from '../components/Home/FeaturedProjects';

const Section = styled(motion.section)`
    padding: 4rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
`;

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
    
    &:hover {
        transform: translateY(-5px);
    }

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

const SearchSection = styled.div`
    background: linear-gradient(135deg, #14B8A6 0%, #0D9488 100%);
    padding: 3rem 2rem;
    text-align: center;
    color: white;
`;

const SearchInput = styled.input`
    width: 100%;
    max-width: 600px;
    padding: 1rem 1.5rem;
    border-radius: 50px;
    border: none;
    margin: 1rem 0;
    font-size: 1.1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    &:focus {
        outline: none;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }
`;

const Footer = styled.footer`
    padding: 3rem 2rem;
    background-color: #1F2937;
    color: white;
    text-align: center;

    .footer-content {
        max-width: 1200px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
    }
`;

const HomePage: React.FC = () => {
    return (
        <div className="bg-gray-50">
            <HeroBanner />

            {/* Search Section */}
            <SearchSection>
                <h2 className="text-3xl font-bold mb-4">Find Your Next Opportunity</h2>
                <SearchInput 
                    type="text" 
                    placeholder="Search for jobs, skills, or projects..."
                />
            </SearchSection>

            {/* Features Section */}
            <Section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Our Platform?</h2>
                <FeaturesGrid>
                    <FeatureCard whileHover={{ scale: 1.03 }}>
                        <h3>Global Talent Pool</h3>
                        <p>Access top freelancers from around the world with diverse skills and expertise.</p>
                    </FeatureCard>
                    <FeatureCard whileHover={{ scale: 1.03 }}>
                        <h3>Secure Payments</h3>
                        <p>Our escrow system ensures safe and timely payments for all parties.</p>
                    </FeatureCard>
                    <FeatureCard whileHover={{ scale: 1.03 }}>
                        <h3>Quality Work</h3>
                        <p>Get high-quality deliverables from verified professionals.</p>
                    </FeatureCard>
                </FeaturesGrid>
            </Section>

            {/* Featured Projects Section */}
            <Section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
                <FeaturedProjects />
            </Section>

            {/* Testimonials Section */}
            <Section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-3xl font-bold mb-8 text-center">Client Success Stories</h2>
                <Testimonials />
            </Section>

            {/* Job Listings Section */}
            <Section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-3xl font-bold mb-8 text-center">Latest Opportunities</h2>
                <JobList />
            </Section>

            {/* Footer */}
            <Footer>
                <div className="footer-content">
                    <div>
                        <h3 className="text-xl font-bold mb-4">About Us</h3>
                        <p>Connecting talent with opportunity in the digital age.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul>
                            <li className="mb-2">Find Work</li>
                            <li className="mb-2">Hire Freelancers</li>
                            <li className="mb-2">Success Stories</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact</h3>
                        <p>support@upworkclone.com</p>
                        <p>+1 (555) 123-4567</p>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-700">
                    <p>&copy; {new Date().getFullYear()} Upwork Clone. All rights reserved.</p>
                </div>
            </Footer>
        </div>
    );
};

export default HomePage;