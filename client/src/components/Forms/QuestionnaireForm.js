import React, { Component } from 'react';
import { withFormik, Form, Field } from 'formik';
import { Button, Input } from 'mdbreact';
import axios from 'axios';
import Yup from 'yup';
const style = {
  radioButton: {
    marginLeft: '1em'
  }
};

class QuestionnaireForm extends Component {
  state = {
    accredited: false,
    proofOfFunds: false,
    riskTolerance: false
  };

  handleErrors = val => {
    if (this.props.touched[val] && this.props.errors[val])
      return (
        <small className="ml-2 font-italic text-danger">
          {this.props.errors[val]}!
        </small>
      );
    else return <div />;
  };

  render() {
    const {
      values,
      errors,
      touched,
      isSubmitting,
      handleChange,
      handleBlur,
      handleSubmit
    } = this.props;
    const { riskTolerance } = this.state;
    return (
      <Form className="p-4 container">
        <div className="form-group row">
          <div className="col">
            <label className="display-4 mb-2 col-form-label">
              Basic Information
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col form-group">
            <label htmlFor="fullname" className="col-form-label">
              Full Name
            </label>
            {this.handleErrors('fullname')}
            <Field
              className="form-control mt-1 p-0"
              type="text"
              name="fullname"
            />
          </div>
          <div className="col form-group">
            <label htmlFor="email" className="col-form-label">
              Email Address
            </label>
            {this.handleErrors('email')}
            <Field
              className="form-control mt-1 p-0"
              name="email"
              type="email"
            />
          </div>
        </div>
        <div className="row">
          <div className="col form-group">
            <label htmlFor="company" className="col-form-label">
              Company Name
            </label>
            {this.handleErrors('company')}
            <Field
              className="form-control mt-1 p-0"
              type="text"
              name="company"
            />
          </div>
          <div className="col form-group">
            {this.handleErrors('tel')}
            <label htmlFor="tel" className="col-form-label">
              Phone Number
            </label>
            <Field className="form-control mt-1 p-0" name="tel" type="text" />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <label className="col-form-label">Preferred form of contact</label>
            {this.handleErrors('contactPref')}
            <div className="form-group">
              <Field
                className="form-control select-wrapper select-dropdown d-block"
                name="contactPref"
                component="select"
                value={values.contactPref}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option
                  className="selected font-italic"
                  value=""
                  label="Please choose one..."
                  disabled
                />
                <option value="email" label="Email" />
                <option value="phone" label="Phone call" />
                <option value="text" label="Text Message" />
              </Field>
            </div>
          </div>
        </div>
        <div className="mb-4 form-group row">
          <div className="col">
            <label className="display-4 mb-2 col-form-label">
              Investor Information
            </label>
          </div>
        </div>
        <div className="row">
          <ol
            className="col d-flex flex-column justify-content-between p-0"
            style={{ listStylePosition: 'inside' }}
          >
            <li>
              <label className="col-form-label" htmlFor="q1">
                Why are you interested in investing in Real Estate?
              </label>
              <div className="col-md-12">
                {this.handleErrors('q1')}

                <Field
                  className="form-control p-1"
                  type="text"
                  component="textarea"
                  id="q1"
                  name="q1"
                />
              </div>
            </li>
            <li>
              <label className="col-form-label" htmlFor="q2">
                What is the biggest hurdle you are trying to overcome by
                investing in Real Estate?
              </label>
              <div className="col-md-12">
                {this.handleErrors('q2')}

                <Field
                  className="p-1 form-control"
                  type="text"
                  component="textarea"
                  name="q2"
                />
              </div>
            </li>
            <li>
              <label className="col-form-label" htmlFor="q3">
                Do you want to invest in multifamily, value-add projects?
              </label>
              {this.handleErrors('q3')}
              <div className="col-md-12">
                <Field className="form-control p-1" name="q3" type="text" />
              </div>
            </li>
            <li>
              <label className="col-form-label" htmlFor="q4">
                What are your return expectations?
              </label>
              <div className="col-md-4">
                <Field
                  name="q4AAR"
                  className="form-control"
                  placeholder="Annual Return Percentage (%)"
                  type="text"
                />
                <Field
                  className="form-control"
                  name="q4IRR"
                  type="text"
                  placeholder="Internal rate of return (IRR) (%)"
                />
                <Field
                  className="form-control"
                  name="q4CoC"
                  type="text"
                  placeholder="Cash On Cash Return ($)"
                />
              </div>
            </li>
            <li>
              <label className="col-form-label" htmlFor="q5">
                What is your investment minimum and maximum hold time?
              </label>
              <div className="col-md-4">
                <Field
                  className="form-control"
                  name="q5a"
                  placeholder="Investment Minimum"
                  type="text"
                />

                <Field
                  className="form-control p-0"
                  name="q5b"
                  placeholder="Maximum Hold Time"
                  type="text"
                />
              </div>
            </li>
            <li>
              <label className="col-form-label m-0" htmlFor="q6">
                What is the minimum dollar amount you are willing to invest?
              </label>
              <div className="col-md-12">
                <Field name="q6" type="text" className="form-control p-0" />
              </div>
            </li>
            <li>
              <label className="col-form-label" htmlFor="q7">
                Are you an accredited investor?
              </label>
              <small className="form-text text-muted">
                (Makes more than $200k annually for the past 2 years and will do
                so in this current year or have a net worth of $1M excluding
                your primary residence)
              </small>
              <div className="form-group">
                <div style={{ padding: 0 }} className="col-md-12">
                  <Field
                    className="form-control"
                    onClick={() => this.setState({ accredited: 'yes' })}
                    checked={this.state.accredited === 'yes'}
                    name="q7a"
                    type="radio"
                    id="q7a"
                    label="Yes"
                  />
                  <Field
                    className="form-control"
                    onClick={() => this.setState({ accredited: 'no' })}
                    checked={this.state.accredited === 'no'}
                    name="q7b"
                    type="radio"
                    id="q7b"
                    label="No"
                  />
                </div>
              </div>
            </li>
            <li>
              <label className="col-form-label" htmlFor="q8">
                Can you show proof of funds ?
              </label>
              <div className="d-flex">
                <Field
                  render={({ ...args }) => (
                    <Input
                      {...args}
                      gap
                      onChange={handleChange}
                      onClick={() => {
                        values.proofOfFunds = 'yes';
                      }}
                      checked={values.proofOfFunds === 'yes'}
                      label="Option 1"
                      type="radio"
                      id="q8a"
                      name="q8a"
                    />
                  )}
                  name="q8a"
                />
                <Field
                  className="form-control"
                  type="radio"
                  onClick={() => this.setState({ proofOfFunds: 'no' })}
                  checked={this.state.proofOfFunds === 'no'}
                  name="q8b"
                  id="q8b"
                  label="No"
                />
              </div>
            </li>

            <li>
              <label className="col-form-label" htmlFor="q9">
                How would you rate your risk tolerance?
              </label>
              <div className="row d-flex-justify-space-around">
                <div className="d-flex col-md-12">
                  <Field
                    onClick={() =>
                      this.setState({
                        riskTolerance: 'low'
                      })
                    }
                    checked={riskTolerance === 'low' ? true : false}
                    className="form-control"
                    name="q9"
                    type="radio"
                    label="Low"
                  />

                  <Field
                    className="form-control"
                    onClick={() => this.setState({ riskTolerance: 'moderate' })}
                    checked={riskTolerance === 'moderate' ? true : false}
                    name="q9"
                    type="radio"
                    label="Moderate"
                  />
                  <Field
                    onClick={() => this.setState({ riskTolerance: 'high' })}
                    checked={riskTolerance === 'high' ? true : false}
                    className="form-control"
                    name="q9"
                    label="High"
                    type="radio"
                  />
                </div>
              </div>
            </li>
            <li>
              <label className="m-0 col-form-label" htmlFor="q10">
                If you are out of the country, have you invested in the US real
                estate market in the past?
              </label>
              <div className="col-md-12">
                <Field
                  className="form-control m-2 p-0"
                  type="text"
                  name="q10"
                />
              </div>
            </li>
            <li>
              <label htmlFor="q11" className="col-form-label">
                Have you invested as a limited partner (LP) on a syndication
                deal in the past?
              </label>
              <div className="col-md-12">
                <Field
                  className="form-control m-2 p-0"
                  type="text"
                  name="q11"
                />
              </div>
            </li>
            <li>
              <label htmlFor="q12" className="col-form-label">
                Are you comfortable investing with other LPs or would you
                require to be the only LP in this investment?
              </label>
              <div className="col-md-12">
                <small className="form-text text-muted p-0">
                  (If you’re a substantial portion of the equity being invested
                  in the deal, we would ask for you to commit non-refundable
                  equity to create an alignment of interest to close.)
                </small>
              </div>
              <div className="col-md-12">
                <Field
                  className="form-control m-2 p-0"
                  type="text"
                  name="q12"
                />
              </div>
            </li>
            <li>
              <label htmlFor="q13" className="col-form-label">
                In a short paragraph please provide us with your investing
                experience.
              </label>
              <div className="col-md-12">
                <Field
                  className="form-control mt-0"
                  type="textarea"
                  id="q13"
                  name="q13"
                />
              </div>
            </li>

            <li>
              <label className="col-form-label m-0" htmlFor="q14">
                Is there anything else we should know about you and your
                investment goals?
              </label>
              <div className="pt-0 col-md-12">
                <Field
                  className="p-1 form-control"
                  style={{ height: 8 + 'em' }}
                  type="text"
                  component="textarea"
                  id="q14"
                  name="q14"
                />
              </div>
            </li>
          </ol>
        </div>

        <div className="text-center">
          <Button
            type="submit"
            disabled={isSubmitting}
            size="lg"
            rounded
            gradient="blue"
          >
            Submit <i className="ml-1 far fa-paper-plane" />
          </Button>
        </div>
      </Form>
    );
  }
}

