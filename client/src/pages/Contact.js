import React, { Component } from 'react';
import ContactForm from '../components/Forms/ContactForm';
import { Card, CardImage, CardBody, CardTitle } from 'mdbreact';
const styles = {
  formStyle: {
    height: '100vh'
  }
};
class Contact extends Component {
  render() {
    return (
      <div className="animated fadeIn unique-color">
        <div className="full-bg-img">
          <div className="container">
            <div className="row no-gutters align-items-center justify-content-center">
              <div
                style={{
                  minHeight: 10 + 'em',
                  height: '100%',
                  marginTop: 5 + 'em',
                  marginBottom: 10 + 'em'
                }}
                className="col-12 col-md-6"
              >
                <Card className="align-center animated fadeIn z-depth-4" narrow>
                  <CardImage tag="div">
                    <div className="view gradient-card-header blue-gradient text-align-center peach-gradient">
                      <CardTitle className=" h2-responsive text-center">
                        Contact Us
                      </CardTitle>
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
      </div>
    );
  }
}

export default Contact;
