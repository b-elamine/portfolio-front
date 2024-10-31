import React, { useState, useEffect, useMemo } from 'react';
import './Sidenav.css';

function Sidenav() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Wrap sections array in useMemo to prevent recreating on every render
  const sections = useMemo(() => ["home", "expertise", "projects", "experience", "contact"], []);

  useEffect(() => {
    const handleScroll = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sections.indexOf(entry.target.id);
          setActiveIndex(index);
        }
      });
    };

    // Setting up IntersectionObserver
    const observer = new IntersectionObserver(handleScroll, {
      threshold: 0.6,
    });

    // Observe each section
    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) observer.observe(section);
    });

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, [sections]);
  
  const handleClick = (index) => {
    document.getElementById(sections[index]).scrollIntoView({
      behavior: "smooth",
    });

    setTimeout(() => {
      setActiveIndex(index);
    }, 400); 
  };

  return (
    <div className="side-nav">
      {sections.map((section, index) => (
        <div
          key={section}
          className={`nav-item ${index === activeIndex ? "active" : ""}`}
          onClick={() => handleClick(index)}
        >
          <div className="shape"></div>
        </div>
      ))}
    </div>
  );
}

export default Sidenav;
