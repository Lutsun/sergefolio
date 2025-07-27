import React, { useState, useEffect } from 'react';
import { FiUser, FiZap, FiShare2 } from 'react-icons/fi';
import { FaTwitter, FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import '../styles/widgets.css';

const WidgetsPanel = () => {
  const [xoGame, setXoGame] = useState(Array(9).fill(null));
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [gameStatus, setGameStatus] = useState('Your turn (X)');

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
          <p>
            Passionate full-stack developer with a focus on creating immersive digital experiences. 
            I blend creativity with technical skills to build innovative web solutions. 
            My approach combines aesthetic design with robust functionality.Even if my real Passion 
            is Artificial Intelligence, I'm sure that this new technology will revolutionize the world.
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

      {/* Thought of the Day */}
      <div className="widget-card thought-widget">
        <div className="widget-header">
          <FiZap className="widget-icon" />
          <h3>DAILY THOUGHT</h3>
        </div>
        <div className="thought-content">
          <p>
            "The most powerful tool we have as developers is not our code editor, 
            but our ability to solve problems creatively."
          </p>
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
        <div className="social-grid">
          <a href="#" className="social-item twitter">
            <FaTwitter className="social-icon" />
            <span>Twitter</span>
          </a>
          <a href="#" className="social-item linkedin">
            <FaLinkedinIn className="social-icon" />
            <span>LinkedIn</span>
          </a>
          <a href="#" className="social-item github">
            <FaGithub className="social-icon" />
            <span>GitHub</span>
          </a>
          <a href="#" className="social-item instagram">
            <FaInstagram className="social-icon" />
            <span>Instagram</span>
          </a>
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