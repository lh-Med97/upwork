import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
    background-color: #1F2937;
    color: white;
    padding: 3rem 2rem;
`;

const FooterContent = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
`;

const FooterSection = styled(motion.div)`
    h3 {
        font-size: 1.25rem;
        font-weight: bold;
        margin-bottom: 1rem;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    li {
        margin-bottom: 0.5rem;
    }

    a {
        color: #D1D5DB;
        text-decoration: none;
        transition: color 0.2s ease;

        &:hover {
            color: white;
        }
    }
`;

const Footer: React.FC = () => {
    const footerSections = [
        {
            title: 'About Us',
            items: [
                { label: 'Our Story', path: '/about' },
                { label: 'Press', path: '/press' },
                { label: 'Careers', path: '/careers' },
            ]
        },
        {
            title: 'Resources',
            items: [
                { label: 'Help & Support', path: '/support' },
                { label: 'Trust & Safety', path: '/trust' },
                { label: 'Community', path: '/community' },
            ]
        },
        {
            title: 'Browse',
            items: [
                { label: 'Freelancers', path: '/freelancers' },
                { label: 'Projects', path: '/projects' },
                { label: 'Categories', path: '/categories' },
            ]
        },
        {
            title: 'Contact',
            items: [
                { label: 'support@upworkclone.com', path: 'mailto:support@upworkclone.com' },
                { label: '+1 (555) 123-4567', path: 'tel:+15551234567' },
            ]
        }
    ];

    return (
        <FooterWrapper>
            <FooterContent>
                {footerSections.map((section, index) => (
                    <FooterSection
                        key={section.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        <h3>{section.title}</h3>
                        <ul>
                            {section.items.map((item) => (
                                <li key={item.path}>
                                    <Link to={item.path}>{item.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </FooterSection>
                ))}
            </FooterContent>
            <motion.div 
                className="mt-8 pt-8 border-t border-gray-700 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                <p>&copy; {new Date().getFullYear()} Upwork Clone. All rights reserved.</p>
            </motion.div>
        </FooterWrapper>
    );
};

export default Footer;
