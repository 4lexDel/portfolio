import React, { useContext } from "react";
import StyleContext from "../../contexts/StyleContext";
import "./ProjectCard.scss";

export default function ProjectCard({project, openUrlInNewTab}) {
  const {isDark} = useContext(StyleContext);

  return (
    <div
      className={
        isDark
          ? "dark-mode project-card project-card-dark"
          : "project-card project-card-light"
      }
    >
      {project.image && (
        <div className="project-image">
          <img
            src={project.image}
            alt={project.projectName}
            className="card-image"
          />
        </div>
      )}

      <div className="project-detail">
        <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
          {project.projectName}
        </h5>
        <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
          {project.projectDesc}
        </p>

        {project.footerLink && (
          <div className="project-card-footer">
            {project.footerLink.map((link, i) => (
              <span
                key={i}
                className={isDark ? "dark-mode project-tag" : "project-tag"}
                onClick={() => openUrlInNewTab(link.url)}
              >
                {link.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
