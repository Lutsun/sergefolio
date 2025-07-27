import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
// import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Stats from './components/Stats';
// import Contact from './components/Contact';
import Footer from './components/Footer';
// import Widgets from './components/WidgetsPanel';
import WidgetsPanel from './components/WidgetsPanel';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero />
        <Stats />
        <Skills />
        <Projects />
        <WidgetsPanel/>
        {/* <About /> */}
        
          
        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
  );
};

export default App;