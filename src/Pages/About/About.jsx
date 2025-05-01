import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="about">
      <Link to="/" className="button back-button fade-in delay-4">
        ← Back to Home
      </Link>

      <h2 className="fade-in">About Me</h2>
      
      <p className="fade-in delay-1">
        I'm <span className="highlight">Nicholas Turlea</span>, a passionate and driven developer based in Cambridge, ON. 
        I recently completed my diploma in <strong>Computer Programming & Analysis</strong> at Conestoga College.
      </p>

      <p className="fade-in delay-2">
        Throughout my academic journey, I've worked on full-stack applications, games using C# and Monogame, and responsive websites built with Angular and React.
        I enjoy turning complex problems into clean, efficient solutions — and I’m always eager to learn something new.
      </p>

      <p className="fade-in delay-3">
        Outside of coding, I have hands-on experience as a Mechanical Assembler at Eaton, where I developed a strong work ethic and attention to detail. 
        Whether it’s building apps, solving bugs, or collaborating with teams, I aim to bring enthusiasm and a growth mindset to everything I do.
      </p>

      <div className="button-group fade-in delay-4">
      <Link to="/projects" className="button">View Projects</Link>
        <Link to="/contact" className="button outline">Contact Me</Link>
      </div>
    </div>
  );
}
