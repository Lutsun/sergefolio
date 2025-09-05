import React, { useState, useEffect, useRef } from 'react';
import { FiMoon, FiSun, FiMenu, FiX, FiHome, FiUser, FiCode, FiMail } from 'react-icons/fi';
import '../styles/header.css';

const Header = ({ darkMode, setDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const menuButtonRef = useRef(null);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  // Fermer le menu quand on clique à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Si le menu est ouvert ET que le clic est à l'extérieur du menu ET pas sur le bouton menu
      if (
        mobileMenuOpen &&
        mobileMenuRef.current && 
        !mobileMenuRef.current.contains(event.target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target)
      ) {
        closeMobileMenu();
      }
    };

    // Ajouter l'écouteur d'événement
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside); // Pour mobile

    // Nettoyer l'écouteur
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo - inchangé sur desktop */}
          <a href="/" className="logo">
            SERGE<span>VERSE</span>
          </a>
          
          {/* Navigation Desktop - inchangée */}
          <nav className="nav">
            <a href="#home">Home</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            
            <button onClick={toggleDarkMode} className="theme-toggle">
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
          </nav>

          {/* Bouton Hamburger (mobile seulement) */}
          <button 
            ref={menuButtonRef}
            className="mobile-menu-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Ouvrir le menu"
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu mobile (mobile seulement) */}
      {mobileMenuOpen && (
        <div className="mobile-menu" ref={mobileMenuRef}>
          <nav className="mobile-nav">
            <a href="#home" onClick={closeMobileMenu}>
              <FiHome /> Home
            </a>
            <a href="#skills" onClick={closeMobileMenu}>
              <FiUser /> Skills
            </a>
            <a href="#projects" onClick={closeMobileMenu}>
              <FiCode /> Projects
            </a>
            <a href="#contact" onClick={closeMobileMenu}>
              <FiMail /> Contact
            </a>
            
            <button onClick={toggleDarkMode} className="mobile-theme-toggle">
              {darkMode ? <FiSun /> : <FiMoon />}
              {darkMode ? ' Light Mode' : ' Dark Mode'}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;