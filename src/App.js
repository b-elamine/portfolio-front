// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import SideNav from './components/Sidenav';
import Home from './pages/Home';
import CustomCursor from './components/CustomCursor';
import './App.css';

function App() {
  return (
    <div className="app">
      <CustomCursor/>
      <Navbar />
      <SideNav />
      <div className="grid-overlay"></div> {/* Add grid overlay */}

      <section id="home" className="section">
        <Home />
      </section>


      <section id="expertise" className="section">
        <h2>Expertise</h2>
        {/* Expertise content */}
      </section>
   
      <section id="projects" className="section">
        <h2>Projects</h2>
        {/* Project content */}
      </section>

      <section id="experience" className="section">
        <h2>Experience</h2>
        {/* Experience content */}
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        {/* Contact content */}
      </section>
    </div>
  );
}

export default App;
