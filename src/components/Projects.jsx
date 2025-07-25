import React, { useState } from 'react';
import '../styles/projects.css';

const projects = [
  {
    title: "Stock Nova",
    description: "Application complète de gestion de stock avec tableau de bord analytique et système d'alertes.",
    tags: ["PHP", "PhpMyAdmin", "Bootstrap"],
    link: "https://github.com/username/stock-nova",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    title: "Portfolio React",
    description: "Portfolio moderne avec mode sombre/clair, animations et responsive design.",
    tags: ["React", "CSS3", "Framer Motion"],
    link: "https://github.com/username/portfolio-react",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    title: "API E-commerce",
    description: "API RESTful pour plateforme e-commerce avec authentification JWT et paiements.",
    tags: ["Node.js", "Express", "MongoDB"],
    link: "https://github.com/username/api-ecommerce",
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
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