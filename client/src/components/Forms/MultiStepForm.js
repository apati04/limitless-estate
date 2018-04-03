import React from 'react';
import { Formik, Field } from 'formik';
import {
  Card,
  CardBody,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter
} from 'mdbreact';
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const required = value => (value ? undefined : 'Required');

const Error = ({ name }) => (
  <Field
    name={name}
    render={({ form: { touched, errors } }) =>
      touched[name] && errors[name] ? <span>{errors[name]}</span> : null
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
    this.togle = this.toggle.bind(this);
  }

  next = values =>
    this.setState(state => ({
      page: Math.min(state.page + 1, this.props.children.length - 1),
      values
    }));

  previous = () =>
    this.setState(state => ({
      page: Math.max(state.page - 1, 0)
    }));

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
      console.log('values: ', values);

      return onSubmit(values);
    } else {
      this.next(values);
      bag.setSubmitting(false);
    }
  };
  toggle = e => {
    console.log('asdfasdf: ', e);
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
          render={({ values, handleSubmit, isSubmitting, handleReset }) => (
            <form onSubmit={handleSubmit}>
              {activePage}

              {page > 0 && (
                <button
                  type="button"
                  className="secondary"
                  onClick={this.previous}
                >
                  « Previous
                </button>
              )}

              {!isLastPage && <button type="submit">Next »</button>}
              {isLastPage && (
                <button
                  type="submit"
                  onClick={this.toggle}
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              )}
              <pre>{JSON.stringify(values, null, 2)}</pre>
              <div className="d-flex flex-center">
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                  <ModalHeader toggle={this.toggle}>
                    Thank you {this.state.values.fullname}
                  </ModalHeader>
                  <ModalBody>
                    One of our team members will contact you soon to let you
                    know how you can make an impact!
                  </ModalBody>
                  <ModalFooter>
                    <Button color="secondary" onClick={this.toggle}>
                      Close
                    </Button>{' '}
                    <Button color="primary" onClick={this.toggle}>
                      Save changes
                    </Button>
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
  <Card className="animated fadeInUp z-depth-4" narrow>
    <div className="view gradient-card-header blue-gradient text-white">
      <h2 className="h2-responsive">Investor Qualifier Questionnaire</h2>
      <p>Please fill out the questions below to let us know more about you!</p>
      <p style={{ padding: 0 }} className="m-0 p-0">
        One of our team members will contact you soon to let you know how you
        can make an impact!
      </p>
    </div>
    <CardBody>
      <div className="container">
        <Wizard
          initialValues={{
            fullname: '',
            email: '',
            phone: '',
            q1: '',
            q2: '',
            q3: '',
            q4IRR: '',
            q4ARP: '',
            q4CoC: '',
            q5a: '',
            q5b: '',
            q6: '',
            q7: '',
            q8: '',
            q9: '',
            q10: '',
            q11: '',
            q12: '',
            q13: '',
            q14: '',
            contactPreference: ''
          }}
          onSubmit={async (values, actions) => {
            sleep(300).then(response => {
              window.alert(JSON.stringify(values, null, 2));
              console.log(response);
            });
            console.log(actions);
          }}
        >
          <Wizard.Page>
            <div>
              <Field
                name="fullname"
                component="input"
                type="text"
                placeholder="Name"
                validate={required}
              />
              <Error name="fullname" />
            </div>
            <div>
              <Field
                name="email"
                component="input"
                type="email"
                placeholder="Email"
                validate={required}
              />
              <Error name="email" />
            </div>
            <div>
              <Field
                name="phone"
                component="input"
                type="text"
                placeholder="Phone Number"
                validate={required}
              />
              <Error name="phone" />
            </div>
            <div className="form-group">
              <Field
                className="form-control select-wrapper select-dropdown d-block"
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

            <div className="col-12 form-group">
              <label className="col-form-label" htmlFor="q2">
                What is the biggest hurdle you are trying to overcome by
                investing in Real Estate?
              </label>

              <Field className="p-1 form-control" type="text" name="q2" />
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
            </div>
          </Wizard.Page>
          <Wizard.Page>
            <div className="col-12 form-group mt-4">
              <label className="col-form-label" htmlFor="q3">
                Do you want to invest in multifamily, value-add projects?
              </label>

              <Field className="form-control p-1" name="q3" type="text" />
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

                <Field
                  className="form-control pl-0"
                  name="q5b"
                  placeholder="Maximum Hold Time"
                  type="text"
                />
              </div>
            </div>
            <div className="col-12 form-group mt-4">
              <label className="col-form-label" htmlFor="q6">
                What is the minimum dollar amount you are willing to invest?
              </label>

              <Field name="q6" type="text" className="form-control pl-0" />
            </div>
          </Wizard.Page>
          <Wizard.Page>
            <div className="col-12 form-group mt-4">
              <label className="col-form-label" htmlFor="q10">
                If you are out of the country, have you invested in the US real
                estate market in the past?
              </label>
              <Field className="form-control pl-0" type="text" name="q10" />
            </div>
            <div className="col-12 form-group mt-4">
              <label htmlFor="q11" className="col-form-label">
                Have you invested as a limited partner (LP) on a syndication
                deal in the past?
              </label>

              <Field className="form-control p-0" type="text" name="q11" />
            </div>
            <div className="col-12 form-group mt-4">
              <label htmlFor="q12" className="col-form-label">
                Are you comfortable investing with other LPs or would you
                require to be the only LP in this investment?
              </label>

              <small className="form-text text-muted p-0">
                (If you’re a substantial portion of the equity being invested in
                the deal, we would ask for you to commit non-refundable equity
                to create an alignment of interest to close.)
              </small>

              <Field className="form-control m-2 p-0" type="text" name="q12" />
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
            </div>
          </Wizard.Page>
        </Wizard>
      </div>
    </CardBody>
  </Card>
);
