import React, { useContext } from "react";
import "./SoftwareSkill.scss";
import { skillsContent } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import { useTranslation } from "react-i18next";

export default function SoftwareSkill() {
  const { t } = useTranslation();

  const {isDark} = useContext(StyleContext);

  return (
    <div>
      <div className="software-skills-main-div">
        <div className="dev-skills-list">
          {skillsContent.skillsSections.map((skillsSection, i) => (
            <div className="skill-section" key={i}>
              <p
                className={
                  isDark
                    ? "dark-mode subTitle skills-text-subtitle"
                    : "subTitle skills-text-subtitle"
                }
              >
                {t(`skillsContent.${skillsSection.identifier}`)}
              </p>
              {
                skillsSection.data.map((skillDetail, j) => {
                  return (
                    <div
                      key={j}
                      className="software-skill-inline"
                      name={skillDetail.name}
                    >
                      <img src={skillDetail.image} alt={skillDetail.name} />
                      <p>{skillDetail.name}</p>
                    </div>
                  );
                })
              }
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
