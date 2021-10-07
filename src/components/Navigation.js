import React from "react";

function Navigation() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item--active">
          <a href="#header">Home</a>
        </li>
        <li>
          <a href="#header">Projects</a>
        </li>
        <li>
          <a href="#header">About</a>
        </li>
        <li>
          <a href="#header">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
