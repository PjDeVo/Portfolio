import React, { Component } from "react";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      name: "Patrick DeVincentis"
    };
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
        <div>
          <button className="home-button"> Click Here to Meet Me</button>
        </div>
      </div>
    );
  }
}

export default Home;
