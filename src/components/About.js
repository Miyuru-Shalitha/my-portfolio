import React from "react";

function About() {
  return (
    <section id="about" className="about u-margin-top-medium">
      <div className="about__heading">
        <h2 className="heading-secondary">About me</h2>
      </div>

      <div className="about__content u-margin-top-medium">
        <div className="about__left">
          <figure className="about__image-container">
            <img
              src="https://images.unsplash.com/photo-1633692301992-d27ca897ad65?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=765&q=80"
              alt="Portfolio owner"
              className="about__image"
            />
            <figcaption className="about__caption">Miyuru Shalitha</figcaption>
          </figure>
        </div>

        <div className="about__description">
          <div className="about__paragraph-container">
            <p className="about__paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut
            </p>
          </div>

          <div className="about__paragraph-container">
            <p className="about__paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut
            </p>
          </div>

          <div className="about__paragraph-container">
            <p className="about__paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
