import React, { Component } from "react";
import FormContainer from "./forms/formContainer";

class Contact extends React.Component {
  render() {
    return (
      <div className="contact-layout">
        <div className=" contact-header"> Contact </div>
        <div className="contact-wrapper">
          <div className="contact-message ">
            Have a question or want to build together? Contact me!
          </div>

          <div className="contact-forms-wrapper">
            <FormContainer className="form-container" />
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
