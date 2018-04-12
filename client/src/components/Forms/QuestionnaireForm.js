import React, { Component } from "react";
import { withFormik, Form, Field } from "formik";
import { NavLink } from "react-router-dom";
import {
  Button,
  Input,
  Select,
  Card,
  CardBody,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  CardImage
} from "mdbreact";
import Yup from "yup";
import axios from "axios";
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
class QuestionnaireForm extends Component {
  state = {
    accredited: false,
    proofOfFunds: false,
    riskTolerance: false,
    modal: false
  };
  toggle = e => {
    let isValid = true;
    sleep(500).then(() => {
      let check = Object.values(this.props.errors);
      if (check.includes("Required")) {
        return;
      } else {
        this.setState({ modal: !this.state.modal });
      }
    });
  };
  handleErrors = val => {
    return this.props.touched[val] && this.props.errors[val] ? (
      <small className="ml-2 font-italic text-danger">
        {this.props.errors[val]}
      </small>
    ) : null;
  };

  render() {
    const {
      values,
      handleSubmit,
      isSubmitting,
      handleChange,
      handleBlur
    } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div className="col-12">
          <div className="md-form">
            <Field
              name="fullname"
              component="input"
              className="form-control"
              type="text"
              placeholder="Name"
              id="fullname"
            />
            {this.handleErrors("fullname")}
          </div>
        </div>

        <div className="col-12">
          <div className="md-form">
            <Field
              name="email"
              className="form-control"
              component="input"
              type="email"
              placeholder="Email"
              id="email"
            />
            {this.handleErrors("email")}
          </div>
        </div>

        <div className="col-12">
          <div className="md-form">
            <Field
              name="phone"
              className="form-control"
              component="input"
              type="text"
              placeholder="Phone Number"
            />
            {this.handleErrors("phone")}
          </div>
        </div>

        <div className="col-12 col-md-6 py-3">
          <div className="form-group">
            <label className="col-form-label" htmlFor="contactPreference">
              Preferred form of contact:
            </label>
            <div className="md-form mt-0">
              <Field
                className=" custom-select select-dropdown d-block"
                name="contactPreference"
                component="select"
              >
                <option disabled label="Please Choose One..." />
                <option value="email">Email</option>
                <option value="phone">Phone Call</option>
                <option value="text">Text Message</option>
              </Field>
            </div>
            {this.handleErrors("contactPreference")}
          </div>
        </div>

        <div className="col-12 py-3">
          <div className="form-group">
            <label className="label m-0" htmlFor="q1">
              Why are you interested in investing in Real Estate?
            </label>
            <div className="md-form m-0">
              <Field
                type="text"
                id="q1"
                className="pt-0 form-control md-textarea"
                component="textarea"
                name="q1"
              />
              {this.handleErrors("q1")}
            </div>
          </div>
        </div>

        <div className="col-12 py-3">
          <div className="form-group">
            <label className="m-0 label" htmlFor="q2">
              What is the biggest hurdle you are trying to overcome by investing
              in Real Estate?
            </label>
            <div className="md-form m-0">
              <Field
                className="py-2 form-control md-textarea"
                type="text"
                component="textarea"
                name="q2"
              />
              {this.handleErrors("q2")}
            </div>
          </div>
        </div>

        <div className="col-12 py-3">
          <div className="form-group">
            <label className="label" htmlFor="q3">
              Do you want to invest in multifamily, value-add projects?
            </label>
            <div className="md-form m-0">
              <Field className="form-control my-0" name="q3" type="text" />
              {this.handleErrors("q3")}
            </div>
          </div>
        </div>
        <div className="col-12 py-3">
          <div className="form-group">
            <label className="col-form-label" htmlFor="q4">
              What are your return expectations?
            </label>

            <div className="md-form m-0">
              <Field
                name="q4ARP"
                className="form-control pl-0"
                placeholder="Annual Return Percentage (%)"
                type="text"
              />
              <Field
                className="form-control pl-0"
                type="text"
                placeholder="Internal rate of return (IRR) (%)"
                name="q4IRR"
              />
              <Field
                className="form-control pl-0"
                name="q4CoC"
                type="text"
                placeholder="Cash On Cash Return ($)"
              />
            </div>
          </div>
        </div>
        <div className="col-12 py-3">
          <div className="form-group">
            <label className="label" htmlFor="q5">
              What is your investment minimum and maximum hold time?
            </label>
            <div className="md-form m-0">
              <Field className="form-control pt-0" name="q5" type="text" />
              {this.handleErrors("q5")}
            </div>
          </div>
        </div>
        <div className="col-12 py-3">
          <div className="form-group">
            <label className="label" htmlFor="q6">
              What is the minimum dollar amount you are willing to invest?
            </label>
            <div className="md-form m-0">
              <Field name="q6" type="text" className="form-control p" />
              {this.handleErrors("q6")}
            </div>
          </div>
        </div>
        <div className="col-12  py-3">
          <div className="form-group">
            <label className="label" htmlFor="q7">
              Are you an accredited investor?
            </label>
            <div className="md-form p-0 m-0">
              <small className="form-text text-muted">
                (Makes more than $200k annually for the past 2 years and will do
                so in this current year or have a net worth of $1M excluding
                your primary residence)
              </small>
            </div>
            <div className="d-flex justify-content-start align-items-start">
              <Field
                render={({ field, form, ...args }) => (
                  <Input
                    {...field}
                    {...args}
                    gap
                    className="p-0"
                    onClick={() => {
                      form.values.accreditedInvestor = "yes";
                    }}
                    checked={form.values.accreditedInvestor === "yes"}
                    label="Yes"
                    type="radio"
                    id="q7a"
                    value="yes"
                    onChange={form.handleChange}
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
                      form.values.accreditedInvestor = "no";
                    }}
                    checked={form.values.accreditedInvestor === "no"}
                    label="No"
                    type="radio"
                    id="q7b"
                    value="no"
                    onChange={form.handleChange}
                  />
                )}
                name="q7"
              />
              {this.handleErrors("q7")}
            </div>
          </div>
        </div>
        <div className="col-12 py-3">
          <label className="col-form-label" htmlFor="q8">
            Can you show proof of funds ?
          </label>

          <div className="p-0 m-0 d-flex justify-content-start align-items-center">
            <Field
              render={({ field, form, ...args }) => (
                <Input
                  {...args}
                  {...field}
                  gap
                  onClick={() => {
                    form.values.proofOfFunds = "yes";
                  }}
                  className="p-0"
                  checked={form.values.proofOfFunds === "yes"}
                  label="Yes"
                  type="radio"
                  id="radio-q8a"
                  value="yes"
                  onChange={form.handleChange}
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
                    form.values.proofOfFunds = "no";
                  }}
                  className="p-0"
                  checked={form.values.proofOfFunds === "no"}
                  label="No"
                  type="radio"
                  id="radio-q8b"
                  value="no"
                  onChange={form.handleChange}
                />
              )}
              name="q8"
            />
            {this.handleErrors("q8")}
          </div>
        </div>
        <div className="col-12 py-3">
          <label className="col-form-label" htmlFor="q9">
            How would you rate your risk tolerance?
          </label>
          <div className="form-row m-0 p-0">
            <div className="d-flex justify-content-start">
              <Field
                render={({ field, form, ...args }) => (
                  <Input
                    {...field}
                    {...args}
                    gap
                    className="p-0"
                    onClick={() => {
                      form.values.riskTolerance = "low";
                    }}
                    checked={form.values.riskTolerance === "low"}
                    label="Low"
                    type="radio"
                    id="radio-q9a"
                    value="low"
                    onChange={form.handleChange}
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
                      form.values.riskTolerance = "medium";
                    }}
                    checked={form.values.riskTolerance === "medium"}
                    label="Medium"
                    type="radio"
                    id="radio-q9b"
                    value="medium"
                    onChange={form.handleChange}
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
                      form.values.riskTolerance = "High";
                    }}
                    checked={form.values.riskTolerance === "High"}
                    label="High"
                    type="radio"
                    id="radio-q9c"
                    value="High"
                    onChange={form.handleChange}
                  />
                )}
                name="q9"
              />
              {this.handleErrors("q9")}
            </div>
          </div>
        </div>
        <div className="col-12 py-3">
          <div className="form-group m-0 pb-0">
            <label className="label" htmlFor="q10">
              If you are based outside of the US, have you invested in the US
              real estate market in the past?
            </label>
            <label className="label">
              <small>(If applicable)</small>
            </label>

            <div className="md-form m-0">
              <Field
                className="form-control p-0 my-0"
                component="input"
                type="text"
                name="q10"
              />
            </div>
          </div>
        </div>

        <div className="col-12 py-3">
          <div className="form-group">
            <label htmlFor="q11" className="col-form-label">
              Have you invested as a limited partner (LP) on a syndication deal
              in the past?
            </label>
            <div className="md-form m-0">
              <Field className="form-control p-0" type="text" name="q11" />
              {this.handleErrors("q11")}
            </div>
          </div>
        </div>

        <div className="col-12 py-1">
          <div className="form-group p-0">
            <label htmlFor="q12" className="label">
              Are you comfortable investing with other LPs or would you require
              to be the only LP in this investment?
            </label>
            <label className="label">
              <small className="form-text text-muted p-0">
                (If you’re a substantial portion of the equity being invested in
                the deal, we would ask for you to commit non-refundable equity
                to create an alignment of interest to close.)
              </small>
            </label>

            <div className="md-form m-0">
              <Field className="form-control py-2" type="text" name="q12" />
              {this.handleErrors("q12")}
            </div>
          </div>
        </div>
        <div className="col-12 py-1">
          <div className="form-group">
            <label htmlFor="q13" className="label m-0">
              In a short paragraph please provide us with your investing
              experience.
            </label>
            <div className="md-form m-0">
              <Field
                className="py-2 form-control md-textarea"
                type="text"
                component="textarea"
                id="q13"
                name="q13"
              />
              {this.handleErrors("q13")}
            </div>
          </div>
        </div>
        <div className="col-12 py-3">
          <div className="form-group">
            <label htmlFor="q14" className="label m-0">
              Is there anything else we should know about you and your
              investment goals?
            </label>
            <div className="md-form m-0">
              <Field
                className="py-2 form-control md-textarea"
                type="text"
                component="textarea"
                name="q14"
              />
              {this.handleErrors("q14")}
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <button
            type="submit"
            onClick={this.toggle}
            className="btn btn-lg  blue-gradient col-md-4"
            disabled={isSubmitting}
          >
            Submit <i className="ml-1 far fa-paper-plane" />
          </button>
        </div>
        <div className="d-flex flex-center">
          <Modal
            className="modal-dialog modal-dialog-centered"
            isOpen={this.state.modal}
            toggle={this.toggle}
          >
            <ModalHeader>Thank you {values.fullname}</ModalHeader>
            <ModalBody>
              One of our team members will contact you soon!
            </ModalBody>
            <ModalFooter>
              <NavLink className="btn btn-secondary" to="/">
                Back To Home
              </NavLink>
            </ModalFooter>
          </Modal>
        </div>
      </form>
    );
  }
}

