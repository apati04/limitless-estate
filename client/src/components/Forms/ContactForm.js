import React, { Component } from 'react';
import { Input } from 'mdbreact';
import { withFormik, Form, Field } from 'formik';
import axios from 'axios';
import Yup from 'yup';

class ContactForm extends Component {
  render() {
    const {
      handleBlur,
      handleChange,
      handleFocus,
      values,
      errors,
      touched,
      handleReset,
      isSubmitting
    } = this.props;
    return (
      <Form>
        <div className="row m-2">
          <div className="col-md-6">
            <label htmlFor="firstname">First name</label>
            {touched.firstname &&
              errors.firstname && (
                <small className="ml-2 font-italic text-danger">
                  {errors.firstname}
                </small>
              )}
            <div className="form-group">
              <Field
                className="d-block form-control"
                render={({ field, form }) => {
                  console.log('theform: ', form);
                  console.log('thefield: ', field);
                  return <Input {...field} id="firstname" name="firstname" />;
                }}
                label="hey"
                name="firstname"
              />
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="lastname">Last Name</label>
            {touched.lastname &&
              errors.lastname && (
                <small className="ml-2 font-italic text-danger">
                  {errors.lastname}
                </small>
              )}
            <div className="form-group">
              <Field className="form-control" type="text" name="lastname" />
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="email">Email Address</label>
            {touched.email &&
              errors.email && (
                <small className="ml-2 font-bold font-italic text-danger">
                  {errors.email}
                </small>
              )}
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
        <div className="row m-2">
          <div className="col-md-12">
            <label htmlFor="message">Your message to us</label>
            {touched.message &&
              errors.message && (
                <small className="ml-2 font-italic text-danger">
                  {errors.message}
                </small>
              )}
            <div className="form-group">
              <Field
                className="form-control p-0"
                component="textarea"
                type="text"
                name="message"
              />
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
    firstname: Yup.string().required('Field is required'),
    lastname: Yup.string().required('Field is required'),
    email: Yup.string()
      .email('Email is not valid')
      .required('Field is required'),
    message: Yup.string().required('Field is required')
  }),
  async handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    // const payload = await axios.post('/api/sendmail', values);
    // console.log('payload: ', payload);
    const payload = values;
    console.log(payload);
    resetForm();
    setSubmitting(false);
  }
})(ContactForm);
