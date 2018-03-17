import React, { Component } from "react";
import { withFormik, Form, Field } from "formik";
import { Input, Button } from "mdbreact";
import axios from "axios";
import Yup from "yup";
const style = {
  radioButton: {
    marginLeft: "1em"
  }
};
class QuestionnaireForm extends Component {
  state = {
    accredited: false,
    proofOfFunds: false,
    riskTolerance: false
  };
  render() {
    const {
      values,
      errors,
      touched,
      isSubmitting,
      handleChange,
      handleBlur
    } = this.props;
    const { riskTolerance } = this.state;
    return (
      <Form className="p-4 container d-flex flex-column justify-content-around">
        <div className="form-group row">
          <div className="col">
            <label className="display-4 mb-2">Basic Information</label>
          </div>
        </div>
        <div className="form-group">
          <div className="row">
            <div className="col-md-6">
              <Input
                className="form-control icon icons-sm"
                label="Firstname"
                type="text"
                name="firstname"
                id="firstname"
              />
              {touched.firstname &&
                errors.firstname && (
                  <small className="ml-2 font-italic text-danger">
                    {errors.firstname}
                  </small>
                )}
            </div>
            <div className="col-md-6">
              <Input
                className="form-control"
                id="lastname"
                label="Lastname"
                type="text"
                name="user"
              />
              {touched.lastname &&
                errors.lastname && (
                  <small className="font-italic form-text text-danger">
                    {errors.lastname}
                  </small>
                )}
            </div>
          </div>
        </div>

        <div className="mt-2 form-group">
          <div className="row">
            <div className="col-md-6">
              <Input
                className="form-control"
                label="Email Address"
                type="email"
                id="email"
                name="email"
              />
              {touched.email &&
                errors.email && (
                  <small className="font-bold font-italic text-danger">
                    {errors.email}
                  </small>
                )}
            </div>
            <div className="col-md-6">
              <Input
                className="form-control"
                label="Phone Number"
                type="text"
                id="phonenumber"
              />
            </div>
          </div>
        </div>
        <div className="mb-4 form-group row">
          <div className="col">
            <label className="display-4 mb-2">Investor Information</label>
          </div>
        </div>
        <div className="form-group">
          <ol>
            <li>
              <div className="form-group row">
                <div className="col">
                  <label className="col-form-label" htmlFor="q1">
                    Why are you interested in investing in Real Estate?
                  </label>
                  <Input
                    className="form-control p-0"
                    type="textarea"
                    id="q1"
                    name="q1"
                  />
                </div>
              </div>
            </li>
            <li>
              <div className="form-group row">
                <div className="col">
                  <label className="col-form-label m-0" htmlFor="q2">
                    What is the biggest hurdle you are trying to overcome by
                    investing in Real Estate?
                  </label>
                  <Input
                    className="form-control p-0"
                    id="q2"
                    type="text"
                    name="q2"
                  />
                </div>
              </div>
            </li>

            <li>
              <div className="form-group row">
                <div className="col">
                  <label className="col-form-label m-0" htmlFor="q3">
                    Do you want to invest in multifamily, value-add projects?
                  </label>
                  <Input
                    className="form-control p-0"
                    type="text"
                    name="q2"
                    id="q2"
                  />
                </div>
                {touched.q3 &&
                  errors.q3 && (
                    <small className="ml-2 font-italic text-danger">
                      {errors.q3}
                    </small>
                  )}
              </div>
            </li>
            <li>
              <div className="form-group">
                <label htmlFor="q4">What are your return expectations?</label>
                <div className="row">
                  <div className="col-md-4">
                    <Input
                      name="q4a"
                      className="col-form-label"
                      label="Annual Return Percentage"
                      type="number"
                    />
                  </div>
                  <div className="col-md-4">
                    <Input
                      name="q4b"
                      type="number"
                      label="Internal rate of return (IRR)"
                    />
                  </div>
                  <div className="col-md-4">
                    <Input
                      className="col-form-label"
                      name="q4c"
                      type="number"
                      label="Cash On Cash Return"
                    />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="form-group">
                <label className="col-form-label" htmlFor="q5">
                  What is your investment minimum and maximum hold time?
                </label>
                <div className="row">
                  <div className="col-md-6">
                    <Input
                      name="q5a"
                      id="q5"
                      label="Investment Minimum"
                      type="text"
                    />
                  </div>
                  <div className="col-md-6">
                    <Input
                      htmlFor="q5b"
                      label="Maximum hold time"
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="form-group">
                <div className="row">
                  <div className="col">
                    <label className="col-form-label" htmlFor="q6">
                      What is the minimum dollar amount you are willing to
                      invest?
                    </label>
                    <Input name="q6" type="text" className="form-control p-0" />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="form-group">
                <div className="row">
                  <div className="col">
                    <label className="col-form-label" htmlFor="q7">
                      Are you an accredited investor?
                    </label>
                    <small className="ml-4 form-text text-muted">
                      (Makes more than $200k annually for the past 2 years and
                      will do so in this current year or have a net worth of $1M
                      excluding your primary residence)
                    </small>
                    <Input
                      className="m-0 p-0"
                      gap
                      onClick={() => this.setState({ accredited: "yes" })}
                      checked={this.state.accredited === "yes"}
                      name="q7a"
                      type="radio"
                      id="q7a"
                      label="Yes"
                    />
                    <Input
                      className="p-0 m-0"
                      gap
                      onClick={() => this.setState({ accredited: "no" })}
                      checked={this.state.accredited === "no"}
                      name="q7b"
                      type="radio"
                      id="q7b"
                      label="No"
                    />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="form-group">
                <div className="row">
                  <div className="col">
                    <label htmlFor="" className="col-form-label" htmlFor="q8">
                      Can you show proof of funds ?
                    </label>
                    <Input
                      className="m-0 p-0"
                      gap
                      onClick={() => this.setState({ proofOfFunds: "yes" })}
                      checked={this.state.proofOfFunds === "yes"}
                      type="radio"
                      name="q8a"
                      id="q8a"
                      label="Yes"
                    />
                    <Input
                      className="m-0 p-0"
                      gap
                      type="radio"
                      onClick={() => this.setState({ proofOfFunds: "no" })}
                      checked={this.state.proofOfFunds === "no"}
                      name="q8b"
                      id="q8b"
                      label="Yes"
                    />
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="form-group">
                <label htmlFor="q9">
                  How would you rate your risk tolerance?
                </label>
                <Input
                  gap
                  onClick={() =>
                    this.setState({
                      riskTolerance: "low"
                    })
                  }
                  checked={riskTolerance === "low"}
                  className="m-0 p-0"
                  name="q9"
                  type="radio"
                  label="Low"
                />

                <Input
                  gap
                  className="m-0 p-0"
                  onClick={() => this.setState({ riskTolerance: "moderate" })}
                  checked={riskTolerance === "moderate"}
                  name="q9"
                  type="radio"
                  label="Moderate"
                />
                <Input
                  gap
                  onClick={() => this.setState({ riskTolerance: "high" })}
                  checked={riskTolerance === "high"}
                  className="m-0 p-0"
                  name="q9"
                  label="High"
                  type="radio"
                />
              </div>
            </li>
            <li>
              <div className="mt-4">
                <div className="form-group row">
                  <div className="col">
                    <label className="col-form-label m-0" htmlFor="q10">
                      If you are out of the country, have you invested in the US
                      real estate market in the past?
                    </label>
                    <Input
                      className="form-control p-0"
                      type="text"
                      name="q10"
                    />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="form-group row">
                <div className="col">
                  <label htmlFor="q11" className="col-form-label">
                    Have you invested as a limited partner (LP) on a syndication
                    deal in the past?
                  </label>
                  <Input className="form-control p-0" type="text" name="q11" />
                </div>
              </div>
            </li>
            <li>
              <div className="form-group row">
                <div className="col">
                  <div className="d-flex flex-column justify-content-start form-group">
                    <label htmlFor="q12" className="col-form-label">
                      Are you comfortable investing with other LPs or would you
                      require to be the only LP in this investment?
                    </label>
                    <Input
                      className="form-control p-0"
                      type="text"
                      name="q12"
                    />
                    <small
                      style={{ marginTop: "-30px" }}
                      className="form-text text-muted p-0"
                    >
                      If you’re a substantial portion of the equity being
                      invested in the deal, we would ask for you to commit
                      non-refundable equity to create an alignment of interest
                      to close.
                    </small>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="form-group row">
                <div className="col">
                  <label htmlFor="q13" className="col-form-label m-0">
                    In a short paragraph please provide us with your investing
                    experience.
                  </label>
                  <Input
                    className="form-control p-0"
                    type="textarea"
                    id="q13"
                    name="q13"
                  />{" "}
                </div>
              </div>
            </li>

            <li>
              <div style={{ marginTop: "2em" }} className="form-group row">
                <div className="col">
                  <label className="col-form-label m-0" htmlFor="q14">
                    Is there anything else we should know about you and your
                    investment goals?
                  </label>
                  <Input
                    className="form-control p-0"
                    type="textarea"
                    id="q14"
                    name="q14"
                  />
                </div>
              </div>
            </li>
          </ol>
        </div>

        <div className="text-center">
          <Button disabled={isSubmitting} size="lg" rounded gradient="blue">
            Submit <i className="ml-1 far fa-paper-plane" />
          </Button>
        </div>
      </Form>
    );
  }
}

