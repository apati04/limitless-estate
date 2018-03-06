import React, { Component } from 'react';
import { withFormik, Form, Field } from 'formik';
import axios from 'axios';
import Yup from 'yup';

class ContactForm extends Component {
  render() {
    const { values, errors, touched, isSubmitting } = this.props;
    return (
      <Form>
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="firstname">First name</label>
            <div className="form-group">
              <Field className="form-control" type="text" name="firstname" />
              {touched.firstname && errors.firstname && <small className="text-danger">{errors.firstname}</small>}
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="lastname">Last Name</label>
            <div className="form-group">
              <Field className="form-control" type="text" name="lastname" />
              {touched.lastname && errors.lastname && <small className="text-danger">{errors.lastname}</small>}
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="email">Email Address</label>
            {touched.email &&
              errors.email && <small className="ml-2 font-bold font-italic text-danger">{errors.email}</small>}
            <div className="form-group">
              <Field className="form-control" type="email" name="email" />
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="company">Company Name (optional)</label>

            <div className="form-group">
              <Field className="form-control" type="text" name="company" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <label htmlFor="message">Your message to us</label>
            <div className="form-group">
              {touched.message && errors.message && <small className="text-danger">{errors.message}</small>}
              <Field className="form-control" component="textarea" type="text" name="message" />
            </div>
          </div>
          <div className="col-md-12 text-right">
            <button className="btn btn-outline-info" disabled={isSubmitting}>
              Submit <i className="ml-1 far fa-paper-plane" />
            </button>
          </div>
        </div>
      </Form>
    );
  }
}
const mapPropsToValues = () => {};
const handleSubmit = (values, { resetForm, setErrors, setSubmitting }) => {
  console.log('values: ', values);
};

export default withFormik({
  mapPropsToValues({ firstname = '', lastname = '', company = '', email = '', message = '' }) {
    return { firstname, lastname, company, email, message };
  },
  validationSchema: Yup.object().shape({
    firstname: Yup.string().required('Field is required'),
    lastname: Yup.string().required('Field is required'),
    email: Yup.string()
      .email('Email is not valid')
      .required('Field is required'),
    message: Yup.string().required('Field is required'),
  }),
  async handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    const payload = await axios.post('/api/sendmail', values);
    console.log('payload: ', payload);
    resetForm();
    setSubmitting(false);
  },
})(ContactForm);
