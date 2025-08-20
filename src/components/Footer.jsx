import React from 'react';
import '../styles/footer.css';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp, FaDiscord } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-nav">
            <h4 className="footer-title">Navigation</h4>
            <nav>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </nav>
          </div>

          <div className="footer-social">
            <h4 className="footer-title">Networks</h4>
            <div className="social-links">
              <a href="https://github.com/Lutsun" aria-label="GitHub"><FaGithub /></a>
              <a href="mailto:sergedasylva0411@gmail.com" aria-label="Email"><FiMail /></a>
              <a href="https://discord.com/users/1400134466701103245" aria-label="Discord"><FaDiscord /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <button onClick={scrollToTop} className="back-to-top" aria-label="Retour en haut">
            <FaArrowUp />
          </button>
          <p>&copy; {new Date().getFullYear()} Serge Da Sylva. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;