import React, { Component } from "react";
import Navbar from "./navbar/navbar";
import Home from "./home";
import About from "./about";
import Projects from "./projects";
import Contact from "./contact";
import Footer from "./footer";

export default class App extends Component {
  render() {
    return (
      <div className="layout">
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    );
  }
}
