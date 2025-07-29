import React, { useState } from 'react';
import './App.css';
import WelcomeScreen from './components/WelcomeScreen';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Stats from './components/Stats';
import Footer from './components/Footer';
import WidgetsPanel from './components/WidgetsPanel';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [portfolioVisible, setPortfolioVisible] = useState(false);

  if (!portfolioVisible) {
    return <WelcomeScreen onEnter={() => setPortfolioVisible(true)} />;
  }

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero />
        <Stats />
        <Skills />
        <Projects />
        <WidgetsPanel/>
      </main>
      <Footer />
    </div>
  );
};

export default App;