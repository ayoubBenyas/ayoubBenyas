import React from "react";
import "./StartupProjects.css";
import { bigProjects } from "../../portfolio";
import { Fade } from "react-reveal";

export default function StartupProject() {
  function openProjectInNewWindow(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <Fade bottom duration={1000} distance="20px">
    <div className="main" id="projects">
      <div>
        <h1 className="skills-heading">{bigProjects.title}</h1>
        <p className="subTitle project-subtitle">{bigProjects.subtitle}</p>
        <div class="row">
            {bigProjects.projects.map(project => {
              return (
                <div class="col s12 m6 l4">
                  <div class="card">
                    <div class="card-image">
                      <img src={project.image}/>
                    </div>
                    <div class="card-action">
                      {project.title}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
    </Fade>
  );
}
