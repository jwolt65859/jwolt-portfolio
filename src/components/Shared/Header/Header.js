import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header-inner">
      <nav>
        <ul>
          <li>
            <a href="#home">Home </a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#blog">Blogs</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>{" "}
      </nav>{" "}
    </div>
  );
};

export default Header;
