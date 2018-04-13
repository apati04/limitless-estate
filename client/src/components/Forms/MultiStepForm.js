import React from 'react';
import { Formik, Field } from 'formik';
import { NavLink } from 'react-router-dom';
import {
  Card,
  CardBody,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Input
} from 'mdbreact';
import axios from 'axios';
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const required = value => (value ? undefined : 'Required');

const Error = ({ name }) => (
  <Field
    name={name}
    className="pt-0"
    render={({ form: { touched, errors } }) =>
      touched[name] && errors[name] ? (
        <span className="pt-0 text-danger error error_message">
          {errors[name]}
        </span>
      ) : null
    }
  />
);

class Wizard extends React.Component {
  static Page = ({ children }) => children;

  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      values: props.initialValues,
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  next = values => {
    window.scrollTo(0, 0);
    this.setState(state => ({
      page: Math.min(state.page + 1, this.props.children.length - 1),
      values
    }));
  };

  previous = () => {
    window.scrollTo(0, 0);
    this.setState(state => ({
      page: Math.max(state.page - 1, 0)
    }));
  };

  validate = values => {
    const activePage = React.Children.toArray(this.props.children)[
      this.state.page
    ];
    return activePage.props.validate ? activePage.props.validate(values) : {};
  };

  handleSubmit = (values, bag) => {
    const { children, onSubmit } = this.props;
    const { page } = this.state;
    const isLastPage = page === React.Children.count(children) - 1;
    if (isLastPage) {
      return onSubmit(values);
    } else {
      this.next(values);
      bag.setSubmitting(false);
    }
  };
  toggle = e => {
    this.setState({
      modal: !this.state.modal
    });
  };
  render() {
    const { children } = this.props;
    const { page, values } = this.state;
    const activePage = React.Children.toArray(children)[page];
    const isLastPage = page === React.Children.count(children) - 1;
    return (
      <div>
        <Formik
          initialValues={values}
          enableReinitialize={false}
          onSubmit={this.handleSubmit}
          render={({
            values,
            handleSubmit,
            isSubmitting,
            handleChange,
            handleBlur,
            handleReset
          }) => (
            <form onSubmit={handleSubmit}>
              {activePage}
              <div className="text-center">
                {page > 0 && (
                  <button
                    className="btn btn-secondary mr-2"
                    onClick={this.previous}
                  >
                    « Previous
                  </button>
                )}

                {!isLastPage && (
                  <button className="btn btn-primary" type="submit">
                    Next »
                  </button>
                )}
                {isLastPage && (
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={this.toggle}
                    disabled={isSubmitting}
                  >
                    Submit
                  </button>
                )}
              </div>
              <div className="d-flex flex-center">
                <Modal
                  className="modal-dialog modal-dialog-centered"
                  isOpen={this.state.modal}
                  toggle={this.toggle}
                >
                  <ModalHeader toggle={this.toggle}>
                    Thank you {this.state.values.fullname}
                  </ModalHeader>
                  <ModalBody>
                    One of our team members will contact you soon to let you
                    know how you can make an impact!
                  </ModalBody>
                  <ModalFooter>
                    <NavLink className="btn btn-secondary" to="/">
                      Back To Home
                    </NavLink>
                  </ModalFooter>
                </Modal>
              </div>
            </form>
          )}
        />
      </div>
    );
  }
}

