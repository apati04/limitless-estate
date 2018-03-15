import React, { Component } from "react";
import { withFormik, Form, Field } from "formik";
import axios from "axios";
import Yup from "yup";
const style = {
  radioButton: {
    marginLeft: "1em"
  }
};
class QuestionnaireForm extends Component {
  render() {
    const {
      values,
      errors,
      touched,
      isSubmitting,
      handleChange,
      handleBlur
    } = this.props;
    return (
      <Form>
        <div className="form-group row">
          <div className="col">
            <label htmlFor="firstname">Firstname</label>
            <Field className="form-control" type="text" name="firstname" />
            {touched.firstname &&
              errors.firstname && (
                <small className="ml-2 font-italic text-danger">
                  {errors.firstname}
                </small>
              )}
          </div>
          <div className="col">
            <label htmlFor="lastname">Lastname</label>
            <Field className="form-control" type="text" name="lastname" />
            {touched.lastname &&
              errors.lastname && (
                <small className="font-italic text-danger">
                  {errors.lastname}
                </small>
              )}
          </div>
        </div>
        <div className="form-group row">
          <div className="col">
            <label htmlFor="email">Email Address</label>
            <Field className="form-control" type="email" name="email" />
            {touched.email &&
              errors.email && (
                <small className="font-bold font-italic text-danger">
                  {errors.email}
                </small>
              )}
          </div>
        </div>

        <div className="mb-4">
          <h1>Main Questions</h1>
          <div className="form-group row">
            <div className="col">
              <label htmlFor="q1">
                1. Why are you interested in investing in Real Estate?
              </label>
              <Field className="form-control" type="text" name="q1" />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div className="form-group row">
            <div className="col">
              <label htmlFor="lastname">
                2. What is the biggest hurdle you are trying to overcome by
                investing in Real Estate?
              </label>
              <Field className="form-control" type="text" name="question2" />
            </div>
          </div>
        </div>
        <div className="mb-4">
          {touched.question3 &&
            errors.question3 && (
              <small className="ml-2 font-italic text-danger">
                {errors.question3}
              </small>
            )}
          <label htmlFor="question3">
            3. Do you want to invest in multifamily, value-add projects?
          </label>
          <div className="form-group">
            <Field className="form-control" type="text" name="question2" />
          </div>
        </div>
        <div className="mb-4 form-group">
          <label>4. What are your return expectations?</label>
          <div className="form-row">
            <div className="form-inline">
              <label htmlFor="q4a">a. Annual Return Percentage:</label>
              <div className="input-group">
                <Field
                  className="ml-2 col-4 form-control input-group-text text-center"
                  type="text"
                  name="q4a"
                />
                <div className="input-group-prepend">%</div>
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="form-inline">
              <label htmlFor="q4b">b. Internal rate of return (IRR): </label>
              <div className="input-group">
                <Field
                  className="ml-2 col-4 form-control input-group-text text-center"
                  type="text"
                  name="q4b"
                />
                <div className="input-group-prepend">%</div>
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="form-inline">
              <label htmlFor="q4c">c. cash on cash return: </label>
              <div className="input-group">
                <Field
                  className="col-4 ml-2 text-center form-control"
                  type="text"
                  name="q4c"
                />
                <div className="input-group-prepend">%</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4 form-row">
          <label htmlFor="question5">
            5. What is your investment minimum and maximum hold time?
          </label>
          <div className="form-inline">
            <div className="input-group">
              <div className="h5 m-0 input-group-prepend">$</div>
              <Field
                className="lead form-control col-3 p-0 ml-2"
                type="text"
                name="question5"
              />
              <div className="h5 input-group-prepend">for</div>

              <Field
                className="lead form-control col-3 p-0 ml-2"
                type="text"
                name="q5time"
              />
              <div className="h5 m-0 input-group-prepend">days</div>
            </div>
          </div>
        </div>

        <div className="mb-4 form-group">
          <div className="form-group">
            <label htmlFor="question6">
              6.<span className="ml-2">
                What is the minimum dollar amount you are willing to invest ?
              </span>
            </label>
            <div className="input-group ml-4 p-0">
              <div className="lead input-group-prepend">$</div>
              <Field
                className="lead form-control col-3 ml-2 p-0"
                type="text"
                name="question6"
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <div className="form-group">
            <label htmlFor="question7">
              7. <span className="ml-2">Are you an accredited investor ?</span>
            </label>
            <small className="ml-4 form-text text-muted">
              (Makes more than $200k annually for the past 2 years and will do
              so in this current year or have a net worth of $1M excluding your
              primary residence)
            </small>
            <div className="ml-2 mt-2 input-form-group">
              <label>
                <input
                  className="lead mr-1"
                  name="question7"
                  type="radio"
                  value="Yes"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                Yes
              </label>
              <label>
                <input
                  className="lead mr-1"
                  name="question7"
                  type="radio"
                  value="No"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                No
              </label>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div className="form-group">
            <label htmlFor="question8">
              8. <span className="ml-2">Can you show proof of funds?</span>
            </label>
            <div className="ml-2 mt-2 input-form-group">
              <label>
                <input
                  className="lead mr-1"
                  name="question8"
                  type="radio"
                  value="Yes"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                Yes
              </label>
              <label>
                <input
                  className="lead mr-1"
                  name="question8"
                  type="radio"
                  value="No"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                No
              </label>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <div className="form-group">
            <label htmlFor="question9">
              9. How would you rate your risk tolerance?
            </label>
            <div className="ml-2 mt-2 input-form-group">
              <label>
                <input
                  className="lead mr-2"
                  name="question9"
                  type="radio"
                  value="Low"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                Low
              </label>
              <label>
                <input
                  className="lead mr-2"
                  name="question9"
                  type="radio"
                  value="Moderate"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                Moderate
              </label>
              <label>
                <input
                  className="lead mr-2"
                  name="question9"
                  type="radio"
                  value="High"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                High
              </label>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div className="form-group row">
            <div className="col">
              <label htmlFor="q10">
                10. If you are out of the country, have you invested in the US
                real estate market in the past?
              </label>
              <Field className="form-control" type="text" name="q10" />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <div className="form-group row">
            <div className="col">
              <label htmlFor="q11">
                11. Have you invested as a limited partner (LP) on a syndication
                deal in the past?
              </label>
              <Field className="form-control" type="text" name="q11" />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <div className="form-group row">
            <div className="col">
              <label htmlFor="q12">
                12. Are you comfortable investing with other LPs or would you
                require to be the only LP in this investment?
              </label>
              <small className="form-text text-muted">
                If you’re a substantial portion of the equity being invested in
                the deal, we would ask for you to commit non-refundable equity
                to create an alignment of interest to close.
              </small>

              <Field className="form-control" type="text" name="q12" />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="question13">
            13. In a short paragraph please provide us with your investing
            experience.
          </label>
          <div className="form-group">
            <Field
              className="form-control"
              type="text"
              name="question13"
              component="textarea"
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="question14">
            14. Is there anything else we should know about you and your
            investment goals?
          </label>
          <div className="form-group">
            <Field
              className="form-control"
              type="text"
              name="question14"
              component="textarea"
            />
          </div>
        </div>

        <div className="text-right">
          <button className="btn btn-outline-info" disabled={isSubmitting}>
            Submit <i className="ml-1 far fa-paper-plane" />
          </button>
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
