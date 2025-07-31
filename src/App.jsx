import React, { useState } from 'react';
import './App.css';
import WelcomeScreen from './components/WelcomeScreen';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import WidgetsPanel from './components/WidgetsPanel';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';


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
        <br/> <br/>
        <WidgetsPanel/>
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;