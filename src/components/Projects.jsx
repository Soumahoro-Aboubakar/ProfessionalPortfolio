import React from "react";
import "../css/projects.css";
import rimcovAppImage from "../assets/image_background.PNG";
import olympicRing from "../assets/olympics_ring.PNG";

const projects = [
  {
    title: "Rimcov",
    link: "https://rimcov.onrender.com",
    image: rimcovAppImage,
  },
  {
    title: "Olympic Medal",
    link: "https://grafikart.github.io/olympics-medals/",
    image: olympicRing,
  },
];

export function Project(props) {
  // const navigate = useNavigation()
  if (!(projects.length > 0)) return "";
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
                <img src={project.image} alt="" rel="noopener noreferrer" />
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
