import React from "react";
import "./Education.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import { educationInfo } from "../../portfolio";
import { useTranslation } from "react-i18next";

export default function Education() {
  const { t } = useTranslation();

  return (
    <div className="education-section" id="education">
      <h1 className="education-heading">{t(educationInfo.title)}</h1>
      <div className="education-card-container">
        {educationInfo.schools.map((school, index) => (
          <EducationCard key={index} school={school} />
        ))}
      </div>
    </div>
  );
}
