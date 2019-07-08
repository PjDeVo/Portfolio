import React from "react";
import javascript from "../../src/style/Images/Background-Images/javascript.png";
import html from "../../src/style/Images/Background-Images/html.jpg";
import react from "../../src/style/Images/Background-Images/react.png";
import css from "../../src/style/Images/Background-Images/css.png";
import Pat from "../style/Images/Background-Images/pat.jpg";

class About extends React.Component {
  render() {
    let backgroundStyle = {
      backgroundImage: "../../src/style/Images/Background-Images/html.jpg"
    };
    return (
      <div className="about" id='about'>
        <div className="about-pat">About</div>

        <div className="top-side-wrapper">
          <div className="image-container">
            <img src={javascript} className="javascript-image" />
          </div>
          <div className="image-container">
            <img className="html-image" src={html} />
          </div>
          <div className="image-container">
            <img src={react} className="react-image" />
          </div>
          <div className="image-container">
            <img src={css} className="css-image" />
          </div>
        </div>

        <div className="about-photo">
          <div className="my-name"> Hi, I'm Pat </div>
          <img src={Pat} />
          <div className="introduction"> Allow Me To Introduce Myself </div>
        </div>
        <div className="bio-wrapper">
          <div className="bio-description">
            Hello, My name is Pat. I am a Front End developer focusing primarily
            in React JS. Currently I am working full time in customer service I
            am looking for oppurtuities to build projects, expand my knowledge,
            and eventually work full time as a developer. Outside of work my
            hobbies include being a full time dog dad and practicing and
            competing in the mixed martial art of Jiu Jitsu. I look foward to
            challenges, welcome tough projects, and love learning new things.
            Let's work together and make something awesome...
          </div>
        </div>
      </div>
    );
  }
}

export default About;
