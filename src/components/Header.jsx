import React from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import '../styles/header.css'; 
const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <a href="/" className="logo">SERGE<span>VERSE</span></a>
          
          <nav className="nav">
            <a href="#home">Home</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projets</a>
            <a href="#contact">Contact</a>
            
            <button 
              onClick={() => setDarkMode(!darkMode)} 
              className="theme-toggle"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;