// src/pages/Home.js
import React, { useState, useEffect, useRef } from 'react';
import './Home.css';

function Home() {
  const [lightPosition, setLightPosition] = useState({ x: "0px", y: "0px" });
  const [isSmooth, setIsSmooth] = useState(false); // Controls smooth return transition
  const [isVisible, setIsVisible] = useState(true);
  const textRef = useRef(null);
  const inactivityTimeout = useRef(null);

  useEffect(() => {
    // Set initial position at the end of the name
    if (textRef.current) {
      const textBounds = textRef.current.getBoundingClientRect();
      setLightPosition({
        x: `${textBounds.left + 20}px`,
        y: `${textBounds.top + textBounds.height / 6}px`
      });
    }

    const handleMouseMove = (e) => {
      setIsVisible(true);
      setIsSmooth(false); // Disable smooth transition for real-time movement
      setLightPosition({ x: `${e.clientX}px`, y: `${e.clientY}px` });

      // Reset inactivity timeout on each mouse move
      clearTimeout(inactivityTimeout.current);
      inactivityTimeout.current = setTimeout(() => {
        if (textRef.current) {
          // Enable smooth transition for returning to the initial position
          setIsSmooth(true);
          const textBounds = textRef.current.getBoundingClientRect();
          setLightPosition({
            x: `${textBounds.left + 20}px`,
            y: `${textBounds.top + textBounds.height / 6}px`
          });
        }
      }, 800); // 0.8 seconds of inactivity
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      if (textRef.current) {
        const textBounds = textRef.current.getBoundingClientRect();
        setLightPosition({
          x: `${textBounds.left + 20}px`,
          y: `${textBounds.top + textBounds.height / 6}px`
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(inactivityTimeout.current);
    };
  }, []);

  return (
    <div className="home">
      {/* Conditionally render light source based on visibility */}
      {isVisible && (
        <div
          className={`light-source ${isSmooth ? "smooth" : ""}`} // Add "smooth" class conditionally
          style={{
            top: lightPosition.y,
            left: lightPosition.x,
          }}
        ></div>
      )}

      {/* Background particles */}
      <div className="particles">
        {Array.from({ length: 30 }).map((_, index) => (
          <div key={index} className="particle"></div>
        ))}
      </div>

      {/* Text content */}
      <div className="intro-text" ref={textRef}>
        <h1>AMINE BECHORFA</h1>
        <p>Software Engineer, Front End & App Developer</p>
      </div>
    </div>
  );
}

export default Home;
