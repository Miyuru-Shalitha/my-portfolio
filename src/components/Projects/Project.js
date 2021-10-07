import React from "react";

function Project({ imageUrl, title, description, demoLink, githubLink }) {
  return (
    <div className="project-card">
      <div className="project-card__side project-card__side--front">
        <div className="project-card__image u-margin-bottom-small">
          <img src={imageUrl} alt="Screenshot of app" />
        </div>

        <div className="project-card__title u-margin-bottom-small">
          <h3 className="heading-tertiary u-center-heading">{title}</h3>
        </div>

        <div className="project-card__description">
          <p>{description}</p>
        </div>
      </div>

      <div className="project-card__side project-card__side--back">
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--white u-margin-bottom-small"
        >
          Demo
        </a>

        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--primary"
        >
          Github
        </a>
      </div>
    </div>
  );
}

export default Project;