export default withFormik({
  mapPropsToValues: ({
    fullname = "",
    email = "",
    accreditedInvestor = "",
    phone = "",
    q1 = "",
    q2 = "",
    q3 = "",
    q4IRR = "",
    q4ARP = "",
    q4CoC = "",
    q4 = "",
    q5 = "",
    q6 = "",
    q7 = "",
    q8 = "",
    q9 = "",
    q10 = "",
    q11 = "",
    q12 = "",
    q13 = "",
    q14 = "",
    proofOfFunds = "",
    contactPreference = ""
  }) => ({
    fullname,
    email,
    accreditedInvestor,
    phone,
    q1,
    q2,
    q3,
    q4IRR,
    q4ARP,
    q4CoC,
    q5,
    q6,
    q7,
    q8,
    q9,
    q10,
    q11,
    q12,
    q13,
    q14,
    proofOfFunds,
    contactPreference
  }),
  validationSchema: Yup.object().shape({
    fullname: Yup.string().required("Required"),
    email: Yup.string().required("Required"),
    phone: Yup.string().required("Required"),
    contactPreference: Yup.string().required("Required"),
    q1: Yup.string().required("Required"),
    q2: Yup.string().required("Required"),
    q3: Yup.string().required("Required"),
    q4IRR: Yup.string().notRequired(),
    q4ARP: Yup.string().notRequired(),
    q4CoC: Yup.string().notRequired(),
    q5: Yup.string().required("Required"),
    q6: Yup.string().required("Required"),
    q7: Yup.string().required("Required"),
    q8: Yup.string().required("Required"),
    q9: Yup.string().required("Required"),
    q10: Yup.string().notRequired(),
    q11: Yup.string().required("Required"),
    q12: Yup.string().required("Required"),
    q13: Yup.string().required("Required"),
    q14: Yup.string().required("Required")
  }),
  async handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    const payload = await axios.post("/api/questionnaire", values);
    resetForm();

    setSubmitting(false);
  }
})(QuestionnaireForm);
