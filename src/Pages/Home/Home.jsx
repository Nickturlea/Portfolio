import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
     <h1 className="fade-in name-heading">
  Hi, I'm <span className="gradient-name">Nicholas Turlea</span>
</h1>


      <p className="tagline fade-in delay-1">
        Turning code into fun a powerful experience.
      </p>

      <p className="description fade-in delay-2">
        I'm a fresh out of school <span className="highlight">Computer Programming & Analysis</span> student focused on building
        responsive, accessible, and modern applications.
      </p>

      <ul className="values fade-in delay-3">
        <li>
          <i className="fas fa-lightbulb icon"></i> Strong problem-solving skills
        </li>
        <li>
          <i className="fas fa-laptop-code icon"></i> Full-stack development experience from school
        </li>
        <li>
          <i className="fas fa-chart-line icon"></i> Always learning, always improving
        </li>
      </ul>

      <div className="button-group fade-in delay-4">
      <Link to="/projects" className="button">View Projects</Link>
        <Link to="/contact" className="button outline">Contact Me</Link>
        <Link to="/about" className="button">About Me</Link>
      </div>
    </div>
  );
}
