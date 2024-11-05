import React from "react";
import "./Expertise.css";

function Expertise() {
  return (
    <div className="expertise-container">
      <div className="profile-card">
        <img src="path-to-your-image" alt="Profile" className="profile-image" />
        <p>
          A Software Engineer who has developed countless innovative solutions.
        </p>
        <div className="social-icons">
          <i className="fab fa-dribbble"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-github"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </div>

      <div className="expertise-content">
        <div className="header">
          <h1>Software</h1>
          <h2>Engineer.</h2>
          <p>
            Passionate about creating intuitive and engaging user experiences...
          </p>
        </div>
        <div className="statistics">
          <div className="stat-item">
            <h2>+12</h2>
            <p>Years of Experience</p>
          </div>
          <div className="stat-item">
            <h2>+46</h2>
            <p>Projects Completed</p>
          </div>
          <div className="stat-item">
            <h2>+20</h2>
            <p>Worldwide Clients</p>
          </div>
        </div>
        <div className="expertise-cards">
          <div className="expertise-card">
            <h3>Machine Learning Engineering</h3>
            <div className="tool-icons">
              <i className="fab fa-python"></i>
              <i className="fab fa-tensorflow"></i>
              <i className="fab fa-r-project"></i>
              <i className="fas fa-brain"></i>
            </div>
          </div>

          <div className="expertise-card">
            <h3>Software Engineering</h3>
            <div className="tool-icons">
              <i className="fab fa-react"></i>
              <i className="fab fa-node-js"></i>
              <i className="fab fa-git-alt"></i>
              <i className="fab fa-docker"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
