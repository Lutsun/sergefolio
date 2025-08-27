import React, { useState } from 'react';
import '../styles/projects.css';

const projects = [
  {
    title: "Stock Nova",
    description: "Modern and intuitive inventory management web application, developed in PHP.",
    tags: ["PHP", "PhpMyAdmin", "Framer Motion"],
    link: "https://github.com/Lutsun/Project_Php_Exam.git",
    image: "../assets/images/StockNova.JPG"
  },
  {
    title: "Portfolio React",
    description: "Portfolio moderne avec mode sombre/clair, animations et responsive design.",
    tags: ["React", "CSS3", "Framer Motion"],
    link: "https://github.com/username/portfolio-react",
    image: "../assets/images/Sergeverse.JPG"
  },
  {
    title: "File Backup & Integrity Checker",
    description: "A Python application that allows you to verify the integrity of backups using SHA-256 checksums. ",
    tags: ["Python", "Python Libraries"],
    link: "https://github.com/Lutsun/Project_Python_exam.git",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    title: "Employee Management",
    description: "A simple Java desktop application to manage employees with a graphical interface.",
    tags: ["Java", "Sqlite"],
    link: "https://github.com/Lutsun/Project_Java_Exam.git",
    image: "../assets/images/Employeemanagement.png"
  }
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextProject = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2>Mes Projets</h2>
          <p className="section-subtitle">Explorez mes projets phares et contributions techniques</p>
        </div>

        <div className="projects-carousel">
          <button className="carousel-btn prev" onClick={prevProject} aria-label="Projet précédent">
            &lt;
          </button>
         
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className={`project-card ${index === activeIndex ? 'active' : ''}`}
              >
                <div className="project-image-container">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="project-image"
                    loading="lazy"
                  />
                  <div className="project-overlay">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-tags">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="project-actions">
                  <a 
                    href={project.link} 
                    className="project-link"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Voir sur GitHub
                    <span className="link-icon">↗</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-btn next" onClick={nextProject} aria-label="Projet suivant">
            &gt;
          </button>
        </div>

        <div className="carousel-dots">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Aller au projet ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;