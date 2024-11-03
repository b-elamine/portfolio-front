import React, { useEffect, useRef, useState } from 'react';
import './Contact.css';

function Contact() {
  const contentRef = useRef(null);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          contentRef.current.classList.add('visible');
          contentRef.current.classList.remove('exit');
        } else {
          contentRef.current.classList.add('exit');
          contentRef.current.classList.remove('visible');
          setClicked(false); // Reset design when out of view
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (contentRef.current) observer.unobserve(contentRef.current);
    };
  }, []);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div className="contact-section">
      <div className={`contact-content ${clicked ? 'clicked' : ''}`} ref={contentRef}>
        <p className="small-text">Got a project / collab in mind?</p>
        <h2 className="main-text">Let's Connect</h2>
        <div className="message-button" onClick={handleClick}>
          <span>Make Contact</span>
        </div>
        {clicked && (
          <div className="contact-details">
            <div className="contact-info">
              <h2>Drop me a line !</h2>
              <p>Have some big ideas? Reach out and let's discuss how we can bring them to life!</p>
              <p><strong>Email:</strong> m.bechorfa@gmail.com</p>
              <p><strong>Follow:</strong> <a href="#instagram">Instagram</a> | <a href="#linkedin">LinkedIn</a></p>
            </div>
            <div className="contact-form">
              <form>
                <label>First Name</label>
                <input type="text" placeholder="Your Name" />
                <label>Email</label>
                <input type="email" placeholder="Your Email" />
                <label>Message</label>
                <textarea placeholder="Type your message here..."></textarea>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;
