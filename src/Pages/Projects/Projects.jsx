import React from 'react';
import './Projects.css';
import { Link } from 'react-router-dom';

export default function Projects() {
  return (
    <div className="projects">
      <Link to="/" className="button back-button fade-in delay-4">
        ← Back to Home
      </Link>

      <h2 className="fade-in">My Projects</h2>

      <div className="project-grid fade-in delay-1">

        <div className="project-card">
          <h3>Angry Birds (Monogame)</h3>
          <p>A 2D physics-based game inspired by Angry Birds. Built using C# and Monogame, featuring real-time scoring, animations, and interactive UI elements.</p>
          <a href="https://github.com/Nickturlea/AngryBirds" target="_blank" rel="noopener noreferrer" className="button outline">GitHub</a>
        </div>

        <div className="project-card">
  <h3>Movies App (Watched)</h3>
  <p>A full-stack movie discussion platform where users can register, log in, rate movies, post comments, and engage with others. Built using Angular for the frontend and .NET Web API for the backend.</p>
  
  <div className="project-links">
    <a href="https://github.com/HoolAgain/WatchedFrontEnd" target="_blank" rel="noopener noreferrer" className="button outline">Frontend</a>
    <a href="https://github.com/HoolAgain/WatchedApi" target="_blank" rel="noopener noreferrer" className="button outline">Backend</a>
  </div>
</div>



        <div className="project-card">
          <h3>RentCarz</h3>
          <p>A car rental reservation system using Spring Boot and Thymeleaf. Allows users to view available cars, book reservations, and receive confirmations, with clean UI and database-driven features.</p>
          <a href="https://github.com/Nickturlea/RentCarz" target="_blank" rel="noopener noreferrer" className="button outline">GitHub</a>
        </div>

      </div>
    </div>
  );
}
