// src/pages/Home.js
import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="cube-wrapper">
        <div className="cube">
          <div className="face front"></div>
          <div className="face back"></div>
          <div className="face left"></div>
          <div className="face right"></div>
          <div className="face top"></div>
          <div className="face bottom"></div>
        </div>
      </div>
      <div className="intro-text">
        <h1>AMINE BECHORFA</h1>
        <p>Software Engineer, Front End & App Developer</p>
      </div>
    </div>
  );
}

export default Home;
