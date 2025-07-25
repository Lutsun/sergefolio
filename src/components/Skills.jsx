import React from 'react';
import '../styles/skills.css';
import {
  FaReact, FaJs, FaHtml5,
  FaGitAlt, FaGithub,
  FaDatabase, FaPython,
  FaJava, FaBootstrap,
  FaPhp 
} from 'react-icons/fa';

const Skills = () => {
  const skills = [
    { icon: <FaReact />, name: "React" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaHtml5 />, name: "HTML5" },
    {icon:<FaPhp/> ,name:"Php"},
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <FaDatabase />, name: "SQL" },
    { icon: <FaPython />, name: "Python" },
    { icon: <FaJava />, name: "Java" },
    { icon: <FaBootstrap />, name: "Bootstrap" },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="section-header">
        <h2>My Skills</h2>
      </div>
      
      <div className="skills-container">
        <div className="skills-track">
          {[...skills, ...skills].map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-icon">{skill.icon}</div>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;