import React, { Component } from "react";
import PageHeader from "../components/PageHeader";
import Form from "../components/Form";

class Contact extends Component {
  render() {
    return (
      <div>
        <PageHeader
          title="Contact Us"
          description="Feel free to ask us any questions!!"
          img="/img/urban.jpg"
        />
        <Form />
      </div>
    );
  }
}

export default Contact;