export default () => (
  <Wizard
    initialValues={{
      fullname: '',
      email: '',
      accreditedInvestor: '',
      phone: '',
      q1: '',
      q2: '',
      q3: '',
      q4IRR: '',
      q4ARP: '',
      q4CoC: '',
      q5: '',
      q6: '',
      q7: '',
      q8: '',
      q9: '',
      q10: '',
      q11: '',
      q12: '',
      q13: '',
      q14: '',
      proofOfFunds: '',
      contactPreference: ''
    }}
    onSubmit={async (values, actions) => {
      const payload = await axios.post('/api/questionnaire', values);
    }}
  >
    <Wizard.Page>
      <div className="col-12 py-1">
        <div className="md-form">
          <Field
            name="fullname"
            component="input"
            className="form-control my-0"
            type="text"
            placeholder="Name"
            validate={required}
            id="fullname"
          />
          <Error name="fullname" />
        </div>
      </div>

      <div className="col-12 py-1">
        <div className="md-form">
          <Field
            name="email"
            className="my-0 form-control"
            component="input"
            type="email"
            placeholder="Email"
            id="email"
            validate={required}
          />

          <Error name="email" />
        </div>
      </div>

      <div className="col-12 py-1">
        <div className="md-form">
          <Field
            name="phone"
            className="form-control my-0"
            component="input"
            type="text"
            placeholder="Phone Number"
            validate={required}
          />
          <Error name="phone" />
        </div>
      </div>

      <div className="col-6 py-1">
        <div className="form-group">
          <label className="label" htmlFor="contactPreference">
            Best form of contact:
          </label>
          <div className="md-form">
            <Field
              className="form-control my-0 select-wrapper select-dropdown d-block"
              name="contactPreference"
              component="select"
              validate={required}
            >
              <option label="Please choose one..." />
              <option value="email" label="Email" />
              <option value="phone" label="Phone call" />
              <option value="text" label="Text Message" />
            </Field>
            <Error name="contactPreference" />
          </div>
        </div>
      </div>

      <div className="col-12 py-1">
        <div className="form-group">
          <label className="label" htmlFor="q1">
            Why are you interested in investing in Real Estate?
          </label>
          <div className="md-form">
            <Field
              type="text"
              id="q1"
              className="py-2 form-control md-form md-textarea"
              component="textarea"
              placeholder="Your answer here..."
              name="q1"
            />
          </div>
        </div>
      </div>

      <div className="col-12 py-1">
        <div className="form-group">
          <label className="m-0 label" htmlFor="q2">
            What is the biggest hurdle you are trying to overcome by investing
            in Real Estate?
          </label>
          <div className="md-form" />
          <Field
            className="py-2 form-control md-textarea"
            type="text"
            component="textarea"
            placeholder="Your answer here..."
            name="q2"
          />
        </div>
      </div>
    </Wizard.Page>
    <Wizard.Page>
      <div className="col-12 py-1">
        <div className="form-group">
          <label className="label" htmlFor="q3">
            Do you want to invest in multifamily, value-add projects?
          </label>
          <div className="md-form">
            <Field className="form-control my-0" name="q3" type="text" />
          </div>
        </div>
      </div>
      <div className="col-12 py-1">
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
              name="q4IRR"
              type="text"
              placeholder="Internal rate of return (IRR) (%)"
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
      <div className="col-12 py-1">
        <div className="form-group">
          <label className="label" htmlFor="q5">
            What is your investment minimum and maximum hold time?
          </label>
          <div className="md-form">
            <Field className="form-control my-0" name="q5" type="text" />
          </div>
        </div>
      </div>
      <div className="col-12 py-1">
        <div className="form-group">
          <label className="label" htmlFor="q6">
            What is the minimum dollar amount you are willing to invest?
          </label>
          <div className="md-form">
            <Field name="q6" type="text" className="form-control pl-0" />
          </div>
        </div>
      </div>
      <div className="col-12  py-1">
        <div className="form-group">
          <label className="label" htmlFor="q7">
            Are you an accredited investor?
          </label>
          <div className="md-form p-0 m-0">
            <small className="form-text text-muted">
              (Makes more than $200k annually for the past 2 years and will do
              so in this current year or have a net worth of $1M excluding your
              primary residence)
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
                    form.values.accreditedInvestor = 'yes';
                  }}
                  checked={form.values.accreditedInvestor === 'yes'}
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
                    form.values.accreditedInvestor = 'no';
                  }}
                  checked={form.values.accreditedInvestor === 'no'}
                  label="No"
                  type="radio"
                  id="q7b"
                  value="no"
                  onChange={form.handleChange}
                />
              )}
              name="q7"
            />
          </div>
        </div>
      </div>
      <div className="col-12 py-1">
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
                  form.values.proofOfFunds = 'yes';
                }}
                className="p-0"
                checked={form.values.proofOfFunds === 'yes'}
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
                  form.values.proofOfFunds = 'no';
                }}
                className="p-0"
                checked={form.values.proofOfFunds === 'no'}
                label="No"
                type="radio"
                id="radio-q8b"
                value="no"
                onChange={form.handleChange}
              />
            )}
            name="q8"
          />
        </div>
      </div>
    </Wizard.Page>
    <Wizard.Page>
      <div className="col-12 py-1">
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
                    form.values.riskTolerance = 'low';
                  }}
                  checked={form.values.riskTolerance === 'low'}
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
                    form.values.riskTolerance = 'medium';
                  }}
                  checked={form.values.riskTolerance === 'medium'}
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
                    form.values.riskTolerance = 'High';
                  }}
                  checked={form.values.riskTolerance === 'High'}
                  label="High"
                  type="radio"
                  id="radio-q9c"
                  value="High"
                  onChange={form.handleChange}
                />
              )}
              name="q9"
            />
          </div>
        </div>
      </div>
      <div className="col-12 py-1">
        <div className="form-group m-0 pb-0">
          <label className="label" htmlFor="q10">
            If you are based outside of the US, have you invested in the US real
            estate market in the past?
          </label>
          <label className="label">
            <small>(If applicable)</small>
          </label>

          <div className="md-form ">
            <Field
              className="form-control p-0 my-0"
              component="input"
              type="text"
              name="q10"
            />
          </div>
        </div>
      </div>

      <div className="col-12 py-1">
        <div className="form-group">
          <label htmlFor="q11" className="col-form-label">
            Have you invested as a limited partner (LP) on a syndication deal in
            the past?
          </label>
          <div className="md-form">
            <Field className="form-control p-0" type="text" name="q11" />
          </div>
        </div>
      </div>

      <div className="col-12 py-1">
        <div className="form-group p-0">
          <label htmlFor="q12" className="label">
            Are you comfortable investing with other LPs or would you require to
            be the only LP in this investment?
          </label>
          <label className="label">
            <small className="form-text text-muted p-0">
              (If you’re a substantial portion of the equity being invested in
              the deal, we would ask for you to commit non-refundable equity to
              create an alignment of interest to close.)
            </small>
          </label>

          <div className="md-form">
            <Field className="form-control p-0" type="text" name="q12" />
          </div>
        </div>
      </div>
      <div className="col-12 py-1">
        <div className="form-group">
          <label htmlFor="q13" className="label m-0">
            In a short paragraph please provide us with your investing
            experience.
          </label>
          <div className="md-form">
            <Field
              className="py-2 form-control md-textarea"
              type="text"
              component="textarea"
              placeholder="Your answer here..."
              id="q13"
              name="q13"
            />
          </div>
        </div>
      </div>
      <div className="col-12 py-1">
        <div className="form-group">
          <label htmlFor="q14" className="label m-0">
            Is there anything else we should know about you and your investment
            goals?
          </label>
          <div className="md-form">
            <Field
              className="py-2 form-control md-textarea"
              type="text"
              component="textarea"
              placeholder="Your answer here..."
              name="q14"
            />
          </div>
        </div>
      </div>
    </Wizard.Page>
  </Wizard>
);
