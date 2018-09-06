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
import axios from 'axios';
class Subscribe extends Component {
  state = {
    modal: false
  };
  onSubmit = e => {
    // check if email is missing
    // if exists, call method to sub
  };
  render() {
    const { values, errors, touched, isSubmitting } = this.props;
    return (
      <div>
        <Form>
          <div className="row">
            <div className="col-md-6">
              <Field
                component="input"
                className="form-control"
                type="email"
                name="email"
                placeholder="Your Email Address"
              />
              {touched.email &&
                errors.email && (
                  <small className="font-italic text-danger">
                    {errors.email}
                  </small>
                )}
            </div>
            <div className="col-md-6">
              <button type="submit" className="btn btn-outline primary-color">
                {' '}
                Subscribe
              </button>
            </div>
          </div>
        </Form>
      </div>
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
    const subscribe = await axios.post('/api/mailchimp/subscribe', values);

    console.log('handlesubmit: ', subscribe);
  }
})(Subscribe);
