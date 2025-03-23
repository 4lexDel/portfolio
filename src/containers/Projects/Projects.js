import React, {useContext} from "react";
import "./Projects.scss";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import {projectSections} from "../../portfolio";

export default function Projects() {
  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  const {isDark} = useContext(StyleContext);

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        {projectSections.map((projectSection, i) => {
          return (
            <div>
              <h1 className="skills-heading">{projectSection.title}</h1>
              <p
                className={
                  isDark
                    ? "dark-mode project-subtitle"
                    : "subTitle project-subtitle"
                }
              >
                {projectSection.subtitle}
              </p>

              <div className="projects-container">
                {projectSection.projects.map((project, i) => {
                  return (
                    <div
                      key={i}
                      className={
                        isDark
                          ? "dark-mode project-card project-card-dark"
                          : "project-card project-card-light"
                      }
                    >
                      {project.image ? (
                        <div className="project-image">
                          <img
                            src={project.image}
                            alt={project.projectName}
                            className="card-image"
                          ></img>
                        </div>
                      ) : null}
                      <div className="project-detail">
                        <h5
                          className={
                            isDark ? "dark-mode card-title" : "card-title"
                          }
                        >
                          {project.projectName}
                        </h5>
                        <p
                          className={
                            isDark ? "dark-mode card-subtitle" : "card-subtitle"
                          }
                        >
                          {project.projectDesc}
                        </p>
                        {project.footerLink ? (
                          <div className="project-card-footer">
                            {project.footerLink.map((link, i) => {
                              return (
                                <span
                                  key={i}
                                  className={
                                    isDark
                                      ? "dark-mode project-tag"
                                      : "project-tag"
                                  }
                                  onClick={() => openUrlInNewTab(link.url)}
                                >
                                  {link.name}
                                </span>
                              );
                            })}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </Fade>
  );
}
