import React, { Component } from "react";
import Input from "./input";
import TextArea from "./textArea";

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        name: "",
        email: "",
        body: ""
      }
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleBody = this.handleBody.bind(this);
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.form,
          [name]: value
        }
      })
      // () => console.log(this.state.form)
    );
  }

  handleEmail(e) {
    let value = e.target.value;
    let email = e.target.name;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.form,
          [email]: value
        }
      })
      // () => console.log(this.state.form)
    );
  }

  handleBody(e) {
    let value = e.target.value;
    let body = e.target.name;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.form,
          [body]: value
        }
      })
      // () => console.log(this.state.form)
    );
  }

  render() {
    return (
      <form>
        <Input
          className={"name-form"}
          name={"Name"}
          inputType={"text"}
          value={this.state.name}
          handleChange={this.handleInput}
          placeholder={"Name"}
        />
        <Input
          className={"email-form"}
          name={"Email"}
          inputType={"text"}
          value={this.state.email}
          handleChange={this.handleEmail}
          placeholder={"Email"}
        />
        <TextArea
          className={"body-form"}
          name={"Body"}
          rows={10}
          cols={60}
          value={this.state.body}
          onChange={this.state.handleBody}
          placeholder={
            "Shoot me a message if you have a questino or want to work together!"
          }
        />
      </form>
    );
  }
}

export default FormContainer;
