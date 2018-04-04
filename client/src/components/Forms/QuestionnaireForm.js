import React, { Component } from 'react';
import { withFormik, Form, Field } from 'formik';
import { Button, Input, Select, Card, CardBody, CardImage } from 'mdbreact';
import Yup from 'yup';

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
          {this.props.errors[val]}
        </small>
      );
    else return <div />;
  };

  render() {
    const { values, isSubmitting, handleChange, handleBlur } = this.props;
    return (
      <Form>
        <div className="row justify-content-between flex-column no-gutters">
          <div className="col-12 form-group">
            <label htmlFor="fullname" className="col-form-label">
              Full Name
            </label>
            <Field type="text" name="fullname" />
            {this.handleErrors('fullname')}
          </div>
          <div className="col-12 form-group">
            <label htmlFor="email" className="col-form-label">
              Email Address
            </label>
            <Field
              className="form-control mt-1 p-0"
              name="email"
              type="email"
            />
            {this.handleErrors('email')}
          </div>

          <div className="col-12 form-group">
            <label htmlFor="tel" className="col-form-label">
              Phone Number
            </label>
            <Field
              className="form-control mt-1 p-0"
              name="tel"
              component="input"
              type="text"
            />
            {this.handleErrors('tel')}
          </div>

          <div className="col-12 form-group">
            <label className="col-form-label">Preferred form of contact</label>
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
              {this.handleErrors('contactPref')}
            </div>
          </div>

          <div className="col-12 form-group">
            <label className="col-form-label" htmlFor="q1">
              Why are you interested in investing in Real Estate?
            </label>
            <Field
              className="form-control m-0 p-1"
              type="text"
              id="q1"
              component="input"
              name="q1"
            />
            {this.handleErrors('q1')}
          </div>
          <div className="col-12 form-group">
            <label className="col-form-label" htmlFor="q2">
              What is the biggest hurdle you are trying to overcome by investing
              in Real Estate?
            </label>

            <Field className="p-1 form-control" type="text" name="q2" />
            {this.handleErrors('q2')}
          </div>

          <div className="col-12 form-group mt-4">
            <label className="col-form-label" htmlFor="q3">
              Do you want to invest in multifamily, value-add projects?
            </label>

            <Field className="form-control p-1" name="q3" type="text" />
            {this.handleErrors('q3')}
          </div>

          <div className="col-12 form-group mt-4">
            <label className="col-form-label" htmlFor="q4">
              What are your return expectations?
            </label>

            <div className="d-flex flex-column">
              <Field
                name="q4ARP"
                className="form-control pl-0"
                placeholder="Annual Return Percentage (%)"
                type="text"
              />

              {this.handleErrors('q4ARP')}
              <Field
                className="form-control pl-0"
                name="q4IRR"
                type="text"
                placeholder="Internal rate of return (IRR) (%)"
              />
              {this.handleErrors('q4IRR')}

              <Field
                className="form-control pl-0"
                name="q4CoC"
                type="text"
                placeholder="Cash On Cash Return ($)"
              />
              {this.handleErrors('q4CoC')}
            </div>
          </div>
          <div className="col-12 form-group mt-4">
            <label className="col-form-label" htmlFor="q5">
              What is your investment minimum and maximum hold time?
            </label>

            <div className="d-flex flex-column justify-content-between">
              <Field
                className="form-control pl-0"
                name="q5a"
                placeholder="Investment Minimum"
                type="text"
              />
              {this.handleErrors('q5a')}

              <Field
                className="form-control pl-0"
                name="q5b"
                placeholder="Maximum Hold Time"
                type="text"
              />
              {this.handleErrors('q5b')}
            </div>
          </div>
          <div className="col-12 form-group mt-4">
            <label className="col-form-label" htmlFor="q6">
              What is the minimum dollar amount you are willing to invest?
            </label>

            <Field name="q6" type="text" className="form-control pl-0" />
            {this.handleErrors('q6')}
          </div>
          <div className="col-12  my-4">
            <div className="form-group">
              <label className="label" htmlFor="q7">
                Are you an accredited investor?
              </label>
              <div className="md-form">
                <small className="form-text text-muted">
                  (Makes more than $200k annually for the past 2 years and will
                  do so in this current year or have a net worth of $1M
                  excluding your primary residence)
                </small>

                <Field
                  className="p-0"
                  render={({ field, form, ...args }) => (
                    <Input
                      {...field}
                      {...args}
                      gap
                      className="p-0"
                      onClick={() => {
                        values.accreditedInvestor = 'yes';
                      }}
                      checked={values.accreditedInvestor === 'yes'}
                      label="Yes"
                      type="radio"
                      id="q7a"
                      value="yes"
                      onChange={handleChange}
                    />
                  )}
                  name="q7"
                />
                <Field
                  render={({ field, form, ...args }) => (
                    <Input
                      {...field}
                      {...args}
                      gap
                      onClick={() => {
                        values.accreditedInvestor = 'no';
                      }}
                      checked={values.accreditedInvestor === 'no'}
                      label="No"
                      type="radio"
                      id="q7b"
                      value="no"
                      onChange={handleChange}
                    />
                  )}
                  name="q7"
                />
              </div>
            </div>

            <label className="col-form-label" htmlFor="q8">
              Can you show proof of funds ?
            </label>
            {this.handleErrors('q8')}
            <Field
              render={({ field, form, ...args }) => (
                <Input
                  {...args}
                  {...field}
                  gap
                  onClick={() => {
                    values.proofOfFunds = 'yes';
                  }}
                  className="p-0"
                  checked={values.proofOfFunds === 'yes'}
                  label="Yes"
                  type="radio"
                  id="radio-q8a"
                  value="yes"
                  onChange={handleChange}
                />
              )}
              name="q8"
            />
            <Field
              render={({ field, form, ...args }) => (
                <Input
                  {...args}
                  {...field}
                  gap
                  onClick={() => {
                    values.proofOfFunds = 'no';
                  }}
                  className="p-0"
                  checked={values.proofOfFunds === 'no'}
                  label="No"
                  type="radio"
                  id="radio-q8b"
                  value="no"
                  onChange={handleChange}
                />
              )}
              name="q8"
            />

            <label className="col-form-label" htmlFor="q9">
              How would you rate your risk tolerance?
            </label>
            {this.handleErrors('q9')}
            <div className="d-flex justify-content-start">
              <Field
                render={({ field, form, ...args }) => (
                  <Input
                    {...field}
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
                    value="low"
                    onChange={handleChange}
                  />
                )}
                name="q9"
              />
              <Field
                render={({ field, form, ...args }) => (
                  <Input
                    {...field}
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
                    value="medium"
                    onChange={handleChange}
                  />
                )}
                name="q9"
              />
              <Field
                render={({ field, form, ...args }) => (
                  <Input
                    {...field}
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
                    value="High"
                    onChange={handleChange}
                  />
                )}
                name="q9"
              />
            </div>
          </div>

          <div className="col-12 form-group mt-4">
            <label className="col-form-label" htmlFor="q10">
              If you are out of the country, have you invested in the US real
              estate market in the past?
            </label>
            <Field className="form-control pl-0" type="text" name="q10" />
          </div>
          <div className="col-12 form-group mt-4">
            <label htmlFor="q11" className="col-form-label">
              Have you invested as a limited partner (LP) on a syndication deal
              in the past?
            </label>

            <Field className="form-control p-0" type="text" name="q11" />
            {this.handleErrors('q11')}
          </div>
          <div className="col-12 form-group mt-4">
            <label htmlFor="q12" className="col-form-label">
              Are you comfortable investing with other LPs or would you require
              to be the only LP in this investment?
            </label>

            <small className="form-text text-muted p-0">
              (If you’re a substantial portion of the equity being invested in
              the deal, we would ask for you to commit non-refundable equity to
              create an alignment of interest to close.)
            </small>

            <Field className="form-control m-2 p-0" type="text" name="q12" />
            {this.handleErrors('q12')}
          </div>
          <div className="col-12 form-group mt-4">
            <label htmlFor="q13" className="col-form-label m-0">
              In a short paragraph please provide us with your investing
              experience.
            </label>

            <Field
              className="form-control mt-4"
              type="text"
              style={{ height: 4 + 'em' }}
              component="textarea"
              id="q13"
              name="q13"
            />
            {this.handleErrors('q13')}
          </div>
          <div className="col-12 d-flex flex-column align-content-center justify-content-center mt-4">
            <label className="col-form-label m-0" htmlFor="q14">
              Is there anything else we should know about you and your
              investment goals?
            </label>

            <Field
              className="form-control"
              style={{ height: 4 + 'em' }}
              type="text"
              component="textarea"
              id="q14"
              name="q14"
            />
            {this.handleErrors('q14')}
          </div>
        </div>

        <div className="text-center mt-5">
          <Button
            type="submit"
            disabled={isSubmitting}
            size="lg"
            className="col-md-4"
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
    fullname: Yup.string().required('Field Required'),
    email: Yup.string().required('Field Required'),
    tel: Yup.string().required('Field Required'),
    company: Yup.string().required('Field Required'),
    contactPref: Yup.string().required('Field Required'),
    q1: Yup.string().required('Field Required'),
    q2: Yup.string().required('Field Required'),
    q3: Yup.string().required('Field Required'),
    q4ARP: Yup.mixed().required('Field Required'),
    q5a: Yup.string().required('Field Required'),
    q5b: Yup.string().required('Field Required'),
    q6: Yup.string().required('Field Required'),
    q7: Yup.string().required('Field Required'),
    q8: Yup.string().required('Field Required'),
    q9: Yup.string().required('Field Required'),
    q11: Yup.string().required('Field Required'),
    q12: Yup.string().required('Field Required'),
    q13: Yup.string().required('Field Required'),
    q14: Yup.string().required('Field Required')
  }),
  handleSubmit: async (values, { resetForm, setErrors, setSubmitting }) => {
    resetForm();
    setSubmitting(false);
    alert('Thank you, one of our team members will contact you soon.');
  }
})(QuestionnaireForm);
