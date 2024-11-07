import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";

function Contact() {
  const contentRef = useRef(null);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    // Function to generate particles
    const generateParticle = () => {
      const particleContainer = document.getElementById("particle-container");

      // Create a new particle element
      const particle = document.createElement("div");
      particle.classList.add("particle");

      // Set random properties for position and animation
      particle.style.left = `${Math.random() * 100}%`; // Random horizontal position
      particle.style.animationDuration = `${3 + Math.random() * 5}s`; // Random duration between 3s and 8s
      particle.style.transform = `scale(${0.5 + Math.random()})`; // Random scaling for size variety

      // Add particle to the container
      particleContainer.appendChild(particle);

      // Remove particle when animation ends to avoid memory leaks
      particle.addEventListener("animationend", () => {
        particle.remove(); // Remove from the DOM after animation ends
      });
    };

    // Start generating particles at intervals
    const particleInterval = setInterval(generateParticle, 300); // Generate a particle every 300ms

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          contentRef.current.classList.add("visible");
          contentRef.current.classList.remove("exit");
        } else {
          contentRef.current.classList.add("exit");
          contentRef.current.classList.remove("visible");
          setClicked(false); // Reset design when out of view
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.6,
    });

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      // Clean up particle interval and observer
      clearInterval(particleInterval);
      if (contentRef.current) observer.unobserve(contentRef.current);
    };
  }, []);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div className="contact-section">
      {/* Particle Container */}
      <div id="particle-container"></div>

      <div className="moving-lines"></div>
      <div
        className={`contact-content ${clicked ? "clicked" : ""}`}
        ref={contentRef}
      >
        <p className="small-text">Got a project / collab in mind?</p>
        <h2 className="main-text">Let's Connect</h2>
        <div className="message-button" onClick={handleClick}>
          <span>Make Contact</span>
        </div>
        {clicked && (
          <div className="contact-details">
            <div className="contact-info">
              <h2>Drop me a line !</h2>
              <p>
                Have some big ideas? Reach out and let's discuss how we can
                bring them to life!
              </p>
              <p>
                <strong>Email:</strong> m.bechorfa@gmail.com
              </p>
              <p>
                <strong>Follow:</strong> <a href="#instagram">Instagram</a> |{" "}
                <a href="#linkedin">LinkedIn</a>
              </p>
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
