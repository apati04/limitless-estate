import React from "react";

const FormField = props =>
  <form className="form-group" onSubmit={props.handleSubmit}>
    <label>Name:</label>
    <input
      className="form-control"
      name="name"
      placeholder="Jane Doe"
      onChange={props.handleChange}
      onBlur={props.handleBlur}
      value={props.values.name}
    />
    <label>Email:</label>
    <input
      className="form-control"
      name="email"
      type="email"
      placeholder="We will not share your email address with anyone else."
      onChange={props.handleChange}
      onBlur={props.handleBlur}
      value={props.values.email}
    />
    <label>Comment:</label>
    <textarea
      className="form-control"
      name="comment"
      placeholder="Your thoughts and/or questions are important to us!"
      onChange={props.handleChange}
      onBlur={props.handleBlur}
      value={props.values.comment}
    />
    <button className="btn btn-outline-info btn-sm" style={{ margin: "20px 0 20px 0" }} type="submit"><i className="far fa-paper-plane"/> SUBMIT</button>
  </form>;

  export default FormField;
