import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";

function Contact() {
  const contentRef = useRef(null);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    let particleInterval, starInterval;

    // Function to generate particles
    const generateParticle = () => {
      const particleContainer = document.getElementById("particle-container");
      if (!particleContainer) return;

      const particle = document.createElement("div");
      particle.classList.add("particle");
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDuration = `${3 + Math.random() * 5}s`;
      particle.style.transform = `scale(${0.5 + Math.random()})`;
      particleContainer.appendChild(particle);

      particle.addEventListener("animationend", () => {
        particle.remove();
      });
    };

    // Function to generate stars
    const generateStar = () => {
      const particleContainer = document.getElementById("particle-container");
      if (!particleContainer) return;

      const star = document.createElement("div");
      star.classList.add("star");
      star.style.left = `${Math.random() * 100}%`;
      star.style.animationDuration = `${5 + Math.random() * 9}s`;
      star.style.transform = `scale(${0.3 + Math.random() * 0.7})`;
      particleContainer.appendChild(star);

      star.addEventListener("animationend", () => {
        star.remove();
      });
    };

    // Start generating particles and stars
    const startGeneratingParticles = () => {
      particleInterval = setInterval(generateParticle, 300);
      starInterval = setInterval(generateStar, 1000);
    };

    // Stop generating particles and stars
    const stopGeneratingParticles = () => {
      clearInterval(particleInterval);
      clearInterval(starInterval);
    };

    // Intersection observer to detect visibility of the section
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startGeneratingParticles();
          contentRef.current.classList.add("visible");
          contentRef.current.classList.remove("exit");
        } else {
          stopGeneratingParticles();
          contentRef.current.classList.add("exit");
          contentRef.current.classList.remove("visible");
          setClicked(false);
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
      stopGeneratingParticles();
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
              <h2>Drop me a line!</h2>
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
