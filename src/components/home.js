import React, { Component } from "react";
import scrollToComponent from "react-scroll-to-component";
import HomeButton from "./buttons/homeButton";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      name: "Patrick DeVincentis"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    scrollToComponent(this.props.section, {
      offset: 0,
      align: "top",
      duration: 1000,
      ease: "inCirc"
    });
  }

  render() {
    let nameStyle = {
      color: "#39cddd"
    };
    let titleStyle = {
      fontSize: "26px"
    };

    return (
      <div className="home">
        <div>
          <h1>
            {" "}
            Hello My Name Is <span style={nameStyle}>{this.state.name} </span>
          </h1>
        </div>
        <div>
          <h2 style={titleStyle}>Front End React JS Developer</h2>
        </div>
<<<<<<< HEAD
        <a
          className="home-button"
          onClick={() => this.handleClick}
          href="#about"
        >
=======
        <a className="home-button" onClick={() => this.handleClick} href='#about'>
>>>>>>> cc5859b02ea6f3e39be16985e0ff73faee395215
          {" "}
          Click Here to Meet Me
        </a>
      </div>
    );
  }
}

export default Home;
