// src/components/CustomCursor.js
import React, { useState, useEffect, useRef } from 'react';
import './CustomCursor.css';

function CustomCursor() {
  const [ballPosition, setBallPosition] = useState({ x: 0, y: 0 });
  const circlePosition = useRef({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const circleRef = useRef(null);
  const ballRef = useRef(null);
  const [isInactive, setIsInactive] = useState(false);
  const inactivityTimeout = useRef(null);

  useEffect(() => {

    // Update ball position immediately on mouse move
    const handleMouseMove = (e) => {
      setBallPosition({ x: e.clientX, y: e.clientY });
      setIsInactive(false);

      clearTimeout(inactivityTimeout.current);
      inactivityTimeout.current = setTimeout(() => {
        setIsInactive(true); // Hide the circle after 0.8 seconds of inactivity
      }, 800);
    };

    

    

    // Detect hover over clickable elements
    const handleMouseEnter = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.classList.contains('clickable')) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseEnter);
    window.addEventListener('mouseout', handleMouseLeave);

    // Smoothly update circle position using requestAnimationFrame
    const updateCirclePosition = () => {
      const xDiff = ballPosition.x - circlePosition.current.x;
      const yDiff = ballPosition.y - circlePosition.current.y;

      // Check if circle is close enough to the cursor, then snap to position
      const threshold = 0.5; // Stop movement if circle is within this distance from cursor
      if (Math.abs(xDiff) > threshold || Math.abs(yDiff) > threshold) {
        // Continue moving circle towards the cursor
        circlePosition.current.x += xDiff ;
        circlePosition.current.y += yDiff ;
      } else {
        // Snap circle directly to cursor position
        circlePosition.current.x = ballPosition.x;
        circlePosition.current.y = ballPosition.y;
      }

      if (circleRef.current) {
        circleRef.current.style.transform = `translate(${circlePosition.current.x}px, ${circlePosition.current.y}px) translate(-50%, -50%)`;
      }

      requestAnimationFrame(updateCirclePosition);
    };

    updateCirclePosition(); // Start the smooth update loop

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseEnter);
      window.removeEventListener('mouseout', handleMouseLeave);
    };
  }, [ballPosition]);

  return (
    <div>
      <div
        ref={circleRef}
        className={`cursor-circle ${isHovering || isInactive ? 'hidden' : ''}`} // Hide if inactive or hovering over clickable
      ></div>
      <div
        ref={ballRef}
        className={`cursor-ball ${isHovering ? 'large' : ''}`}
        style={{
          transform: `translate(${ballPosition.x}px, ${ballPosition.y}px) translate(-50%, -50%)`,
        }}
      ></div>
    </div>
  );
}

export default CustomCursor;