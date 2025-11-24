import React from "react";

const Skills = () => {
  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 75 },
  ];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>

      {skills.map((skill) => (
        <div key={skill.name} className="skill">
          <span>{skill.name}</span>
          <div className="progress-bar">
            <div style={{ width: `${skill.level}%` }}></div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
