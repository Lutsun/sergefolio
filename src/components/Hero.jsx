import React from 'react';
import '../styles/hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hi, I'am <span>Serge</span></h1>
            <h2>Développeur Fullstack</h2>
            <p className="lead">
              Second-year Computer Science student at Sup'Info Senegal, 
              I am passionate about web and mobile development. I enjoy 
              creating high-performance and intuitive applications that 
              meet users' needs.
            </p>
            <div className="hero-cta">
              <a href="#contact" className="btn btn-primary">Me contacter</a>
              <a href="/cv.pdf" download className="btn btn-outline">Télécharger mon CV</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="img-container">
              <img src="../assets/images/Serge.PNG" alt="Serge" className="profile-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;