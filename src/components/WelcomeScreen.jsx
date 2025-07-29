import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import '../styles/welcome.css';

const WelcomeScreen = ({ onEnter }) => {
  const containerRef = useRef();
  const buttonRef = useRef();
  const titleRef = useRef();

  useEffect(() => {
    // Clear the title content
    titleRef.current.innerHTML = '';

    // Create SERGE letters
    const sergeText = "SERGE";
    const sergeLetters = [];
    
    for (let i = 0; i < sergeText.length; i++) {
      const span = document.createElement('span');
      span.textContent = sergeText[i];
      span.style.display = 'inline-block';
      span.style.opacity = '0';
      span.style.transform = 'translateY(20px)';
      titleRef.current.appendChild(span);
      sergeLetters.push(span);
    }

    // Create VERSE letters with red accent
    const verseText = "VERSE";
    const verseLetters = [];
    
    for (let i = 0; i < verseText.length; i++) {
      const span = document.createElement('span');
      span.textContent = verseText[i];
      span.style.display = 'inline-block';
      span.style.opacity = '0';
      span.style.transform = 'translateY(20px)';
      span.className = 'cyber-accent';
      titleRef.current.appendChild(span);
      verseLetters.push(span);
    }

    // Animate SERGE letters
    gsap.to(sergeLetters, {
      duration: 0.8,
      opacity: 1,
      y: 0,
      stagger: 0.05,
      ease: "power3.out"
    });

    // Animate VERSE letters after SERGE
    gsap.to(verseLetters, {
      duration: 0.8,
      opacity: 1,
      y: 0,
      stagger: 0.05,
      ease: "power3.out",
      delay: sergeText.length * 0.05 + 0.1
    });

    // Button animation
    gsap.to(buttonRef.current, {
      scale: 1.03,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 2
    });
  }, []);

  return (
    <div className="cyber-container" ref={containerRef}>
      <div className="cyber-content">
        <h1 className="cyber-title" ref={titleRef}></h1>
        <button 
          ref={buttonRef}
          className="cyber-btn"
          onClick={onEnter}
        >
          ENTER
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;