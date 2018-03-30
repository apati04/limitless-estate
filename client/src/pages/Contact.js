import React, { Component } from 'react';
import PageHeader from '../components/PageHeader';
import ContactForm from '../components/Forms/ContactForm';
import {
  Card,
  CardImage,
  CardBody,
  CardTitle,
  CardText,
  Button,
  View
} from 'mdbreact';
const styles = {
  formStyle: {
    height: '100vh'
  }
};
class Contact extends Component {
  render() {
    return (
      <div style={styles.formStyle} className="animated fadeIn unique-color">
        <div className="d-flex justify-content-center align-items-center full-bg-img p-5">
          <div className="row p-5 m-5">
            <div className="col-md-12 ">
              <Card className="align-center animated fadeIn z-depth-4" narrow>
                <CardImage tag="div">
                  <div className="view gradient card-header peach-gradient">
                    <CardTitle className="h2-responsive">ContactUs</CardTitle>
                  </div>
                </CardImage>
                <CardBody>
                  <ContactForm />
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
