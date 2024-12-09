import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

interface Job {
    id: number;
    title: string;
    company: string;
    website: string;
    industry: string;
    location: string;
    description: string;
    required_skills: string[];
    annual_salary_range: string;
    benefits: string[];
}

const JobListContainer = styled.div`
    height: calc(100vh - 2rem);
    overflow-y: auto;
`;

const JobListItem = styled.li`
    border: 1px solid #e2e2e2;
    padding: 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
        background-color: #f0f0f0;
        transform: scale(1.02);
    }
`;

const JobDetailContainer = styled.div`
    border: 1px solid #e2e2e2;
    border-radius: 0.5rem;
    padding: 1.5rem;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const JobTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
`;

const JobInfo = styled.p`
    margin: 0.5rem 0;
    color: #555;
`;

const SearchInput = styled.input`
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
`;

const RecommendedJobsContainer = styled.div`
    margin-top: 2rem;
    flex: 1; /* Allow to grow */
`;

const RecentSearchesContainer = styled.div`
    margin-top: 2rem;
    flex: 1; /* Allow to grow */
`;

const FindJobs: React.FC = () => {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [selectedJob, setSelectedJob] = useState<Job | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [recentSearches, setRecentSearches] = useState<string[]>([]);
    // const recommendedJobs: Job[] = [
    //     {
    //         id: 1,
    //         title: 'Frontend Developer',
    //         company: 'Toptal',
    //         website: 'https://www.toptal.com',
    //         industry: 'Freelance Network',
    //         location: 'Remote',
    //         description: 'Seeking a skilled frontend developer...',
    //         required_skills: ['HTML', 'CSS', 'JavaScript'],
    //         annual_salary_range: '$80,000 - $150,000',
    //         benefits: ['Flexible hours', 'Competitive pay'],
    //     },
    //     {
    //         id: 2,
    //         title: 'Backend Developer',
    //         company: 'GitLab',
    //         website: 'https://about.gitlab.com',
    //         industry: 'DevOps and Software Development',
    //         location: 'Remote',
    //         description: 'Looking for a backend developer with experience...',
    //         required_skills: ['Ruby on Rails', 'Docker'],
    //         annual_salary_range: '$90,000 - $160,000',
    //         benefits: ['Stock options', 'Unlimited PTO'],
    //     },
    // ];

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                const transformedJobs: Job[] = response.data.map((item: any) => ({
                    id: item.id,
                    title: item.title,
                    company: 'Example Company',
                    website: 'https://example.com',
                    industry: 'Tech',
                    location: 'Remote',
                    description: item.body,
                    required_skills: ['HTML', 'CSS', 'JavaScript'],
                    annual_salary_range: '$80,000 - $150,000',
                    benefits: ['Flexible hours', 'Competitive pay'],
                }));
                setJobs(transformedJobs);
            } catch (error) {
                console.error('Error fetching jobs:', error);
            }
        };

        fetchJobs();
    }, []);

    const handleJobSelect = (job: Job) => {
        setSelectedJob(job);
    };

    const filteredJobs = jobs.filter(job =>
        job.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSearchSubmit = (searchTerm: string) => {
        if (searchTerm && !recentSearches.includes(searchTerm)) {
            setRecentSearches([...recentSearches, searchTerm]);
        }
    };

    return (

        <div className="container mx-auto px-4 py-8 h-screen">
            
            <div className="flex flex-col md:flex-row">
                {/* Recommended Jobs Section */}
                <RecommendedJobsContainer className="w-full md:w-1/2">
                    <h2 className="text-2xl font-bold mb-4">Emplois recommandés</h2>
                    <ul className="space-y-4">
                        {/* {recommendedJobs.map(job => (
                            <JobListItem key={job.id}>
                                {job.title} at {job.company}
                            </JobListItem>
                        ))} */}
                    </ul>
                </RecommendedJobsContainer>

                {/* Recent Searches Section */}
                <RecentSearchesContainer className="w-full md:w-1/2">
                    <h2 className="text-2xl font-bold mb-4">Recherches récentes</h2>
                    <ul className="space-y-4">
                        {recentSearches.map((search, index) => (
                            <li key={index} className="border p-2 rounded-md">
                                {search}
                            </li>
                        ))}
                    </ul>
                </RecentSearchesContainer>
            </div>
            <div className="flex flex-col md:flex-row">
                <JobListContainer className="w-full md:w-1/3 pr-0 md:pr-4 mb-4 md:mb-0">
                    <h2 className="text-2xl font-bold mb-4">Job List</h2>
                    <SearchInput
                        type="text"
                        placeholder="Search jobs..."
                        value={searchQuery}
                        onChange={(e) => {
                            setSearchQuery(e.target.value);
                            handleSearchSubmit(e.target.value);
                        }}
                    />
                    <ul className="space-y-4">
                        {filteredJobs.map(job => (
                            <JobListItem
                                key={job.id}
                                onClick={() => handleJobSelect(job)}
                            >
                                {job.title}
                            </JobListItem>
                        ))}
                    </ul>
                </JobListContainer>

                <div className="w-full md:w-2/3 pl-0 md:pl-4">
                    {selectedJob ? (
                        <JobDetailContainer>
                            <JobTitle>{selectedJob.title}</JobTitle>
                            <JobInfo>Company: {selectedJob.company}</JobInfo>
                            <JobInfo>Website: <a href={selectedJob.website} target="_blank" rel="noopener noreferrer">{selectedJob.website}</a></JobInfo>
                            <JobInfo>Industry: {selectedJob.industry}</JobInfo>
                            <JobInfo>Location: {selectedJob.location}</JobInfo>
                            <JobInfo>Description: {selectedJob.description}</JobInfo>
                            <JobInfo>Required Skills: {selectedJob.required_skills.join(', ')}</JobInfo>
                            <JobInfo>Annual Salary Range: {selectedJob.annual_salary_range}</JobInfo>
                            <JobInfo>Benefits: {selectedJob.benefits.join(', ')}</JobInfo>
                            <button className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 mt-4">
                                Apply Now
                            </button>
                        </JobDetailContainer>
                    ) : (
                        <p className="text-gray-500">Select a job to see the details.</p>
                    )}
                </div>
            </div>

        </div>
    );
};

export default FindJobs;