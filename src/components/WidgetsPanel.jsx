import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/widgets.css';

const WidgetsPanel = () => {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [quote, setQuote] = useState('');
  const [weather, setWeather] = useState(null);
  const [codingTime, setCodingTime] = useState('4h 22m');

  // Simuler des données d'API
  useEffect(() => {
    // Spotify Widget (simulation)
    setCurrentTrack({
      title: "Daft Punk - Around the World",
      artist: "Daft Punk",
      album: "Homework",
      isPlaying: true,
      cover: "https://i.scdn.co/image/ab67616d00001e02df9a35baaa98675256b35177"
    });

    // Citation du jour
    setQuote({
      text: "Le code est comme la poésie. Il devrait être court, concis et rempli de sens.",
      author: "Anonyme Développeur"
    });

    // Météo (simulation)
    setWeather({
      temp: 28,
      condition: "Ensoleillé",
      icon: "☀️",
      location: "Dakar, SN"
    });
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="widgets" className="widgets-section">
      <div className="container">
        <div className="section-header">
          <h2>Dashboard Futuriste</h2>
          <p className="section-subtitle">Ma vie numérique en temps réel</p>
        </div>

        <motion.div 
          className="widgets-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Widget Spotify */}
          <motion.div 
            className="widget spotify-widget"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="widget-header">
              <h3>Now Playing</h3>
              <span className="pulse-dot"></span>
            </div>
            <div className="spotify-content">
              {currentTrack && (
                <>
                  <div className="album-cover">
                    <img src={currentTrack.cover} alt={currentTrack.album} />
                    <div className="vinyl"></div>
                  </div>
                  <div className="track-info">
                    <h4>{currentTrack.title}</h4>
                    <p>{currentTrack.artist}</p>
                    <div className="progress-bar">
                      <div className="progress"></div>
                    </div>
                    <div className="player-controls">
                      <button>⏮</button>
                      <button>{currentTrack.isPlaying ? '⏸' : '▶'}</button>
                      <button>⏭</button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </motion.div>

          {/* Widget Citation */}
          <motion.div 
            className="widget quote-widget"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="widget-header">
              <h3>Pensée du Jour</h3>
            </div>
            <div className="quote-content">
              <p className="quote-text">"{quote.text}"</p>
              <p className="quote-author">— {quote.author}</p>
            </div>
          </motion.div>

          {/* Widget Météo */}
          <motion.div 
            className="widget weather-widget"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="widget-header">
              <h3>Météo Actuelle</h3>
            </div>
            {weather && (
              <div className="weather-content">
                <div className="weather-main">
                  <span className="weather-icon">{weather.icon}</span>
                  <span className="weather-temp">{weather.temp}°C</span>
                </div>
                <p className="weather-condition">{weather.condition}</p>
                <p className="weather-location">{weather.location}</p>
                <div className="weather-details">
                  <span>Humidité: 65%</span>
                  <span>Vent: 12 km/h</span>
                </div>
              </div>
            )}
          </motion.div>

          {/* Widget Coding Activity */}
          <motion.div 
            className="widget coding-widget"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="widget-header">
              <h3>Activité Coding</h3>
            </div>
            <div className="coding-content">
              <div className="coding-stats">
                <div className="stat">
                  <span className="stat-value">{codingTime}</span>
                  <span className="stat-label">Aujourd'hui</span>
                </div>
                <div className="stat">
                  <span className="stat-value">32h</span>
                  <span className="stat-label">Cette semaine</span>
                </div>
              </div>
              <div className="lang-stats">
                <div className="lang-bar">
                  <span>JavaScript</span>
                  <div className="bar-container">
                    <div className="bar" style={{ width: '65%' }}></div>
                  </div>
                </div>
                <div className="lang-bar">
                  <span>Python</span>
                  <div className="bar-container">
                    <div className="bar" style={{ width: '25%' }}></div>
                  </div>
                </div>
                <div className="lang-bar">
                  <span>PHP</span>
                  <div className="bar-container">
                    <div className="bar" style={{ width: '10%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Widget GitHub Stats */}
          <motion.div 
            className="widget github-widget"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="widget-header">
              <h3>GitHub Stats</h3>
            </div>
            <div className="github-content">
              <div className="github-stats">
                <div className="github-stat">
                  <span className="stat-number">24</span>
                  <span className="stat-label">Projets</span>
                </div>
                <div className="github-stat">
                  <span className="stat-number">1.2k</span>
                  <span className="stat-label">Contributions</span>
                </div>
                <div className="github-stat">
                  <span className="stat-number">8</span>
                  <span className="stat-label">Stars</span>
                </div>
              </div>
              <div className="github-graph">
                <div className="graph-placeholder"></div>
              </div>
              <a 
                href="https://github.com/username" 
                target="_blank" 
                rel="noopener noreferrer"
                className="github-link"
              >
                Voir mon GitHub
              </a>
            </div>
          </motion.div>

          {/* Widget Cyberpunk Terminal */}
          <motion.div 
            className="widget terminal-widget"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="widget-header">
              <h3>Terminal</h3>
              <div className="terminal-controls">
                <span className="control-dot red"></span>
                <span className="control-dot yellow"></span>
                <span className="control-dot green"></span>
              </div>
            </div>
            <div className="terminal-content">
              <div className="terminal-line">
                <span className="prompt">$</span>
                <span className="command">whoami</span>
              </div>
              <div className="terminal-line output">
                Serge - Fullstack Developer
              </div>
              <div className="terminal-line">
                <span className="prompt">$</span>
                <span className="command">status --coding</span>
              </div>
              <div className="terminal-line output">
                Current project: Portfolio v2.0
                <br />
                Progress: █████████████░░░░ 65%
              </div>
              <div className="terminal-line">
                <span className="prompt">$</span>
                <span className="command blink">_</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WidgetsPanel;