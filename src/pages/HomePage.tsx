import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import HeroBanner from '../components/Home/HeroBanner';
import Features from '../components/Home/Features';
import Testimonials from '../components/Home/Testimonials';
import JobList from '../components/Home/JobList';
import FeaturedProjects from '../components/Home/FeaturedProjects';
import Footer from '../components/Navigation/Footer';

const Section = styled(motion.section)`
    padding: 4rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
`;

const ErrorFallback: React.FC<{ error: Error; resetErrorBoundary: () => void }> = ({ error, resetErrorBoundary }) => {
    return (
        <div className="text-center p-4 bg-red-50 text-red-600">
            <h2 className="text-lg font-bold mb-2">Something went wrong:</h2>
            <p className="mb-4">{error.message}</p>
            <button
                onClick={resetErrorBoundary}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
                Try again
            </button>
        </div>
    );
};

const HomePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <ErrorBoundary FallbackComponent={ErrorFallback}>
          
                
                {/* Hero Section */}
                <HeroBanner />

                {/* Features Section */}
                <Features />

                {/* Featured Projects Section */}
                <Section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
                    <ErrorBoundary FallbackComponent={ErrorFallback}>
                        <FeaturedProjects />
                    </ErrorBoundary>
                </Section>

                {/* Testimonials Section */}
                <Section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl font-bold mb-8 text-center">Client Success Stories</h2>
                    <ErrorBoundary FallbackComponent={ErrorFallback}>
                        <Testimonials />
                    </ErrorBoundary>
                </Section>

                {/* Job Listings Section */}
                <Section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl font-bold mb-8 text-center">Latest Opportunities</h2>
                    <ErrorBoundary FallbackComponent={ErrorFallback}>
                        <JobList />
                    </ErrorBoundary>
                </Section>

                {/* Footer */}
                <Footer />
            </ErrorBoundary>
        </div>
    );
};

export default HomePage;