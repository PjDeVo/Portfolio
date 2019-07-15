import React, { Component } from "react";

import coursescheduler from "../style/Images/Background-Images/course-scheduler.png";
import dailySmarty from "../style/Images/Background-Images/dailysmarty.png";
import devfries from "../style/Images/Background-Images/devcamp-fries.png";
import ecom from "../style/Images/Background-Images/ecom-site.png";
import madlibs from "../style/Images/Background-Images/madlibs.png";
import propmanagement from "../style/Images/Background-Images/property-management.png";

class Projects extends React.Component {
  render() {
    return (
      <div className="projects">
        <div className="projects-header"> Projects</div>
        <div className="projects-row-one">
          <a
            target="blank"
            className="hvr-bob"
            href="https://bottegascheduleapp.herokuapp.com/"
          >
            <img src={coursescheduler} />
          </a>
          <a
            target="blank"
            className="hvr-bob"
            href="https://daily-smarty-ui-bottegga.herokuapp.com/"
          >
            <img src={dailySmarty} />
          </a>
          <a className="hvr-bob">
            <img src={devfries} />
          </a>
        </div>

        <div className="projects-row-two">
          <a
            target="blank"
            className="hvr-bob"
            href="https://ecom-bottega-app.herokuapp.com/"
          >
            <img src={ecom} />
          </a>
          <a
            target="blank"
            className="hvr-bob"
            href="https://github.com/PjDeVo/bottega-madlibs"
          >
            <img src={madlibs} />
          </a>
          <a
            target="blank"
            className="hvr-bob"
            href="https://github.com/PjDeVo/Prop-management-app"
          >
            <img src={propmanagement} />
          </a>
        </div>
      </div>
    );
  }
}

export default Projects;
