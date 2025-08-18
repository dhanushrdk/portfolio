import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      icon: "💻",
      description: "A personal portfolio built with React, Tailwind, and animations.",
    },
    {
      title: "E-commerce App",
      icon: "🛒",
      description: "Full stack app with cart, payment, and authentication features.",
    },
    {
      title: "Deep Learning-Based Alzheimer’s Detection",
      icon: "🧠",
      description:
        "Developed a dual-attention convolutional autoencoder using MRI scans with CNN and VGG16.",
    },
    {
      title: "CRUD Application using JavaScript",
      icon: "⚙️",
      description:
        "Created a local storage-based web app with real-time CRUD operations, using HTML, CSS, and JS .",
    },
  ];

  return (
    <section className="projects-container" id="projects">
      <div className="overlay">
        <h2 className="projects-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-icon">{project.icon}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
