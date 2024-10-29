import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/Expertise">Expertise</Link></li>
        <li><Link to="/Experience">Experience</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
