import React from "react";
import "./Education.css";
import EducationCard from "../../components/educationCard/EducationCard";
import { educationSection } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Education() {
  function openUrlInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }
  return (
    <Fade bottom duration={1000} distance="20px">
    <div className="main" id="education">
      <div className="education-main-div">
        <div className="education-header">
          <h1 className="heading education-heading">{educationSection.title}</h1>
          <p className="subTitle education-subtitle">{educationSection.subtitle}</p>
        </div>
        <div className="education-cards-div">
          {educationSection.educationsCards.map(card => {
            return (
              <EducationCard
                cardInfo={{
                  title: card.title,
                  description: card.subtitle,
                  image: card.image,
                  footer: card.footerLink
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
    </Fade>
  );
}
