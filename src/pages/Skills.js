// src/pages/Skills.js

import React from 'react';
import './Skills.css';

function Skills() {
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React.js',
    'Next.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Git & GitHub',
    'Responsive Design',
    'REST APIs',
    'C++ (OOP)',
  ];

  return (
    <section className="skills-section">
      <h2>My Skills</h2>
      <p className="skills-intro">
        As a MERN stack developer, I’ve worked with both frontend and backend technologies. Below is a list of tools and
        technologies I am confident with:
      </p>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
