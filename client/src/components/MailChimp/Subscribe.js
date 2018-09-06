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
  }
  onSubmit = e => {
    // check if email is missing
    // if exists, call method to sub
  };
  render() {
    return (
      <div>
        <Form>
        <div className="row">
            <div className="col-md-6">
              <Field component="input" className="form-control" type="email" name="email" placeholder="Your Email Address" />
              {touched.email && errors.email && (<small className="font-italic text-danger">{errors.email}</small>)}
            </div>
            <div></div>
        </div>
        </Form>
      </div>
    );
  }
}

export default Subscribe;
