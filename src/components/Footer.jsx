import React from 'react';
import '../styles/footer.css'; // Assuming you have a CSS file for styling
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Serge</h3>
            <p>Développeur Fullstack passionné par la création de solutions web performantes.</p>
          </div>
          
          <div className="footer-links">
            <h4>Liens rapides</h4>
            <ul>
              <li><a href="#home">Accueil</a></li>
              <li><a href="#about">À propos</a></li>
              <li><a href="#skills">Compétences</a></li>
              <li><a href="#projects">Projets</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Contact</h4>
            <ul>
              <li>Email: sergedasylva0411@gmail.com</li>
              <li>Téléphone: +221 77 720 31 62</li>
              <li>Localisation: Dakar, Senegal</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Serge. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;