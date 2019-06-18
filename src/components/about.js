import React, { Component } from "react";
import javascript from "../../src/style/Images/Background-Images/javascript.png";
import html from "../../src/style/Images/Background-Images/html.jpg";

class About extends React.Component {
  render() {
    let backgroundStyle = {
      backgroundImage: "../../src/style/Images/Background-Images/html.jpg"
    };
    return (
      <div className="about">
        <div className="about-pat">About Pat</div>

        <div className="top-side-wrapper">
          <div className="image-container">
            <image> as</image>
            <image
              src={require("../../src/style/Images/Background-Images/html.jpg")}
            >
              {" "}
              as
            </image>
            <image src={html}> as</image>
            <image src={javascript}> Hey There</image>
            <image src="http//via.placeholder.com/200x200"> </image>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
