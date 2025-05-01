import React from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div className="contact">
      
       <Link to="/" className="button back-button fade-in delay-4">
        ← Back to Home
      </Link>

      <h2 className="fade-in">Get in Touch With Me!</h2>
      <p className="fade-in delay-1">
        Whether you have a question or just want to say hi, I’ll try my best to get back to you!
      </p>
      
      <div className="contact-info fade-in delay-2">
  <p>You can reach me directly at:</p>
  <p className="email-plain">nickturlea@gmail.com</p>
</div>


      <div className="social-links fade-in delay-3">
        <a href="https://www.linkedin.com/in/nicholas-turlea-b42809261" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin icon"></i>
        </a>
        <a href="https://github.com/Nickturlea" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github icon"></i>
        </a>
      </div>
    </div>
    
  );
  
}
