import React, { useState, useEffect } from 'react';
import { FiUser, FiZap, FiShare2, FiMail } from 'react-icons/fi';
import { FaTwitter, FaLinkedinIn, FaGithub, FaInstagram, FaXing, FaAirbnb, FaAngular, FaTwitch, FaWhatsapp, FaAws, FaTwitterSquare, FaDiscord, FaMailBulk, FaVoicemail, FaMailchimp } from 'react-icons/fa';
import { WiDaySunny, WiRain, WiCloudy, WiDayHaze } from 'react-icons/wi';
import '../styles/widgets.css';

const WidgetsPanel = () => {
  const [xoGame, setXoGame] = useState(Array(9).fill(null));
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [gameStatus, setGameStatus] = useState('Your turn (X)');
  const [weather, setWeather] = useState({
    temp: '--',
    condition: 'clear',
    location: 'Dakar, Sénégal'
  });

  // Daily thoughts
  const dailyThoughts = [
    "Code is poetry, but debugging is the editor's nightmare.",
    "The best error message is the one that never shows up.",
    "Artificial Intelligence is the future, and the future is now.",
    "Clean code is like a love letter to your future self.",
    "In a world of ones and zeros, be the algorithm that makes a difference."
  ];
 // Génère un index basé sur la date du jour
  const getDailyThoughtIndex = () => {
    const today = new Date();
    const dayOfYear = Math.floor(
      (today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24)
    );
    return dayOfYear % dailyThoughts.length;
  };

  const [currentThought, setCurrentThought] = useState(
    dailyThoughts[getDailyThoughtIndex()]
  );

  // Rafraîchir manuellement la pensée
  const refreshThought = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * dailyThoughts.length);
    } while (dailyThoughts[newIndex] === currentThought);
    
    setCurrentThought(dailyThoughts[newIndex]);
  };

  // Fetch weather data 
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Dakar,SN&units=metric&appid=25662924f4d0193b20a831fdfd92a6cf`
        );
        const data = await response.json();
        
        const weatherConditions = {
          'clear': 'clear',
          'clouds': 'cloudy',
          'rain': 'rain',
          'thunderstorm': 'rain',
          'drizzle': 'rain',
          'haze': 'haze',
          'mist': 'haze'
        };

        setWeather({
          temp: Math.round(data.main.temp),
          condition: weatherConditions[data.weather[0].main.toLowerCase()] || 'clear',
          location: 'Dakar, Sénégal'
        });
        
      } catch (error) {
        console.error("Error fetching weather:", error);
      }
    };

    fetchWeather();
  }, []);

  const getWeatherIcon = () => {
    switch(weather.condition) {
      case 'rain': return <WiRain className="weather-icon" />;
      case 'cloudy': return <WiCloudy className="weather-icon" />;
      case 'haze': return <WiDayHaze className="weather-icon" />;
      default: return <WiDaySunny className="weather-icon" />;
    }
  };


   // Logique du jeu XO
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ];
    for (let line of lines) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const makeAiMove = (squares) => {
    const emptySquares = squares
      .map((square, index) => square === null ? index : null)
      .filter(val => val !== null);
    
    if (emptySquares.length > 0) {
      const randomIndex = Math.floor(Math.random() * emptySquares.length);
      return emptySquares[randomIndex];
    }
    return null;
  };

  const handleClick = (i) => {
    if (xoGame[i] || calculateWinner(xoGame)) return;
    
    // Player move
    const newSquares = [...xoGame];
    newSquares[i] = 'X';
    setXoGame(newSquares);
    
    const winner = calculateWinner(newSquares);
    if (winner) {
      setGameStatus('You win!');
      return;
    }
    
    if (!newSquares.includes(null)) {
      setGameStatus('Draw!');
      return;
    }
    
    setGameStatus('AI thinking...');
    setIsPlayerTurn(false);
    
    // AI move after delay
    setTimeout(() => {
      const aiMove = makeAiMove(newSquares);
      if (aiMove !== null) {
        const updatedSquares = [...newSquares];
        updatedSquares[aiMove] = 'O';
        setXoGame(updatedSquares);
        
        const aiWinner = calculateWinner(updatedSquares);
        if (aiWinner) {
          setGameStatus('AI wins!');
        } else if (!updatedSquares.includes(null)) {
          setGameStatus('Draw!');
        } else {
          setGameStatus('Your turn (X)');
          setIsPlayerTurn(true);
        }
      }
    }, 800);
  };

  const resetGame = () => {
    setXoGame(Array(9).fill(null));
    setIsPlayerTurn(true);
    setGameStatus('Your turn (X)');
  };

  return (
    <div className="widget-panel">
      {/* Bio Matrix */}
      <div className="widget-card bio-matrix">
        <div className="widget-header">
          <FiUser className="widget-icon" />
          <h3>ABOUT ME</h3>
        </div>
        <div className="bio-content">
          <p>Passionate full-stack developer with a focus on creating immersive digital experiences. </p>
            <p> Even if my real Passion is Artificial Intelligence, I'm sure that this new technology will revolutionize 
            the world.Apart from tech, I am a fan of action movies,video games, cars and football. I give you a hint of my favorite club :
            <br/> Mes Que un club !
          </p>
          <div className="bio-details">
            <div className="detail-item">
              <span className="detail-label">Specialties:</span>
              <span>React, Php, MySql</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Philosophy:</span>
              <span>Clean code = Happy dev</span>
            </div>
          </div>
        </div>
      </div>

      {/* Thought of the Day avec Météo */}
      <div className="widget-card thought-widget">
        <div className="widget-header">
          <FiZap className="widget-icon" />
          <h3>DAILY THOUGHT</h3>
        </div>
        <div className="thought-content">
          <p>"{currentThought}"
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
          </p>
          <div className="weather-info">
            <div className="weather-icon-container">
              <br />
              <br />
              {getWeatherIcon()}
              <span className="weather-temp">{weather.temp}°C</span>
            </div>
            <div className="weather-location">
              {weather.location}
            </div>
          </div>
          <div className="thought-time">
            {new Date().toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })}
          </div>
        </div>
      </div>

      {/* Social Uplink */}
      <div className="widget-card social-widget">
        <div className="widget-header">
          <FiShare2 className="widget-icon" />
          <h3>CONNECT</h3>
        </div>
        <div className="social-content">
          <p className="follow-text">Follow me here !</p>
          <div className="social-grid">
             <a href="mailto:sergedasylva0411@gmail.com" className="social-item mail">
              <FiMail className="social-icon" />
              <span>Gmail</span>
            </a>
            <a href="https://x.com/sylva_serge" className="social-item twitter">
              <FaTwitter className="social-icon" />
              <span>Twitter</span>
            </a>
            <a href="https://discord.com/users/1400134466701103245" className="social-item discord">
              <FaDiscord className="social-icon" />
              <span>Discord</span>
            </a>
            <a href="https://github.com/Lutsun" className="social-item github">
              <FaGithub className="social-icon" />
              <span>GitHub</span>
            </a>
            <a href="https://www.instagram.com/s04.da/?next=%2F" className="social-item instagram">
              <FaInstagram className="social-icon" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>

      {/* XO Game */}
      <div className="widget-card game-widget">
        <div className="widget-header">
          <FiZap className="widget-icon" />
          <h3>PLAY XO</h3>
        </div>
        <div className="game-status">{gameStatus}</div>
        <div className="game-board">
          {xoGame.map((square, i) => (
            <button 
              key={i} 
              className={`square ${square}`}
              onClick={() => isPlayerTurn && handleClick(i)}
              disabled={!isPlayerTurn || square}
            >
              {square}
            </button>
          ))}
        </div>
        <button className="reset-btn" onClick={resetGame}>New Game</button>
      </div>
    </div>
  );
};

export default WidgetsPanel;