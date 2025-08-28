import React, { useState } from 'react';
import { FiMoon, FiSun, FiMenu, FiX, FiHome, FiUser, FiCode, FiMail } from 'react-icons/fi';
import '../styles/header.css';

const Header = ({ darkMode, setDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const closeMobileMenu = () => setMobileMenuOpen(false);

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
        <div className="mobile-menu">
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