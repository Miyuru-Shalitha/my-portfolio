import React from "react";

function AboutParagraph({ paragraphText }) {
  return (
    <div className="about__paragraph-container">
      <p className="about__paragraph">{paragraphText}</p>
    </div>
  );
}

export default AboutParagraph;
