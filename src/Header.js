import React from "react";

const Header = () => {
  return (
    <header className="header">
      <h2 className="logo">My Portfolio</h2>
      <nav>
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;

