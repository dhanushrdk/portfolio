import React from "react";
import "./Hero.css";
import profilePic from "../assets/me.png"; // <-- place your profile picture in src/assets

const Hero = () => {
  return (
    <section className="hero-container" id="home">
      <div className="hero-text">
        <h1>Hi, I'm Dhanush Kumar 👋</h1>
        <h2>Full Stack Developer</h2>
        <p>
          I build modern, scalable, and user-friendly applications with React,
          Node.js, and MongoDB. Passionate about design, animations, and clean
          code.
        </p>
        <div className="hero-btns">
          <a href="/resume.pdf" className="btn-primary" download>
            📄 Download Resume
          </a>
          <a  href="https://www.linkedin.com/in/dhanush-kumar-rdk" className="btn-secondary" target="_blank" rel="noreferrer">
            🔗 LinkedIn
</a>

          <a href="https://github.com/dhanushrdk" className="btn-secondary" target="_blank">
            💻 GitHub
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src={profilePic} alt="Profile" />
      </div>
    </section>
  );
};

export default Hero;
