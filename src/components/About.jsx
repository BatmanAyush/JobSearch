import React from 'react'
import './About.css'
import logo2 from './images/logo2.jpg'
const About = () => {
  return (
    <div className='about-container'>
<div className='about-content'>
<h1 className="about-title">About Us</h1>
<div className='about-content'>
<p>
          Our company was founded with the mission to connect talented
          professionals with leading organizations around the world. We believe
          in the power of people and technology to create opportunities that
          transform lives.
        </p>
        <p>
          With a team of dedicated professionals, we strive to offer the best
          platform for job seekers and employers alike. Our focus on innovation
          and user experience has made us a leader in the industry.
        </p>
        <div className="about-mission">
          <p>
            "To empower individuals and organizations by providing a platform
            that simplifies the job search and recruitment process, making it
            more efficient and effective for everyone."
          </p>
        </div>
        <p>
          We value transparency, integrity, and respect. Our commitment to
          excellence drives us to constantly improve and adapt to the evolving
          needs of our users.
        </p>
        <button className="about-button">Learn More</button>
</div>

</div>
<div className='about-logo'>
<img src={logo2} alt="" className='about-img' />
</div>
    </div>
  )
}

export default About
