import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 2rem;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  color: #4a4a4a;
  margin-bottom: 1.5rem;
`;

const JobCard = styled.div`
  border: 1px solid #e2e2e2;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  transition: transform 0.2s;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const JobTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
`;

const JobDescription = styled.p`
  color: #666;
  margin-top: 0.5rem;
`;

const ApplyButton = styled.button`
  background-color: #3b82f6;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  margin-top: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #2563eb;
  }
`;

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
}

interface JobListProps {
  jobs: Job[];
  onJobSelect: (job: Job) => void;
}

const JobList: React.FC<JobListProps> = ({ jobs, onJobSelect }) => {
  return (
    <Container>
      <Title>Available Jobs</Title>
      <div className="flex flex-col space-y-4">
        {jobs.map(job => (
          <JobCard key={job.id} onClick={() => onJobSelect(job)}>
            <JobTitle>{job.title}</JobTitle>
            <JobDescription>Company: {job.company}</JobDescription>
            <JobDescription>Location: {job.location}</JobDescription>
            <ApplyButton>Apply Now</ApplyButton>
          </JobCard>
        ))}
      </div>
    </Container>
  );
};

export default JobList;
