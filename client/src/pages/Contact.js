import React, { Component } from 'react';
import PageHeader from '../components/PageHeader';
import ContactForm from '../components/Forms/ContactForm';

const styles = {
  formStyle: {
    height: '60vh',
  },
};
class Contact extends Component {
  render() {
    return (
      <div>
        <PageHeader title="Contact Us" description="Feel free to ask us any questions!!" img="/img/urban.jpg" />
        <div style={styles.formStyle} className="p-5 m-5">
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
                  <div className="card-body m-0">
                    <h3 className="text-center  mb-3">Contact Us</h3>
                    <div className="border-bottom mb-3" />
                    <ContactForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
