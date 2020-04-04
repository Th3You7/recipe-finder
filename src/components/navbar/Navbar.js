import React from "react";
import { Link } from "react-router-dom";
import Logo from "./logo.png";
import "./Navbar.css";

function NavBar() {
  return (
    <nav>
      <img src={Logo} alt="logo" />
      <div className="links">
        <Link to="/recipe-finder">Find Recipes</Link>
        <Link to="/test">Test</Link>
      </div>
    </nav>
  );
}

export default NavBar;
