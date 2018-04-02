import React, { Component } from 'react';
import { Input, Button } from 'mdbreact';
import { withFormik, Form, Field } from 'formik';
import Yup from 'yup';

class ContactForm extends Component {
  render() {
    const { errors, touched, isSubmitting } = this.props;

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
              className="form-control p-0"
              component="textarea"
              type="text"
              name="message"
            />
          </div>
          <div className="col-12 text-center">
            <button
              type="submit"
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
      .required('Field is required'),
    message: Yup.string().required('required')
  }),
  async handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    // const payload = await axios.post('/api/sendmail', values);
    // console.log('payload: ', payload);
    const payload = values;
    console.log(payload);
    resetForm();
    setSubmitting(false);
    alert('Thank you, one of our team members will contact you soon.');
    console.log(this);
    window.location = '/';
  }
})(ContactForm);
