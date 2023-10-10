import React from "react";
import logo from "../images/Logo.svg";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo" />
      <nav>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Menu</a>
        </li>
        <li>
          <a href="/">Reservations</a>
        </li>
        <li>
          <a href="/">Order Online</a>
        </li>
        <li>
          <a href="/">Login</a>
        </li>
      </nav>
    </header>
  );
};

export default Header;
