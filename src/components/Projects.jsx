import React from "react";
import "../css/projects.css";
const projects = [
];

export function Project(props) {
   // const navigate = useNavigation()
    if(!(projects.length>0)) return "";
  return (
    <div id="projects">
      <div className="container">
        <h1 className="portfolio-title">
          <span className="highlight">Projects </span>
        </h1>
        <p className="portfolio-subtitle">
          Analyze <span className="highlight">→ </span> Code,{" "}
          <span className="highlight">→ </span> Customize{" "}
          <span className="highlight">→ </span> Deploy high-performance web
          applications in record time.
        </p>
      </div>

      <div className="project-section">
        <div className="project-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <a
                href={project.link}
                alt="projet-url"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={project.link} alt="" rel="noopener noreferrer" />
                <div className="project-content">
                  <h3>{project.title}</h3>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
