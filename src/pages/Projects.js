// src/pages/Projects.js

import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section className="projects">
      <h2>My Projects</h2>

      <div className="project-list">

        <div className="project-card">
          <img src="/sentiment.png" alt="Mental Health Monitoring Project" />
          <h3>Mental Health Monitoring</h3>
          <p>
            Real-time sentiment analysis platform with word suggestions and AI-based mental health support.
          </p>
          <div className="project-links">
            <a href="http://mental-health-monitor.vercel.app/" target="_blank" rel="noreferrer">Live Demo</a>
            <a href="https://github.com/ZarishMansoor/Mental-health-monitor-with-sentiment-analysis.git" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>

        <div className="project-card">
          <img src="/Mern.jpg" alt="Task Manager Project" />
          <h3>Task Management System</h3>
          <p>
            Full-stack MERN task manager. Users can create, update, and delete tasks with responsive UI.
          </p>
          <div className="project-links">
            <a href="https://github.com/ZarishMansoor/Mern-task-app.git" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>

        <div className="project-card">
          <img src="/airline.jpg" alt="Flight Reservation Project" />
          <h3>Flight Reservation System (C++)</h3>
          <p>
            Console-based airline reservation system built using Object-Oriented Programming in C++.
          </p>
          <div className="project-links">
            <a href="https://github.com/ZarishMansoor/oop-project.git" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;
