import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";

export default function socialMedia() {
  return (
    <div className="social-media-div">
      <a href={socialMediaLinks.facebook} className="icon-button facebook" target="_blank">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href={socialMediaLinks.github} className="icon-button github" target="_blank">
        <i className="fab fa-github"></i>
      </a>
      <a href={socialMediaLinks.linkedin} className="icon-button linkedin" target="_blank">
        <i className="fab fa-linkedin-in"></i>
      </a>
      <a href={`mailto:${socialMediaLinks.gmail}`} className="icon-button google" target="_blank">
        <i className="fab fa-google"></i>
      </a>
    </div>
  );
}

      /*<a href={socialMediaLinks.gitlab} className="icon-button gitlab" target="_blank">
        <i className="fab fa-gitlab"></i>
        <span></span>
      </a>*/