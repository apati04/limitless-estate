import React, { Component } from 'react';
import { Formik } from 'formik';
import yup from 'yup';
import Recaptcha from 'react-recaptcha';

class ExampleComponent extends Component {
  componentDidMount() {
    console.log(typeof process.env.REACT_APP_GCK);
  }
  verifyCallback = recaptchaToken => {
    // Here you will get the final recaptchaToken!!!
    console.log(recaptchaToken, '<= your recaptcha token');
  };
  render() {
    return (
      <div>
        <Formik
          initialValues={{ recaptcha: '' }}
          onSubmit={values => {
            console.log(
              JSON.stringify({ recaptcha: values.recaptcha }, null, 2)
            );
          }}
          validationSchema={yup
            .object()
            .shape({ recaptcha: yup.string().required() })}
          render={({
            values,
            errors,
            touched,
            handleSubmit,
            setFieldValue
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Recaptcha Validation</label>
                <Recaptcha
                  sitekey=""
                  render="explicit"
                  theme="dark"
                  verifyCallback={response => {
                    setFieldValue('recaptcha', response);
                  }}
                  onloadCallback={() => {
                    console.log('doneloading');
                  }}
                />
                {errors.recaptcha && touched.recaptcha && (
                  <p>{errors.recaptcha}</p>
                )}
              </div>
              <button className="btn btn-primary">Submit</button>
            </form>
          )}
        />
      </div>
    );
  }
}

export default ExampleComponent;
