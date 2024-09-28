import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    
      <div className="job-card">
        <h3>{props.profile}</h3>
        <p>{props.desc}</p>
        <p><strong>Experience Required:</strong> {props.exp} years</p>
        <h4>Technologies:</h4>
        <ul>
          {props.stack && props.stack.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
   
  );
};

export default Card;
