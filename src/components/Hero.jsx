// src/components/Hero.js

import React from 'react';
import './Hero.css'; // Import the CSS file for styling
import logo1 from './images/hero-img.jpg'
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="hero-container">
        <div className='hero-content'>
        <h1 className="hero-title">Find Your Dream Job</h1>
      <p className="hero-subtitle">Explore thousands of job opportunities and land your next role.</p>
      <button className="hero-button" onClick={()=>{
        navigate('/job'); // Navigate to the "/job" route when the button is clicked.
      }}>Get Started</button>
        </div>
        <div className='hero-img'>
            <img src={logo1} className='hero-logo' />
        </div>

    </div>
  );
};

export default Hero;
