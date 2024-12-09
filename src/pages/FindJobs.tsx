import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

interface Job {
    id: number;
    title: string;
    company: string;
    location: string;
    description: string;
}

const JobListContainer = styled.div`
    height: calc(100vh - 2rem); /* Adjust height based on your layout */
    overflow-y: auto; /* Enable vertical scrolling */
`;

const FindJobs: React.FC = () => {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [selectedJob, setSelectedJob] = useState<Job | null>(null);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                const transformedJobs: Job[] = response.data.map((item: any) => ({
                    id: item.id,
                    title: item.title,
                    company: 'Example Company',
                    location: 'Remote',
                    description: item.body,
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

    return (
        <div className="container mx-auto px-4 py-8 h-screen">
            <div className="flex flex-col md:flex-row">
                {/* Left Column: Job List */}
                <JobListContainer className="w-full md:w-1/3 pr-0 md:pr-4 mb-4 md:mb-0">
                    <h2 className="text-2xl font-bold mb-4">Job List</h2>
                    <ul className="space-y-4">
                        {jobs.map(job => (
                            <li
                                key={job.id}
                                className="border p-4 rounded-md cursor-pointer hover:bg-gray-100"
                                onClick={() => handleJobSelect(job)}
                            >
                                {job.title}
                            </li>
                        ))}
                    </ul>
                </JobListContainer>

                {/* Right Column: Job Details */}
                <div className="w-full md:w-2/3 pl-0 md:pl-4">
                    {selectedJob ? (
                        <div className="border p-4 rounded-md">
                            <h3 className="text-xl font-semibold">{selectedJob.title}</h3>
                            <p className="mt-2">Company: {selectedJob.company}</p>
                            <p className="mt-2">Location: {selectedJob.location}</p>
                            <p className="mt-2">{selectedJob.description}</p>
                            <button className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 mt-4">
                                Apply Now
                            </button>
                        </div>
                    ) : (
                        <p className="text-gray-500">Select a job to see the details.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FindJobs;