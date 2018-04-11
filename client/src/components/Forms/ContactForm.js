import React, { Component } from 'react';
import {
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'mdbreact';
import { withFormik, Form, Field } from 'formik';
import Yup from 'yup';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

class ContactForm extends Component {
  state = {
    modal: false
  };

  toggle = e => {
    let isValid = true;
    sleep(500).then(() => {
      let check = Object.values(this.props.errors);
      if (check.includes('Required')) {
        return;
      } else {
        this.setState({ modal: !this.state.modal });
      }
    });
  };
  render() {
    const { values, errors, touched, isSubmitting } = this.props;

    return (
      <Form>
        <div className="row">
          <div className="col-md-6">
            <div className="md-form">
              <Field
                name="firstname"
                component="input"
                className="form-control"
                type="text"
                placeholder="First name"
                id="firstname"
              />

              {touched.firstname &&
                errors.firstname && (
                  <small className=" p-0 m-0 font-italic text-danger">
                    {errors.firstname}
                  </small>
                )}
            </div>
          </div>

          <div className="col-md-6">
            <div className="md-form">
              <Field
                name="lastname"
                component="input"
                className="form-control"
                type="text"
                placeholder="Last name"
                id="lastname"
              />

              {touched.lastname &&
                errors.lastname && (
                  <small className=" p-0 m-0 font-italic text-danger">
                    {errors.lastname}
                  </small>
                )}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 py-1">
            <div className="md-form">
              <Field
                component="input"
                className="form-control my-0"
                type="email"
                name="email"
                placeholder="Email Address"
              />

              {touched.email &&
                errors.email && (
                  <small className=" p-0 m-0 font-italic text-danger">
                    {errors.email}
                  </small>
                )}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="md-form">
              <Field
                className="md-textarea form-control pt-1"
                component="textarea"
                type="text"
                name="message"
                id="message"
                placeholder="Your message here"
              />
              {touched.message &&
                errors.message && (
                  <small className=" p-0 m-0 font-italic text-danger">
                    {errors.message}
                  </small>
                )}
            </div>
          </div>
        </div>

        <div className="d-flex flex-center">
          <Modal
            className="modal-dialog modal-dialog-centered"
            isOpen={this.state.modal}
            toggle={this.toggle}
          >
            <ModalHeader>Thank you for the message</ModalHeader>
            <ModalBody>
              One of our team members will contact you soon.
            </ModalBody>
            <ModalFooter>
              <NavLink className="btn btn-secondary" to="/">
                Back to Home
              </NavLink>
            </ModalFooter>
          </Modal>
        </div>
        <div className="col-12 pt-5 text-center">
          <button
            type="submit"
            onClick={this.toggle}
            className="btn btn-outline primary-color"
            disabled={isSubmitting}
          >
            Submit <i className="ml-1 far fa-paper-plane" />
          </button>
        </div>
      </Form>
    );
  }
}

export default withFormik({
  mapPropsToValues({
    firstname = '',
    lastname = '',
    company = '',
    email = '',
    message = ''
  }) {
    return { firstname, lastname, company, email, message };
  },
  validationSchema: Yup.object().shape({
    firstname: Yup.string().required('Required'),
    lastname: Yup.string().required('Required'),
    email: Yup.string()
      .email('Email is not valid')
      .required('Required'),
    message: Yup.string().required('Required')
  }),
  async handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    const payload = await axios.post('/api/sendmail', values);

    resetForm();
    setSubmitting(false);
  }
})(ContactForm);
