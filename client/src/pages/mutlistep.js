import React from 'react';
import { Formik, Field } from 'formik';

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
      values: props.initialValues
    };
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
      return onSubmit(values);
    } else {
      this.next(values);
      bag.setSubmitting(false);
    }
  };

  render() {
    const { children } = this.props;
    const { page, values } = this.state;
    const activePage = React.Children.toArray(children)[page];
    const isLastPage = page === React.Children.count(children) - 1;
    return (
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
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            )}
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </form>
        )}
      />
    );
  }
}

export default () => (
  <div className="App">
    <h1>Multistep / Form Wizard </h1>
    <Wizard
      initialValues={{
        name: '',
        phone: '',
        email: '',
        contactPreference: ''
      }}
      onSubmit={(values, actions) => {
        sleep(300).then(() => {
          window.alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        });
      }}
    >
      <Wizard.Page>
        <div>
          <Field
            name="name"
            component="input"
            type="text"
            placeholder="Name"
            validate={required}
          />
          <Error name="name" />
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
      </Wizard.Page>
      <Wizard.Page
        validate={({ name, email, phone, contactPreference }) => {
          const errors = {};
          if (!name) {
            errors.name = 'Required';
          }
          if (!email) {
            errors.email = 'Required';
          }
          if (!phone) {
            errors.phone = 'Required';
          }
          if (!contactPreference) {
            errors.contactPreference = 'Required';
          }
          return errors;
        }}
      >
        <div>
          <label>Email</label>
          <Field
            name="asdfasdf"
            component="input"
            type="email"
            placeholder="Email"
          />
          <Error name="asdfasdf" />
        </div>
      </Wizard.Page>
    </Wizard>
  </div>
);
