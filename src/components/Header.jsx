import React, { useState } from 'react';
import { FiMoon, FiSun, FiMenu, FiX, FiHome, FiUser, FiCode, FiMail } from 'react-icons/fi';
import '../styles/header.css';

const Header = ({ darkMode, setDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Bouton Hamburger (mobile seulement) */}
          {isMobile && (
            <button 
              className="mobile-menu-btn" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FiX className="menu-icon" /> : <FiMenu className="menu-icon" />}
            </button>
          )}

          {/* Logo centré sur mobile, normal sur desktop */}
          <a href="/" className={`logo ${isMobile ? 'mobile-logo' : ''}`}>
            SERGE<span>VERSE</span>
          </a>
          
          {/* Navigation Desktop - inchangée */}
          <nav className="nav">
            <a href="#home">Home</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projets</a>
            <a href="#contact">Contact</a>
            
            <button onClick={toggleDarkMode} className="theme-toggle">
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
          </nav>
        </div>
      </div>

      {/* Sidebar Mobile (mobile seulement) */}
      {isMobile && (
        <>
          <div className={`mobile-sidebar ${mobileMenuOpen ? 'open' : ''}`}>
            <div className="sidebar-nav">
              <a href="#home" onClick={closeMobileMenu}>
                <FiHome className="nav-icon" />
                <span>Home</span>
              </a>
              <a href="#skills" onClick={closeMobileMenu}>
                <FiUser className="nav-icon" />
                <span>Skills</span>
              </a>
              <a href="#projects" onClick={closeMobileMenu}>
                <FiCode className="nav-icon" />
                <span>Projets</span>
              </a>
              <a href="#contact" onClick={closeMobileMenu}>
                <FiMail className="nav-icon" />
                <span>Contact</span>
              </a>
            </div>
            
            <button onClick={toggleDarkMode} className="sidebar-theme-toggle">
              {darkMode ? (
                <>
                  <FiSun className="nav-icon" />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <FiMoon className="nav-icon" />
                  <span>Dark Mode</span>
                </>
              )}
            </button>
          </div>

          {/* Overlay (mobile seulement) */}
          {mobileMenuOpen && <div className="sidebar-overlay" onClick={closeMobileMenu} />}
        </>
      )}
    </header>
  );
};

export default Header;