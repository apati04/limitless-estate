import React, { Component } from 'react';
import {
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Card,
  CardBody,
  CardTitle
} from 'mdbreact';
import { withFormik, Form, Field } from 'formik';
import Yup from 'yup';
import axios from 'axios';
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

class Subscribe extends Component {
  state = {
    modal: false
  };
  toggle = e => {
    const { resetForm, setSubmitting } = this.props;
    let isValid = true;
    if (Object.values(this.props.errors).includes('Required')) {
      return;
    } else {
      this.setState({ modal: !this.state.modal });
    }
  };
  onSubmit = e => {
    // check if email is missing
    // if exists, call method to sub
    console.log(e);
  };
  render() {
    const { values, errors, touched, isSubmitting } = this.props;
    return (
      <section>
        <div
          style={{ marginTop: '40px', marginBottom: '40px' }}
          className="container p-4"
        >
          <Form>
            <div className="row justify-content-between align-items-start">
              <div className="col-md-6 investors-guide-form mb-3">
                <img
                  src="https://i.imgur.com/D4wijRG.jpg"
                  className="img-fluid d-block"
                />
              </div>
              <div className="col-md-6 investors-guide-form">
                <Card>
                  <div className="card-header view  mdb-color">
                    <h3
                      style={{
                        fontFamily: 'Playfair Display',
                        textAlign: 'center',
                        color: '#fff',
                        opacity: '0.98'
                      }}
                      className=""
                    >
                      Sign up to get your <br />
                      <strong>FREE Passive Investors Guide!</strong>
                    </h3>
                  </div>
                  <CardBody>
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'baseline',
                        paddingLeft: '4px',
                        paddingRight: '4px'
                      }}
                      className="md-form input-group mb-2"
                    >
                      <Field
                        component="input"
                        className="form-control p-0"
                        type="email"
                        name="email"
                        placeholder="Your Email Address"
                      />

                      <button
                        type="submit"
                        onClick={this.toggle}
                        className="btn  btn-block primary-color"
                        disabled={isSubmitting}
                      >
                        <strong>Sign Up</strong>
                      </button>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>
          </Form>

          <div className="d-flex flex-center">
            <Modal
              className="modal-dialog modal-dialog-centered"
              isOpen={this.state.modal}
              toggle={this.toggle}
            >
              <ModalHeader>Thank you for subscribing!</ModalHeader>
              <ModalFooter>
                <button className="btn btn-secondary" onClick={this.toggle}>
                  Close
                </button>
              </ModalFooter>
            </Modal>
          </div>
        </div>
      </section>
    );
  }
}

export default withFormik({
  mapPropsToValues({ email = '' }) {
    return { email };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Email is not valid')
      .required('Required')
  }),
  async handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    const req = await axios.post('/api/mailchimp/subscribe', values);
    resetForm();
    setSubmitting(false);
  }
})(Subscribe);
