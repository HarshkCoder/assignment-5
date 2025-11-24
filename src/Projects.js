import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "A modern portfolio built using React.",
    },
    {
      title: "Weather App",
      desc: "Real-time weather updates using API.",
    },
    {
      title: "Todo App",
      desc: "Task manager with CRUD functions.",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="project-container">
        {projects.map((p) => (
          <div className="project-card" key={p.title}>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

