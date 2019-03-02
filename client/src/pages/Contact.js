import React, { Component } from 'react';
import ContactForm from '../components/Forms/ContactForm';
import { Card, CardHeader, CardBody, CardTitle, CardText } from 'mdbreact';
const bgimage = 'https://i.imgur.com/RH9g1cH.jpg';

class Contact extends Component {
  render() {
    return (
      <div
        style={{
          height: 80 + 'em',
          background: `url(${bgimage})center center no-repeat`,
          backgroundSize: 'cover'
        }}
        data-wow-delay="1s"
        className="animated fadeIn hm-black-light"
      >
        <div style={{ height: '100%' }} className="view full-bg-img">
          <div className="container mt-5">
            <div className="row flex-center">
              <div className="m-5 col-12 col-lg-7">
                <Card className="align-center animated fadeIn z-depth-4" narrow>
                  <div className="view gradient-card-header blue-gradient text-align-center peach-gradient p-4">
                    <h1 className="h1-responsive text-white text-center">
                      Contact Us
                    </h1>
                    <CardText className="text-white text-center">
                      We'd love to hear from you!
                    </CardText>
                  </div>
                  <CardBody className="p-5">
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
