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
            <label className="display-4 mb-2 col-form-label-lg">
              Basic Information
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col form-group">
            <label htmlFor="fullname" className="col-form-label-lg">
              Full Name
            </label>
            {this.handleErrors('fullname')}
            <Field
              className="form-control-lg mt-1 p-0"
              type="text"
              name="fullname"
            />
          </div>
          <div className="col form-group">
            <label htmlFor="email" className="col-form-label-lg">
              Email Address
            </label>
            {this.handleErrors('email')}
            <Field
              className="form-control-lg mt-1 p-0"
              name="email"
              type="email"
            />
          </div>
        </div>
        <div className="row">
          <div className="col form-group">
            <label htmlFor="company" className="col-form-label-lg">
              Company Name
            </label>
            {this.handleErrors('company')}
            <Field
              className="form-control-lg mt-1 p-0"
              type="text"
              name="company"
            />
          </div>
          <div className="col form-group">
            {this.handleErrors('tel')}
            <label htmlFor="tel" className="col-form-label-lg">
              Phone Number
            </label>
            <Field
              className="form-control-lg mt-1 p-0"
              name="tel"
              type="text"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <label className="col-form-label-lg">
              Preferred form of contact
            </label>
            {this.handleErrors('contactPref')}
            <div className="form-group">
              <Field
                className="form-control-lg select-wrapper select-dropdown d-block"
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
            <label className="display-4 mb-2 col-form-label-lg">
              Investor Information
            </label>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-between align-items-start">
          <div className="form-group">
            <label className="col-form-label-lg" htmlFor="q1">
              Why are you interested in investing in Real Estate?
            </label>
            {this.handleErrors('q1')}
            <Field
              className="form-control-lg m-0 p-1"
              type="text"
              component="textarea"
              id="q1"
              name="q1"
            />
          </div>
          <div className="form-group mt-4">
            <label className="col-form-label-lg" htmlFor="q2">
              What is the biggest hurdle you are trying to overcome by investing
              in Real Estate?
            </label>

            {this.handleErrors('q2')}

            <Field
              className="p-1 form-control-lg"
              type="text"
              component="textarea"
              name="q2"
            />
          </div>
          <div className="form-group mt-4">
            <label className="col-form-label-lg" htmlFor="q3">
              Do you want to invest in multifamily, value-add projects?
            </label>
            {this.handleErrors('q3')}

            <Field className="form-control-lg p-1" name="q3" type="text" />
          </div>
          <div className="form-group mt-4">
            <label className="col-form-label-lg" htmlFor="q4">
              What are your return expectations?
            </label>

            <div className="d-flex flex-column">
              <Field
                name="q4ARP"
                className="form-control-lg pl-0"
                placeholder="Annual Return Percentage (%)"
                type="text"
              />
              {this.handleErrors('q4ARP')}

              <Field
                className="form-control-lg pl-0"
                name="q4IRR"
                type="text"
                placeholder="Internal rate of return (IRR) (%)"
              />
              {this.handleErrors('q4IRR')}

              <Field
                className="form-control-lg pl-0"
                name="q4CoC"
                type="text"
                placeholder="Cash On Cash Return ($)"
              />
              {this.handleErrors('q4CoC')}
            </div>
          </div>
          <div className="form-group mt-4">
            <label className="col-form-label-lg" htmlFor="q5">
              What is your investment minimum and maximum hold time?
            </label>

            <div className="d-flex flex-column justify-content-between">
              <Field
                className="form-control-lg pl-0"
                name="q5a"
                placeholder="Investment Minimum"
                type="text"
              />
              {this.handleErrors('q5a')}

              <Field
                className="form-control-lg pl-0"
                name="q5b"
                placeholder="Maximum Hold Time"
                type="text"
              />
              {this.handleErrors('q5b')}
            </div>
          </div>
          <div className="form-group mt-4">
            <label className="col-form-label-lg m-0" htmlFor="q6">
              What is the minimum dollar amount you are willing to invest?
            </label>

            <Field name="q6" type="text" className="form-control-lg pl-0" />
          </div>
          <div className="form-group mt-4">
            <label className="col-form-label-lg" htmlFor="q7">
              Are you an accredited investor?
            </label>
            <small className="form-text text-muted">
              (Makes more than $200k annually for the past 2 years and will do
              so in this current year or have a net worth of $1M excluding your
              primary residence)
            </small>

            <Field
              className="p-0"
              render={({ ...args }) => (
                <Input
                  {...args}
                  gap
                  className="p-0"
                  onClick={() => {
                    values.accreditedInvestor = 'yes';
                  }}
                  checked={values.accreditedInvestor === 'yes'}
                  label="Yes"
                  type="radio"
                  id="radio-q7a"
                  name="radio-q7a"
                  value="yes"
                  onChange={handleChange}
                />
              )}
              name="radio-q7a"
            />
            <Field
              render={({ ...args }) => (
                <Input
                  {...args}
                  gap
                  onClick={() => {
                    values.accreditedInvestor = 'no';
                  }}
                  checked={values.accreditedInvestor === 'no'}
                  label="No"
                  type="radio"
                  id="radio-q7b"
                  name="radio-q7b"
                  value="no"
                  onChange={handleChange}
                />
              )}
              name="radio-q7b"
            />

            <label className="col-form-label-lg" htmlFor="q8">
              Can you show proof of funds ?
            </label>

            <Field
              render={({ ...args }) => (
                <Input
                  {...args}
                  gap
                  onClick={() => {
                    values.proofOfFunds = 'yes';
                  }}
                  className="p-0"
                  checked={values.proofOfFunds === 'yes'}
                  label="Yes"
                  type="radio"
                  id="radio-q8a"
                  name="radio-q8a"
                  value="yes"
                  onChange={handleChange}
                />
              )}
              name="radio-q8a"
            />
            <Field
              render={({ ...args }) => (
                <Input
                  {...args}
                  gap
                  onClick={() => {
                    values.proofOfFunds = 'no';
                  }}
                  className="p-0"
                  checked={values.proofOfFunds === 'no'}
                  label="No"
                  type="radio"
                  id="radio-q8b"
                  name="radio-q8b"
                  value="no"
                  onChange={handleChange}
                />
              )}
              name="radio-q8b"
            />

            <label className="col-form-label-lg" htmlFor="q9">
              How would you rate your risk tolerance?
            </label>
            <div className="d-flex justify-content-start">
              <Field
                render={({ ...args }) => (
                  <Input
                    {...args}
                    gap
                    className="p-0"
                    onClick={() => {
                      values.riskTolerance = 'low';
                    }}
                    checked={values.riskTolerance === 'low'}
                    label="Low"
                    type="radio"
                    id="radio-q9a"
                    name="radio-q9a"
                    value="low"
                    onChange={handleChange}
                  />
                )}
                name="radio-q9a"
              />
              <Field
                render={({ ...args }) => (
                  <Input
                    {...args}
                    gap
                    className="p-0"
                    onClick={() => {
                      values.riskTolerance = 'medium';
                    }}
                    checked={values.riskTolerance === 'medium'}
                    label="Medium"
                    type="radio"
                    id="radio-q9b"
                    name="radio-q9b"
                    value="medium"
                    onChange={handleChange}
                  />
                )}
                name="radio-q9b"
              />
              <Field
                render={({ ...args }) => (
                  <Input
                    {...args}
                    gap
                    className="p-0"
                    onClick={() => {
                      values.riskTolerance = 'High';
                    }}
                    checked={values.riskTolerance === 'High'}
                    label="High"
                    type="radio"
                    id="radio-q9c"
                    name="radio-q9c"
                    value="High"
                    onChange={handleChange}
                  />
                )}
                name="radio-q9c"
              />
            </div>
          </div>

          <div className="form-group mt-4">
            <label className="col-form-label-lg" htmlFor="q10">
              If you are out of the country, have you invested in the US real
              estate market in the past?
            </label>

            <Field className="form-control-lg pl-0" type="text" name="q10" />
          </div>
          <div className="form-group mt-4">
            <label htmlFor="q11" className="col-form-label-lg">
              Have you invested as a limited partner (LP) on a syndication deal
              in the past?
            </label>

            <Field className="form-control-lg p-0" type="text" name="q11" />
          </div>
          <div className="form-group mt-4">
            <label htmlFor="q12" className="col-form-label-lg">
              Are you comfortable investing with other LPs or would you require
              to be the only LP in this investment?
            </label>

            <small className="form-text text-muted p-0">
              (If you’re a substantial portion of the equity being invested in
              the deal, we would ask for you to commit non-refundable equity to
              create an alignment of interest to close.)
            </small>

            <Field className="form-control-lg m-2 p-0" type="text" name="q12" />
          </div>
          <div className="form-group mt-4">
            <label htmlFor="q13" className="col-form-label-lg">
              In a short paragraph please provide us with your investing
              experience.
            </label>

            <Field
              className="form-control-lg mt-0"
              type="text"
              style={{ height: 4 + 'em' }}
              component="textarea"
              id="q13"
              name="q13"
            />
          </div>
          <div className="form-group mt-4">
            <label className="col-form-label-lg m-0" htmlFor="q14">
              Is there anything else we should know about you and your
              investment goals?
            </label>

            <Field
              className="form-control-lg"
              style={{ height: 4 + 'em' }}
              type="text"
              component="textarea"
              id="q14"
              name="q14"
            />
          </div>
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
    q4IRR = '',
    q4ARP = '',
    q4CoC = '',
    q5a = '',
    q5b = '',
    q6 = '',
    q7 = '',
    q8 = '',
    q9 = '',
    q10 = '',
    q11 = '',
    q12 = '',
    q13 = '',
    q14 = ''
  }) => ({
    fullname,
    email,
    tel,
    company,
    contactPref,
    q1,
    q2,
    q3,
    q4ARP,
    q4IRR,
    q4CoC,
    q5a,
    q5b,
    q6,
    q7,
    q8,
    q9,
    q10,
    q11,
    q12,
    q13,
    q14
  }),
  validationSchema: Yup.object().shape({
    fullname: Yup.string().required('Field is required'),
    email: Yup.string().required('Field is required'),
    tel: Yup.string().required('Field is required'),
    company: Yup.string().required('Field is required'),
    contactPref: Yup.string().required('Field is required'),
    q1: Yup.string().required('Field is required'),
    q2: Yup.string().required('Field is required'),
    q3: Yup.string().required('Field is required'),
    q4ARP: Yup.mixed().required('Field is required'),
    q4IRR: Yup.mixed().required('Field is required'),
    q4CoC: Yup.mixed().required('Field is required'),
    q5a: Yup.string().required('Field is required'),
    q5b: Yup.string().required('Field is required'),
    q6: Yup.string().required('Field is required'),
    q7: Yup.string().required('Field is required'),
    q8: Yup.string().required('Field is required'),
    q9: Yup.string().required('Field is required'),
    q10: Yup.string().required('Field is required'),
    q11: Yup.string().required('Field is required'),
    q12: Yup.string().required('Field is required'),
    q13: Yup.string().required('Field is required'),
    q14: Yup.string().required('Field is required')
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
