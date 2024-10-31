// src/pages/Contact.js

import React, { useEffect, useRef } from 'react';
import './Contact.css';

function Contact() {
  const contentRef = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          contentRef.current.classList.add('visible'); // Add entry animation
          contentRef.current.classList.remove('exit'); // Remove exit animation if any
        } else {
          contentRef.current.classList.add('exit'); // Add exit animation
          contentRef.current.classList.remove('visible'); // Remove entry animation if any
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Trigger animation at 50% visibility
    });

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (contentRef.current) observer.unobserve(contentRef.current);
    };
  }, []);

  return (
    <div className="contact-section">
      <div className="contact-content" ref={contentRef}>
        <p className="small-text">Got a project / collab in mind?</p>
        <h2 className="main-text">Let's Connect</h2>
        <div className="message-button">
          <a href="#contact-form">Write a Message</a>
          <i className="fas fa-arrow-up-right arrow-icon"></i>
        </div>
      </div>
    </div>
  );
}

export default Contact;
