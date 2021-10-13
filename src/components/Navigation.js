import React, { useRef } from "react";

function Navigation() {
  const navEl = useRef(null);

  const handleClick = () => {
    navEl.current.classList.remove("nav-animation");

    // if (navEl !== null) {
    navEl.current.classList.add("nav-animation");
    // }

    setTimeout(() => {
      navEl.current.classList.remove("nav-animation");
    }, 2100); // The animation is 2s long.
  };

  return (
    <nav ref={navEl} className="nav" onClick={handleClick}>
      <ul className="nav__list">
        <li>
          <a href="#header">Home</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
