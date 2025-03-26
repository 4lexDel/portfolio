import React, {useContext} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import {projectSections} from "../../portfolio";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./Projects.scss";

export default function Projects() {
  const responsive = {
    desktop: {
      breakpoint: {max: 3000, min: 1024},
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: {max: 1024, min: 760},
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: {max: 760, min: 0},
      items: 1,
      slidesToSlide: 1,
    }
  };

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
            <div key={i}>
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
                <Carousel
                  swipeable={true}
                  draggable={true}
                  showDots={true}
                  responsive={responsive}
                  infinite={true}
                  autoPlaySpeed={1000}
                  keyBoardControl={true}
                  customTransition="all .5s"
                  transitionDuration={500}
                  containerClass="carousel-container"
                  dotListClass="custom-dot-list-style"
                  // centerMode={true}
                >
                  {projectSection.projects.map((project, i) => (
                    <ProjectCard
                      key={i}
                      project={project}
                      isDark={isDark}
                      openUrlInNewTab={openUrlInNewTab}
                    />
                  ))}
                </Carousel>
              </div>
            </div>
          );
        })}
      </div>
    </Fade>
  );
}
