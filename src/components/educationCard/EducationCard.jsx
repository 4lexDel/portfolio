import React, {createRef, useContext} from "react";
import {Fade, Slide} from "react-reveal";
import "./EducationCard.scss";
import StyleContext from "../../contexts/StyleContext";
import { useTranslation } from "react-i18next";

export default function EducationCard({school}) {
  const { t } = useTranslation();

  const imgRef = createRef();

  const {isDark} = useContext(StyleContext);

  if (!school.logo)
    console.error(`Image of ${school.name} is missing in education section`);
  return (
    <div>
      <Fade left duration={1000}>
        <div className="education-card">
          {school.logo && (
            <div className="education-card-left">
              <img
                crossOrigin={"anonymous"}
                ref={imgRef}
                className="education-roundedimg"
                src={school.logo}
                alt={school.schoolName}
              />
            </div>
          )}
          <div className="education-card-right">
            <h5 className="education-text-school">{t(`educationInfo.${school.identifier}.name`)}</h5>

            <div className="education-text-details">
              <h5
                className={
                  isDark
                    ? "dark-mode education-text-subHeader"
                    : "education-text-subHeader"
                }
              >
                {t(`educationInfo.${school.identifier}.subHeader`)}
              </h5>
              <p
                className={`${
                  isDark ? "dark-mode" : ""
                } education-text-duration`}
              >
                {t(`educationInfo.${school.identifier}.duration`)}
              </p>
              <p className="education-text-desc">{t(`educationInfo.${school.identifier}`.desc)}</p>
              {school.link && 
                <a href={school.link.url} target="_blank" rel="noreferrer" >{t(`educationInfo.${school.identifier}.link.name`)}</a>
              }
            </div>
          </div>
        </div>
      </Fade>
      <Slide left duration={2000}>
        <div className="education-card-border"></div>
      </Slide>
    </div>
  );
}
