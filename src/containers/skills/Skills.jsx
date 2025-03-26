import React, { useContext } from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skillsContent } from "../../portfolio";
import { Fade } from "react-reveal";
import codingPerson from "../../assets/lottie/developer";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";
import { useTranslation } from "react-i18next";

export default function Skills() {
  const { t } = useTranslation();

  const { isDark } = useContext(StyleContext);

  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <h1
        className={isDark ? "dark-mode skills-heading" : "skills-heading"}
      >
        {t(skillsContent.title)}{" "}
      </h1>
      <div className="skills-main-div">
        <Fade left duration={1000}>
          <div className="skills-image-div">
            <DisplayLottie animationData={codingPerson} />
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {t(skillsContent.subTitle)}
            </p>
            <SoftwareSkill />
            <div>
              {skillsContent.skills.map((skills, i) => {
                return (
                  <p
                    key={i}
                    className={
                      isDark
                        ? "dark-mode subTitle skills-text"
                        : "subTitle skills-text"
                    }
                  >
                    {skills}
                  </p>
                );
              })}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