export default withFormik({
  mapPropsToValues: ({
    fullname = '',
    email = '',
    tel = '',
    company = '',
    contactPref = '',
    q1 = '',
    q2 = '',
    q3 = '',
    q4 = ''
  }) => ({
    fullname,
    email,
    tel,
    company,
    contactPref
  }),
  validationSchema: Yup.object().shape({
    fullname: Yup.string().required('Field is required'),
    email: Yup.string().required('Field is required')
  }),
  handleSubmit: async (values, { resetForm, setErrors, setSubmitting }) => {
    console.log('asdfasdf', values);
    resetForm();
    setSubmitting(false);
  }
})(QuestionnaireForm);
/*

  validationSchema: Yup.object().shape({
    firstname: Yup.string().required('Field is required'),
    lastname: Yup.string().required('Field is required'),
    email: Yup.string()
      .email('Email is not valid')
      .required('Field is required'),
    question1: Yup.mixed().required('Field is required'),
    question2: Yup.mixed().required('Field is required'),
    question3: Yup.mixed().required('Field is required'),
    question4a: Yup.mixed().required('Field is required'),
    question4b: Yup.mixed().required('Field is required'),
    question4c: Yup.mixed().required('Field is required'),
    question5: Yup.mixed().required('Field is required'),
    question6: Yup.mixed().required('Field is required'),
    question7: Yup.mixed().required('Field is required'),
    question8: Yup.mixed().required('Field is required'),
    question9: Yup.mixed().required('Field is required'),
    question10: Yup.mixed().required('Field is required'),
    question11: Yup.mixed().required('Field is required'),
    question12: Yup.mixed().required('Field is required'),
    question13: Yup.mixed().required('Field is required'),
    question14: Yup.mixed().required('Field is required')
  })
    email = '',
    question1 = '',
    question2 = '',
    question3 = '',
    question4a = '',
    question4b = '',
    question4c = '',
    question5 = '',
    question6 = '',
    question7 = '',
    question8 = '',
    question9 = '',
    question10 = '',
    question11 = '',
    question12 = '',
    question13 = '',
    question14 = ''
  }) {

*/
