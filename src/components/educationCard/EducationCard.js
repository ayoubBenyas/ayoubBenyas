import React from "react";
import "./EducationCard.css";

export default function EducationCard({ cardInfo }) {
  function openUrlInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (

      <div className="certificate-card col l2">
        <div className="certificate-detail-div" class="row">
          <div class="col s12 m4 ">
            <img src={cardInfo.image} alt="school" className="card-image"></img>
          </div>
          <div class="col s12 m8">
            <h5 className="card-title">{cardInfo.title}</h5>
            <p className="card-subtitle">{cardInfo.description}</p>
          </div>
        </div>
        <div className="certificate-card-footer">
          {cardInfo.footer.map((v, i) => {
            return (
              <p class="tooltip">{v.name} <i class={ !v.finish && "fas fa-spinner spinner"}></i>
                <span class="tooltiptext">{v.time}</span> 
              </p>
            );
          })}
        </div>
      </div>
  );
}