export default withFormik({
  mapPropsToValues({
    firstname = "",
    lastname = "",
    email = "",
    question1 = "",
    question2 = "",
    question3 = "",
    question4a = "",
    question4b = "",
    question4c = "",
    question5 = "",
    question6 = "",
    question7 = "",
    question8 = "",
    question9 = "",
    question10 = "",
    question11 = "",
    question12 = "",
    question13 = "",
    question14 = ""
  }) {
    return {
      firstname,
      lastname,
      email,
      question1,
      question2,
      question3,
      question4a,
      question4b,
      question4c,
      question5,
      question6,
      question7,
      question8,
      question9,
      question10,
      question11,
      question12,
      question13,
      question14
    };
  },
  validationSchema: Yup.object().shape({
    firstname: Yup.string().required("Field is required"),
    lastname: Yup.string().required("Field is required"),
    email: Yup.string()
      .email("Email is not valid")
      .required("Field is required"),
    question1: Yup.mixed().required("Field is required"),
    question2: Yup.mixed().required("Field is required"),
    question3: Yup.mixed().required("Field is required"),
    question4a: Yup.mixed().required("Field is required"),
    question4b: Yup.mixed().required("Field is required"),
    question4c: Yup.mixed().required("Field is required"),
    question5: Yup.mixed().required("Field is required"),
    question6: Yup.mixed().required("Field is required"),
    question7: Yup.mixed().required("Field is required"),
    question8: Yup.mixed().required("Field is required"),
    question9: Yup.mixed().required("Field is required"),
    question10: Yup.mixed().required("Field is required"),
    question11: Yup.mixed().required("Field is required"),
    question12: Yup.mixed().required("Field is required"),
    question13: Yup.mixed().required("Field is required"),
    question14: Yup.mixed().required("Field is required")
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    console.log(values);
    resetForm();
    setSubmitting(false);
  }
})(QuestionnaireForm);
