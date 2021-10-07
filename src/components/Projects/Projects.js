import React from "react";
import Project from "./Project";

function Projects() {
  return (
    <section id="projects" className="projects u-margin-top-medium">
      <div className="projects__heading">
        <h2 className="heading-secondary">Projects</h2>
      </div>

      <div className="projects__container u-margin-top-medium">
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </section>
  );
}

export default Projects;
