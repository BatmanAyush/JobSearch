import React, { useEffect, useState } from 'react';
import Card from './Card';
import SearchBar from './SearchBar';
import './Card.css';
import './SearchBar.css';

const JobList = () => {
  const [job, setJob] = useState([]);
  const [error, setError] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState('');

  useEffect(() => {
    const getJob = async () => {
      try {
        const response = await fetch('http://localhost:8080/jobPosts'); // Fetch all jobs initially
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setJob(data);
      } catch (error) {
        setError(error.message);
      }
    };

    getJob();
  }, []);

  useEffect(() => {
    const fetchFilteredJobs = async () => {
      try {
        const response = await fetch(`http://localhost:8080/jobPosts/search/${searchKeyword}`);
        if (!response.ok) {
          throw new Error('Failed to fetch filtered data');
        }
        const filteredData = await response.json();
        setJob(filteredData);
      } catch (error) {
        setError(error.message);
      }
    };

    // Fetch filtered jobs only if a keyword is provided
    if (searchKeyword) {
      fetchFilteredJobs();
    } else {
      // Fetch all jobs if searchKeyword is empty
      const getJob = async () => {
        try {
          const response = await fetch('http://localhost:8080/jobPosts');
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const data = await response.json();
          setJob(data);
        } catch (error) {
          setError(error.message);
        }
      };

      getJob();
    }
  }, [searchKeyword,job]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const jobElement = job.map((value) => (
    <Card
      key={value.postId}
      profile={value.postProfile}
      desc={value.postDesc}
      exp={value.reqExperience}
      stack={value.postTechStack}
    />
  ));

  return (
    <div className="parent">
      <SearchBar
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
        placeholder="Search for jobs..."
      />
      <div className="card-component">{jobElement}</div>
    </div>
  );
};

export default JobList;
