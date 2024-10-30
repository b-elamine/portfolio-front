// src/pages/Home.js
import React, { useState, useEffect, useRef } from 'react';
import './Home.css';

function Home() {
  const [lightPosition, setLightPosition] = useState({ x: "0px", y: "0px" });
  const [isSmooth, setIsSmooth] = useState(false); // Controls smooth return transition
  const [isSmall, setIsSmall] = useState(true); // Controls size of the sun
  const textRef = useRef(null);
  const inactivityTimeout = useRef(null);

  useEffect(() => {
    // Set initial position at the end of the name
    if (textRef.current) {
      const textBounds = textRef.current.getBoundingClientRect();
      setLightPosition({
        x: `${textBounds.left + 40}px`,
        y: `${textBounds.top + textBounds.height / 12}px`
      });
      setIsSmall(false); // Start with the sun large in its initial position
    }

    const handleMouseMove = (e) => {
      setIsSmooth(false); // Disable smooth transition for real-time movement
      setIsSmall(true); // Make the sun smaller when it follows the mouse
      setLightPosition({ x: `${e.clientX}px`, y: `${e.clientY}px` });

      // Reset inactivity timeout on each mouse move
      clearTimeout(inactivityTimeout.current);
      inactivityTimeout.current = setTimeout(() => {
        if (textRef.current) {
          // Enable smooth transition for returning to the initial position
          setIsSmooth(true);
          setIsSmall(false); // Make the sun larger when it returns to the initial position
          const textBounds = textRef.current.getBoundingClientRect();
          setLightPosition({
            x: `${textBounds.left + 40}px`,
            y: `${textBounds.top + textBounds.height / 12}px`
          });
        }
      }, 800); // 0.8 seconds of inactivity
    };

    const handleMouseLeave = () => {
      if (textRef.current) {
        setIsSmall(false); // Make the sun larger when it returns to the initial position
        const textBounds = textRef.current.getBoundingClientRect();
        setLightPosition({
          x: `${textBounds.left + 40}px`,
          y: `${textBounds.top + textBounds.height / 12}px`
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
      {/* Light source effect */}
      <div
        className={`light-source ${isSmooth ? "smooth" : ""} ${isSmall ? "small" : ""}`}
        style={{
          top: lightPosition.y,
          left: lightPosition.x,
        }}
      ></div>

      {/* Text content */}
      <div className="intro-text" ref={textRef}>
        <h1>Amine Bechorfa</h1>
        <p>Software Engineer, Front End & App Developer</p>
      </div>
    </div>
  );
}

export default Home;
