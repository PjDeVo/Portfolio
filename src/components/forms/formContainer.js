import React, { Component } from "react";
import Input from "./input";
import TextArea from "./textArea";

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      topic: "",
      body: ""
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleBody = this.handleBody.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTopic = this.handleTopic.bind(this);
  }

  handleInput(e) {
    this.setState({
      name: e.target.value
    });
  }

  handleBody(e) {
    this.setState({
      body: e.target.value
    });
  }

  handleTopic(e) {
    this.setState({
      topic: e.target.value
    });
  }
  handleSubmit(e) {
    (window.location = `mailto:devincentis529@gmail.com?body= 
    
    Hello, my name is ${this.state.name}!
     \n
  
     ${this.state.body} &subject= ${this.state.topic}`),
      e.preventDefault();
  }

  render() {
    return (
      <form className="form-wrapper" onSubmit={this.handleSubmit}>
        <Input
          className={"name-form form-control"}
          name={"Name"}
          type={"text"}
          value={this.state.name}
          onChange={this.handleInput}
          placeholder={"Name"}
        />

        <Input
          className={"email-form form-control"}
          name={"Topic"}
          type={"text"}
          value={this.state.topic}
          onChange={this.handleTopic}
          placeholder={"Topic"}
        />
        <textarea
          className={"body-form form-control"}
          name={"Body"}
          rows={10}
          cols={60}
          value={this.state.body}
          onChange={this.handleBody}
          placeholder={
            "Shoot me a message if you have a question or want to work together!"
          }
        />
        <input className="form-button" type="submit" />
      </form>
    );
  }
}

export default FormContainer;
