import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Add or remove class from body to prevent scroll
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [menuOpen]);

  return (
    <nav className="navbar">
      <h1 className="logo">b-<span className="highlight">elamine</span>.</h1>
      <div className="hamburger" onClick={toggleMenu}>
        ☰ {/* Hamburger icon */}
      </div>
      <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/expertise">Expertise</a></li>
        <li><a href="/experience">Experience</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
