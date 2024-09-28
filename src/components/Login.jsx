import React from "react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './Login.css';
import logo from './company.png'

function Login() {
  const navigate = useNavigate(); // Use the useNavigate hook

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page
    navigate('/job'); // Navigate to the /job route
  };

  return (
    <div className="login-container">
      <div className="login-box">
       <div style={{ display:'flex',justifyContent:'center',alignItems:'center'}}>
        <img src={logo} className="company-logo" />
       </div>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Name</label>
            <input type="text" placeholder="Enter your name" />
          </div>
          <div className="input-group">
            <label>Age</label>
            <input type="number" placeholder="Enter your age" />
          </div>
          <div className="input-group">
            <label>Education Qualification</label>
            <input type="text" placeholder="Enter your qualification" />
          </div>
          <div className="input-group">
            <label>College Name</label>
            <input type="text" placeholder="Enter your college name" />
          </div>
          <div className="input-group">
            <label>Phone Number</label>
            <input type="text" placeholder="Enter your phone number" />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
