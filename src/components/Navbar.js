import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault(); 
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to target
    }
    setMenuOpen(false); 
  };

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
        <li><a href="#home" onClick={(e) => handleSmoothScroll(e, "home")}>Home</a></li>
        <li><a href="#expertise" onClick={(e) => handleSmoothScroll(e, "expertise")}>Expertise</a></li>
        <li><a href="#projects" onClick={(e) => handleSmoothScroll(e, "projects")}>Projects</a></li>
        <li><a href="#experience" onClick={(e) => handleSmoothScroll(e, "experience")}>Experience</a></li>
        <li><a href="#contact" onClick={(e) => handleSmoothScroll(e, "contact")}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
