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
            <div className="form-group">
              {touched.firstname && errors.firstname && <p>{errors.firstname}</p>}
              <Field className="form-control" type="text" name="firstname" placeholder="First Name" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              {touched.lastname && errors.lastname && <p>{errors.lastname}</p>}

              <Field className="form-control" type="text" name="lastname" placeholder="Last Name" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <Field className="form-control" type="email" name="email" placeholder="Email Address" />
              {touched.email && errors.email && <p>{errors.email}</p>}
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <Field className="form-control" type="text" name="company" placeholder="Company Name" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              {touched.message && errors.message && <p>{errors.message}</p>}

              <Field
                className="form-control"
                component="textarea"
                type="text"
                name="message"
                placeholder="Your message"
              />
            </div>
          </div>
          <div className="col-md-12">
            <button className="btn btn-outline-info btn-sm" disabled={isSubmitting}>
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
