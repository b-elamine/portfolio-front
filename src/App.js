import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Expertise from './pages/Expertise';
import Experience from './pages/Experience'
import Contact from './pages/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
       <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience/>} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
