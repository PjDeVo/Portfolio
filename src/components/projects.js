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
          <img src={coursescheduler} />
          <img src={dailySmarty} />
          <img src={devfries} />
        </div>

        <div className="projects-row-two">
          <img src={ecom} />
          <img src={madlibs} />
          <img src={propmanagement} />
        </div>
      </div>
    );
  }
}

export default Projects;
