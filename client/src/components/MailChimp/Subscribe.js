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
    console.log('line23: ', this.props);
    return (
      <section>
        <div className="container">
          <Form>
            <div className="row justify-content-around align-items-center py-4">
              <div className="col-md-4">
                <img
                  src="https://i.imgur.com/k5GoGK6.png"
                  className="img-fluid"
                  style={{
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                  }}
                />
              </div>
              <div className="col-auto py-2">
                <div>
                  <h1 className="h1-responsive text-left">
                    Subscribe to Our Newsletter
                  </h1>
                </div>
                <div className=" md-form input-group">
                  <Field
                    component="input"
                    className="form-control p-0"
                    type="email"
                    name="email"
                    placeholder="Your Email Address"
                  />
                  {/* {touched.email &&
                    errors.email && (
                      <small className="font-italic text-danger">
                        {errors.email}
                      </small>
                    )} */}

                  <span className="input-group-btn">
                    <button
                      type="submit"
                      className="btn btn-outline primary-color"
                    >
                      Subscribe
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </Form>
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
    const subscribe = await axios.post('/api/mailchimp/subscribe', values);

    console.log('handlesubmit: ', subscribe);
  }
})(Subscribe);
