import React, { useState, useEffect } from "react";
import "./Project.css";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";
import { openSource } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Projects() {
  const [repos, setrepos] = useState([]);

  useEffect(() => {
    getRepoData();
  }, []);

  function getRepoData() {
    

    fetch(`https://api.github.com/users/${openSource.githubUserName}/repos`)
      .then(res => res.json())
        .then(
          (result) => {
            setreposFunction(result);
            console.log(result);
            //alert(JSON.stringify(result))
          });  
  }

  function setreposFunction(array) {
    setrepos(array);
  }

  return (
    <Fade bottom duration={1000} distance="20px">
    <div className="main" id="opensource">
      <h1 className="project-title">Open Source Projects</h1>
      <div className="repo-cards-div-main">
        {repos.map((r, i) => {
          if( !r.fork ){
            return <GithubRepoCard repo={r} />;
          }
        })}
      </div>
      <Button text={"More Projects"} className="project-button" href="https://github.com/ayoubBenyas" newTab={true} />
    </div>
    </Fade>
  );
}
