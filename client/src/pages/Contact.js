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
          <div className="container">
            <div className="row my-5 flex-center">
              <div className="col-12 col-lg-7">
                <Card className="align-center animated fadeIn z-depth-4" narrow>
                  <CardImage tag="div">
                    <div className="view gradient-card-header blue-gradient text-align-center peach-gradient">
                      <CardTitle className=" h2-responsive text-center">
                        Contact Us
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
