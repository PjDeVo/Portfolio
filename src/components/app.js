import React, { Component } from "react";
import Navbar from "./navbar/navbar";
import Home from "./home";
import About from "./about";
import Projects from "./projects";
import Contact from "./contact";
import Footer from "./footer";
// import scrollToComponent from "react-scroll-to-component";

export default class App extends Component {
  render() {
    return (
      <div className="layout">
        <Home section={"this.About"} />
        {/* <section
          ref={section => {
            this.About = section;
          }}
        >
          {" "} */}
        <About />
        {/* </section> */}
        <Projects class="Projects" />
        <Contact class="Contact" />
        <Footer />
      </div>
    );
  }
}
