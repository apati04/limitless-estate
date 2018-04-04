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
import { Link } from 'react-router-dom';
import axios from 'axios';

class ContactForm extends Component {
  state = {
    modal: false
  };

  toggle = e => {
    this.setState({
      modal: !this.state.modal
    });
  };
  render() {
    const { values, errors, touched, isSubmitting } = this.props;

    return (
      <Form>
        <div className="row p-2 no-gutters flex-center">
          <div className="col-12 form-group">
            <label htmlFor="firstname" className="m-0 p-0">
              First name
            </label>
            {touched.firstname &&
              errors.firstname && (
                <small className="ml-2 text-danger">{errors.firstname}</small>
              )}
            <Field className="p-0 form-control" type="text" name="firstname" />
          </div>
          <div className="col-12">
            <label htmlFor="lastname" className="m-0 p-0">
              Last Name
            </label>
            {touched.lastname &&
              errors.lastname && (
                <small className="ml-2 font-italic text-danger">
                  {errors.lastname}
                </small>
              )}
            <div className="form-group">
              <Field className="p-0 form-control" type="text" name="lastname" />
            </div>
          </div>
          <div className="col-12 form-group my-2">
            <label htmlFor="email" className="m-0 p-0">
              Email Address
            </label>
            {touched.email &&
              errors.email && (
                <small className="ml-2 font-bold font-italic text-danger">
                  {errors.email}
                </small>
              )}

            <Field className="p-0 form-control" type="email" name="email" />
          </div>

          <div className="col-12 form-group my-2">
            <label htmlFor="message" className="">
              Your message to us
            </label>
            {touched.message &&
              errors.message && (
                <small className="ml-4 font-italic text-danger">
                  {errors.message}
                </small>
              )}
            <Field
              className="md-textarea form-control m-0 p-0"
              component="textarea"
              type="text"
              name="message"
            />
          </div>

          <div className="d-flex flex-center">
            <Modal
              className="modal-dialog modal-dialog-centered"
              isOpen={this.state.modal}
              toggle={this.toggle}
            >
              <ModalHeader toggle={this.toggle}>
                Thank you for the message
              </ModalHeader>
              <ModalBody>
                One of our team members will contact you soon.
              </ModalBody>
              <ModalFooter>
                <Link to="/">
                  <Button color="secondary">Back To Home</Button>
                </Link>
              </ModalFooter>
            </Modal>
          </div>
          <div className="col-12 text-center">
            <button
              type="submit"
              onClick={this.toggle}
              className="btn btn-outline primary-color"
              disabled={isSubmitting}
            >
              Submit <i className="ml-1 far fa-paper-plane" />
            </button>
          </div>
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
    firstname: Yup.string().required('required'),
    lastname: Yup.string().required('required'),
    email: Yup.string()
      .email('Email is not valid')
      .required('required'),
    message: Yup.string().required('required')
  }),
  async handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    const payload = await axios.post('/api/sendmail', values);

    resetForm();
    setSubmitting(false);
  }
})(ContactForm);
