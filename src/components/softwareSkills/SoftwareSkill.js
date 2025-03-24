import React from "react";
import "./SoftwareSkill.scss";
import { skillsSection } from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.technologySkills.map((skill, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skill.name}
              >
                <img src={skill.image} alt={skill.name} />
                <p>{skill.name}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
