// src/pages/Home.js

import React from 'react';
import './Home.css';

function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <h1>Hello, I'm <span className="highlight">Zarish Mansoor</span></h1>
        <h2>MERN Stack Developer</h2>
        <p>
          A fresh Computer Science graduate with a solid foundation in web development, including proficiency in HTML, CSS,
          JavaScript, and frameworks such as React, Next.js, and Express.js. Skilled in building responsive, user-friendly web
          applications with a strong focus on clean design and functionality. Eager to apply academic knowledge to real-world
          projects and grow as a developer in a professional environment.
        </p>

        <div className="buttons">
          <a href="/Projects" className="btn">View Projects</a>
          <a href="/Contact" className="btn btn-outline">Contact Me</a>
          <a href="/Zarish Mansoor.pdf" className="btn btn-download" download>Download CV</a>
        </div>
      </div>

      <div className="home-image">
        <img src="/profile-photo.jpeg" alt="Zarish Mansoor" />
      </div>
    </section>
  );
}

export default Home;
