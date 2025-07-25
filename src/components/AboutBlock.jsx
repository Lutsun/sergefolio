import React from 'react';
import '../styles/about.css';

const AboutBlock = () => {
  return (
    <section id="about" className="cyber-about">
      <div className="cyber-section-header">
        <h2>
          <span className="cyber-section-number">01</span>
          À PROPOS
        </h2>
      </div>
      
      <div className="cyber-about-content">
        <div className="cyber-about-photo">
          <div className="cyber-photo-glow"></div>
          {/* Remplacez par votre photo */}
          <div className="cyber-photo-placeholder"></div>
        </div>
        
        <div className="cyber-about-text">
          <p className="cyber-intro">
            Développeur passionné spécialisé dans la création d'interfaces modernes
            et performantes avec React.
          </p>
          
          <div className="cyber-about-grid">
            <div className="cyber-about-item">
              <span className="cyber-about-label">Nom:</span>
              <span className="cyber-about-value">Serge</span>
            </div>
            <div className="cyber-about-item">
              <span className="cyber-about-label">Localisation:</span>
              <span className="cyber-about-value">Paris, FR</span>
            </div>
            <div className="cyber-about-item">
              <span className="cyber-about-label">Email:</span>
              <span className="cyber-about-value">contact@example.com</span>
            </div>
            <div className="cyber-about-item">
              <span className="cyber-about-label">Disponibilité:</span>
              <span className="cyber-about-value">Freelance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBlock;