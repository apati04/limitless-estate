import React, { Component } from 'react';
import PageHeader from '../components/PageHeader';
import ContactForm from '../components/Forms/ContactForm';

const styles = {
  mainBg: {
    width: '100%',
    backgroundSize: 'cover',
    backgroundPostition: 'center center',
    backgroundRepeat: 'no-repeat',
  },
};
class Contact extends Component {
  render() {
    return (
      <section id="contact" className="py-3">
        {/* <PageHeader title="Contact Us" description="Feel free to ask us any questions!!" img="/img/urban.jpg" /> */}

        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card-body">
                <h4>Keep In Touch</h4>
                <p>lorem</p>
                <p>lorem</p>
                <p>lorem</p>
                <p>lorem</p>
                <p>lorem</p>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card p-4">
                <div className="card-body">
                  <h3 className="text-center border-bottom">form</h3>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
