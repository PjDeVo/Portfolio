import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-wrapper">
          <div className="links">
            <NavLink to="/"> Home</NavLink>
            <NavLink to="about"> About Me</NavLink>
            <NavLink to="about"> Projects</NavLink>
            <NavLink to="about"> Contact Me</NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
