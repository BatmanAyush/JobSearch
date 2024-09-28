// src/components/Footer.js

import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h2 className="footer-title">About Us</h2>
          <p className="footer-description">
            We are committed to connecting talented professionals with leading organizations. 
            Our platform makes the job search and recruitment process more efficient and effective.
          </p>
        </div>
        <div className="footer-links">
          <h2 className="footer-title">Quick Links</h2>
          <ul>
            <li><a href="/">Find Jobs</a></li>
            <li><a href="/">About Us</a></li>
            <li><a href="/">Contact Us</a></li>
            <li><a href="/">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <h2 className="footer-title">Follow Us</h2>
          <div className="social-icons">
            <a href="https://facebook.com" className="social-icon facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" className="social-icon twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" className="social-icon linkedin">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://instagram.com" className="social-icon instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
