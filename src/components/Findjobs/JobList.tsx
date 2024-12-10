import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faMapMarkerAlt, faDollarSign, faTags } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  margin: auto;
  height: auto;
  padding: 2rem;
`;

const JobListContainer = styled.div`
  margin: 2rem auto;
  padding: 2rem;
  max-width: 100%;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  color: #4a4a4a;
  margin-bottom: 1.5rem;
`;

const JobListItem = styled.li`
  margin-bottom: 1.5rem;
  border: 1px solid #e2e2e2;
  padding: 1rem;
  border-radius: 0.5rem;
  transition: background-color 0.3s ease, transform 0.3s ease;
  margin-top: 1rem;
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
  annual_salary_range: string;
  required_skills: string[];
}

interface JobListProps {
  jobs: Job[];
  onJobSelect: (job: Job) => void;
}

const JobList: React.FC<JobListProps> = ({ jobs, onJobSelect }) => {
  return (
    <JobListContainer>
      <Title>Available Jobs</Title>
      <ul>
        {jobs.map(job => (
          <JobListItem key={job.id} onClick={() => onJobSelect(job)}>
            <JobTitle>
              <FontAwesomeIcon icon={faBriefcase} /> {job.title}
            </JobTitle>
            <JobDescription>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> {job.location}
            </JobDescription>
            <JobDescription>
              <FontAwesomeIcon icon={faDollarSign} /> {job.annual_salary_range}
            </JobDescription>
            <JobDescription>
              <FontAwesomeIcon icon={faTags} /> {job.required_skills.join(', ')}
            </JobDescription>
            <ApplyButton>Apply Now</ApplyButton>
          </JobListItem>
        ))}
      </ul>
    </JobListContainer>
  );
};

export default JobList;
