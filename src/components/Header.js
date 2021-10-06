import React from "react";
import resume from "../assets/resume/resume.txt";

function Header() {
  return (
    <header className="header">
      <div className="header__text-box u-margin-bottom-medium">
        <h1 className="heading-primary">Hi! I Am Miyuru Shalitha</h1>
      </div>

      <a download="resume.txt" href={resume} className="btn btn--white">
        Download Resume
      </a>

      {/* Add linkdin and github icons */}
    </header>
  );
}

export default Header;
