import React from "react";
import scrollToComponent from "react-scroll-to-component";

class HomeButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    scrollToComponent(this.props.referance, {
      offset: 0,
      align: "top",
      duration: 1000,
      ease: "inCirc"
    });
  }
  render() {
    return (
      <React.Fragment>
        <button className="home-button" onClick={() => this.handleClick} href='#about'>
          {" "}
          Click Here to Meet Me
        </button>
      </React.Fragment>
    );
  }
}

export default HomeButton;
