import React, { Component } from 'react';
import PageHeader from '../components/PageHeader';
import ContactForm from '../components/Forms/ContactForm';

const styles = {
  formStyle: {
    height: '100vh',
  },
};
class Contact extends Component {
  render() {
    return (
      <div>
        <PageHeader title="Contact Us" description="Feel free to ask us any questions!!" img="/img/urban.jpg" />
        <div style={styles.formStyle}>
          <div className="container mt-5">
            <div className="row d-flex justify-content-center">
              <div className="card bg-light border-info border p-5">
                <div className="card-body">
                  <ContactForm />
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
