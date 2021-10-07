import React from "react";

function Project({ imageUrl, title, description }) {
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
        <h1>Project Card Back</h1>
      </div>
    </div>
  );
}

export default Project;
