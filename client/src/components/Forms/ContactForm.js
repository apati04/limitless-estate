import React, { Component } from 'react';
import { withFormik, Form, Field } from 'formik';
import axios from 'axios';
import Yup from 'yup';

class ContactForm extends Component {
  render() {
    const { values, errors, touched, isSubmitting } = this.props;
    return (
      <Form>
        <div>
          {touched.firstname && errors.firstname && <p>{errors.firstname}</p>}
          <Field type="text" name="firstname" placeholder="First Name" />
        </div>
        <div>
          {touched.lastname && errors.lastname && <p>{errors.lastname}</p>}

          <Field type="text" name="lastname" placeholder="Last Name" />
        </div>
        <div>
          <Field type="text" name="company" placeholder="Company Name" />
        </div>
        <div>
          {touched.email && errors.email && <p>{errors.email}</p>}

          <Field type="email" name="email" placeholder="Email Address" />
        </div>
        <div>
          {touched.message && errors.message && <p>{errors.message}</p>}
          <Field type="text" name="message" placeholder="Your message" />
        </div>
        <button disabled={isSubmitting}>Submit</button>
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
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    console.log(arguments);
    resetForm();
    setSubmitting(false);
  },
})(ContactForm);
