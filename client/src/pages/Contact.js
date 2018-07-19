import React, { Component } from 'react';
import ContactForm from '../components/Forms/ContactForm';
import { Card, CardImage, CardBody, CardTitle } from 'mdbreact';
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
                  <CardImage tag="div">
                    <div className="view gradient-card-header blue-gradient text-align-center peach-gradient">
                      <CardTitle className="text-white text-center pb-2">
                        <div>
                          <h2 className="h2-responsive">Contact Us</h2>
                          <p>We'd love to hear from you!</p>
                        </div>
                      </CardTitle>
                    </div>
                  </CardImage>
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
