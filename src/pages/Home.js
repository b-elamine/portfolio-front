// src/pages/Home.js
import React, { useState, useEffect, useRef } from 'react';
import './Home.css';

function Home() {
  const [lightPosition, setLightPosition] = useState({ x: "0px", y: "0px" });
  const [isSmooth, setIsSmooth] = useState(false);
  const [isSmall, setIsSmall] = useState(true);
  const textRef = useRef(null);
  const inactivityTimeout = useRef(null);

  const [typedText, setTypedText] = useState("");
  const fullText = "Full-Stack Dev with MLOps Expertise";
  
  useEffect(() => {
    setTypedText(""); 
    let index = 0;
    let currentText = ""; 
  
    const typeInterval = setInterval(() => {
      if (index < fullText.length) {
        currentText += fullText[index]; 
        setTypedText(currentText); 
        index++;
      } else {
        clearInterval(typeInterval); 
      }
    }, 80); // Typing speed
  
    return () => clearInterval(typeInterval); 
  }, []);
  
  
  

  useEffect(() => {
    if (textRef.current) {
      const textBounds = textRef.current.getBoundingClientRect();
      setLightPosition({
        x: `${textBounds.left + 40}px`,
        y: `${textBounds.top + textBounds.height / 12}px`,
      });
      setIsSmall(false);
    }

    const handleMouseMove = (e) => {
      setIsSmooth(false);
      setIsSmall(true);
      setLightPosition({ x: `${e.clientX}px`, y: `${e.clientY}px` });

      clearTimeout(inactivityTimeout.current);
      inactivityTimeout.current = setTimeout(() => {
        if (textRef.current) {
          setIsSmooth(true);
          setIsSmall(false);
          const textBounds = textRef.current.getBoundingClientRect();
          setLightPosition({
            x: `${textBounds.left + 40}px`,
            y: `${textBounds.top + textBounds.height / 12}px`,
          });
        }
      }, 800);
    };

    const handleMouseLeave = () => {
      if (textRef.current) {
        setIsSmall(false);
        const textBounds = textRef.current.getBoundingClientRect();
        setLightPosition({
          x: `${textBounds.left + 40}px`,
          y: `${textBounds.top + textBounds.height / 12}px`,
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
      <div
        className={`light-source ${isSmooth ? "smooth" : ""} ${isSmall ? "small" : ""}`}
        style={{
          top: lightPosition.y,
          left: lightPosition.x,
        }}
      ></div>

      <div className="intro-text" ref={textRef}>
        <h1>Amine Bechorfa</h1>
        <p className="typed-text">
          <span className="console-prompt">b-elamine:~$</span> {typedText}
          <span className="cursor">!</span>
        </p>
      </div>
    </div>
  );
}

export default Home;
