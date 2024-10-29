import React from 'react';
import { mockProjects } from '../temporary/mockData';
import './Projects.css';


function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {mockProjects.map((project) => (
          <li key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              Project Link
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
