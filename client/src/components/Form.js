import React from "react";
import { Formik } from "formik";
import FormField from "./FormField";

const Form = () =>
  <div className="container" style={{ marginTop: "20px" }}>
    <Formik
      onSubmit={values => console.log(values)}
      initialValues={{ name: '', email: '', comment: '' }}
      component={FormField}
    />
  </div>;

export default Form;
