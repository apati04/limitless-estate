import React, { Component } from 'react';
import { withFormik, Field } from 'formik';
import { NavLink } from 'react-router-dom';
import { Input, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
import Yup from 'yup';
import axios from 'axios';
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
      if (check.includes('Required')) {
        return;
      } else {
        this.setState({ modal: !this.state.modal });
      }
    });
  };
  handleErrors = val => {
    return this.props.touched[val] && this.props.errors[val] ? (
      <small className='ml-2 font-italic text-danger'>
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
        <div className='col-12'>
          <div className='md-form'>
            <Field
              name='fullname'
              component='input'
              className='form-control'
              type='text'
              placeholder='Name'
              id='fullname'
            />
            {this.handleErrors('fullname')}
          </div>
        </div>

        <div className='col-12'>
          <div className='md-form'>
            <Field
              name='email'
              className='form-control'
              component='input'
              type='email'
              placeholder='Email'
              id='email'
            />
            {this.handleErrors('email')}
          </div>
        </div>

        <div className='col-12'>
          <div className='md-form'>
            <Field
              name='phone'
              className='form-control'
              component='input'
              type='text'
              placeholder='Phone Number'
            />
            {this.handleErrors('phone')}
          </div>
        </div>

        <div className='col-12 col-md-6 py-3'>
          <div className='form-group'>
            <label className='col-form-label' htmlFor='contactPreference'>
              Preferred form of contact:
            </label>
            <div className='md-form mt-0'>
              <Field
                className=' custom-select select-dropdown d-block'
                name='contactPreference'
                component='select'
              >
                <option disabled label='Please Choose One...' />
                <option value='Email'>Email</option>
                <option value='Phone Call'>Phone Call</option>
                <option value='Text Message (SMS)'>Text Message</option>
              </Field>
            </div>
            {this.handleErrors('contactPreference')}
          </div>
        </div>

        <div className='col-12 py-3'>
          <div className='form-group'>
            <label className='label m-0' htmlFor='q1'>
              Why are you interested in investing in Real Estate?
            </label>
            <div className='md-form m-0'>
              <Field
                type='text'
                id='q1'
                className='pt-2 form-control md-textarea'
                component='textarea'
                name='q1'
              />
              {this.handleErrors('q1')}
            </div>
          </div>
        </div>

        <div className='col-12 py-3'>
          <div className='form-group'>
            <label className='label' htmlFor='q3'>
              Do you want to invest in multifamily, value-add projects?
            </label>
            <div className='md-form m-0'>
              <Field className='form-control my-0' name='q3' type='text' />
              {this.handleErrors('q3')}
            </div>
          </div>
        </div>
        <div className='col-12 py-3'>
          <div className='form-group'>
            <label className='label m-0' htmlFor='q4'>
              What are your return expectations?
            </label>
            <div className='md-form m-0'>
              <Field
                type='text'
                id='q4'
                className='pt-0 form-control'
                name='q4'
              />
            </div>
          </div>
        </div>
        {/* <div className='col-12 py-3'>
          <div className='form-group'>
            <label className='col-form-label' htmlFor='q4'>
              What are your return expectations?
            </label>

            <div className='md-form m-0'>
              <Field
                name='q4ARP'
                className='form-control pl-0'
                placeholder='Annual Return Percentage (%)'
                type='text'
              />
              <Field
                className='form-control pl-0'
                type='text'
                placeholder='Internal rate of return (IRR) (%)'
                name='q4IRR'
              />
              <Field
                className='form-control pl-0'
                name='q4CoC'
                type='text'
                placeholder='Cash On Cash Return ($)'
              />
            </div>
          </div>
        </div> */}
        <div className='col-12 py-3'>
          <div className='form-group'>
            <label className='label' htmlFor='q5'>
              What time horizon (3-10 years) would be most desirable for a
              passive investment?
            </label>
            <div className='md-form m-0'>
              <Field className='form-control pt-0' name='q5' type='text' />
              {this.handleErrors('q5')}
            </div>
          </div>
        </div>
        <div className='col-12 py-3'>
          <div className='form-group'>
            <label className='label' htmlFor='q6'>
              What liquidity needs do you have from the funds you may passively
              invest?
            </label>
            <div className='md-form m-0'>
              <Field name='q6' type='text' className='form-control p' />
              {this.handleErrors('q6')}
            </div>
          </div>
        </div>
        <div className='col-12 py-3'>
          <div className='form-group'>
            <label className='label m-0' htmlFor='q2'>
              What is the minimum dollar amount you are willing to invest?
            </label>
            <div className='md-form m-0'>
              <Field
                type='text'
                id='q2'
                className='pt-0 form-control'
                name='q2'
              />
              {this.handleErrors('q2')}
            </div>
          </div>
        </div>
        <div className='col-12  py-3'>
          <div className='form-group'>
            <label className='label' htmlFor='q7'>
              Are you an accredited investor?
            </label>
            <div className='md-form p-0 m-0'>
              <small className='form-text text-muted'>
                (earned income that exceeded $200,000 (or $300,000 if married
                filing jointly) for the past 2 years and will do so in this
                current year OR have a net worth of $1M excluding your primary
                residence)
              </small>
            </div>
            <div className='d-flex justify-content-start align-items-start'>
              <Field
                render={({ field, form, ...args }) => (
                  <Input
                    {...field}
                    {...args}
                    gap
                    className='p-0'
                    onClick={() => {
                      form.values.accreditedInvestor = 'Yes';
                    }}
                    checked={form.values.accreditedInvestor === 'Yes'}
                    label='Yes'
                    type='radio'
                    id='q7a'
                    value='Yes'
                    onChange={form.handleChange}
                  />
                )}
                name='q7'
              />
              <Field
                render={({ field, form, ...args }) => (
                  <Input
                    {...field}
                    {...args}
                    gap
                    onClick={() => {
                      form.values.accreditedInvestor = 'No';
                    }}
                    checked={form.values.accreditedInvestor === 'No'}
                    label='No'
                    type='radio'
                    id='q7b'
                    value='No'
                    onChange={form.handleChange}
                  />
                )}
                name='q7'
              />
              {this.handleErrors('q7')}
            </div>
          </div>
        </div>
        <div className='col-12 py-3'>
          <label className='col-form-label' htmlFor='q8'>
            Can you show proof of funds ?
          </label>

          <div className='p-0 m-0 d-flex justify-content-start align-items-center'>
            <Field
              render={({ field, form, ...args }) => (
                <Input
                  {...args}
                  {...field}
                  gap
                  onClick={() => {
                    form.values.proofOfFunds = 'Yes';
                  }}
                  className='p-0'
                  checked={form.values.proofOfFunds === 'Yes'}
                  label='Yes'
                  type='radio'
                  id='radio-q8a'
                  value='Yes'
                  onChange={form.handleChange}
                />
              )}
              name='q8'
            />
            <Field
              render={({ field, form, ...args }) => (
                <Input
                  {...args}
                  {...field}
                  gap
                  onClick={() => {
                    form.values.proofOfFunds = 'No';
                  }}
                  className='p-0'
                  checked={form.values.proofOfFunds === 'No'}
                  label='No'
                  type='radio'
                  id='radio-q8b'
                  value='No'
                  onChange={form.handleChange}
                />
              )}
              name='q8'
            />
            {this.handleErrors('q8')}
          </div>
        </div>
        <div className='col-12 py-3'>
          <label className='col-form-label' htmlFor='q9'>
            How would you rate your risk tolerance?
          </label>
          <div className='form-row m-0 p-0'>
            <div className='d-flex justify-content-start flex-wrap'>
              <Field
                render={({ field, form, ...args }) => (
                  <Input
                    {...field}
                    {...args}
                    gap
                    className='p-0'
                    onClick={() => {
                      form.values.riskTolerance = 'Low';
                    }}
                    checked={form.values.riskTolerance === 'Low'}
                    label='Low'
                    type='radio'
                    id='radio-q9a'
                    value='Low'
                    onChange={form.handleChange}
                  />
                )}
                name='q9'
              />
              <Field
                render={({ field, form, ...args }) => (
                  <Input
                    {...field}
                    {...args}
                    gap
                    className='p-0'
                    onClick={() => {
                      form.values.riskTolerance = 'Medium';
                    }}
                    checked={form.values.riskTolerance === 'Medium'}
                    label='Medium'
                    type='radio'
                    id='radio-q9b'
                    value='Medium'
                    onChange={form.handleChange}
                  />
                )}
                name='q9'
              />
              <Field
                render={({ field, form, ...args }) => (
                  <Input
                    {...field}
                    {...args}
                    gap
                    className='p-0'
                    onClick={() => {
                      form.values.riskTolerance = 'High';
                    }}
                    checked={form.values.riskTolerance === 'High'}
                    label='High'
                    type='radio'
                    id='radio-q9c'
                    value='High'
                    onChange={form.handleChange}
                  />
                )}
                name='q9'
              />
              {this.handleErrors('q9')}
            </div>
          </div>
        </div>
        <div className='col-12 py-3'>
          <div className='form-group m-0 pb-0'>
            <label className='label' htmlFor='q10'>
              If you are based outside of the US, have you invested in the US
              real estate market in the past?
            </label>
            <label className='label'>
              <small>(If applicable)</small>
            </label>

            <div className='md-form m-0'>
              <Field
                className='form-control p-0 my-0'
                component='input'
                type='text'
                name='q10'
              />
            </div>
          </div>
        </div>

        <div className='col-12 py-3'>
          <div className='form-group'>
            <label htmlFor='q11' className='col-form-label'>
              Have you invested as a limited partner (LP) on a syndication deal
              in the past?
            </label>
            <div className='md-form m-0'>
              <Field className='form-control p-0' type='text' name='q11' />
              {this.handleErrors('q11')}
            </div>
          </div>
        </div>

        <div className='col-12 py-1'>
          <div className='form-group'>
            <label htmlFor='q13' className='label m-0'>
              In a short paragraph please provide us with your investing
              experience.
            </label>
            <div className='md-form m-0'>
              <Field
                className='py-2 form-control md-textarea'
                type='text'
                component='textarea'
                id='q13'
                name='q13'
              />
              {this.handleErrors('q13')}
            </div>
          </div>
        </div>
        <div className='col-12 py-3'>
          <div className='form-group'>
            <label htmlFor='q14' className='label m-0'>
              What are your investment objectives?
            </label>
            <div className='md-form m-0'>
              <Field
                className='py-2 form-control md-textarea'
                type='text'
                component='textarea'
                name='q14'
              />
              {this.handleErrors('q14')}
            </div>
          </div>
        </div>

        <div className='text-center mt-5'>
          <button
            type='submit'
            onClick={this.toggle}
            className='btn btn-lg  blue-gradient col-md-4'
            disabled={isSubmitting}
          >
            Submit <i className='ml-1 far fa-paper-plane' />
          </button>
        </div>
        <div className='d-flex flex-center'>
          <Modal
            className='modal-dialog modal-dialog-centered'
            isOpen={this.state.modal}
            toggle={this.toggle}
          >
            <ModalHeader>Thank you {values.fullname}</ModalHeader>
            <ModalBody>
              One of our team members will contact you soon!
            </ModalBody>
            <ModalFooter>
              <NavLink className='btn btn-secondary' to='/'>
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
    fullname = '',
    email = '',
    accreditedInvestor = '',
    phone = '',
    q1 = '',
    q2 = '',
    q3 = '',
    q4 = '',
    q5 = '',
    q6 = '',
    q7 = '',
    q8 = '',
    q9 = '',
    q10 = '',
    q11 = '',
    q13 = '',
    q14 = '',
    proofOfFunds = '',
    contactPreference = ''
  }) => ({
    fullname,
    email,
    accreditedInvestor,
    phone,
    q1,
    q2,
    q3,
    q4,
    q5,
    q6,
    q7,
    q8,
    q9,
    q10,
    q11,
    q13,
    q14,
    proofOfFunds,
    contactPreference
  }),
  validationSchema: Yup.object().shape({
    fullname: Yup.string().required('Required'),
    email: Yup.string().required('Required'),
    phone: Yup.string().required('Required'),
    contactPreference: Yup.string().required('Required'),
    q1: Yup.string().required('Required'),
    q2: Yup.string().required('Required'),
    q3: Yup.string().required('Required'),
    q4: Yup.string().notRequired(),
    q5: Yup.string().required('Required'),
    q6: Yup.string().required('Required'),
    q7: Yup.string().required('Required'),
    q8: Yup.string().required('Required'),
    q9: Yup.string().required('Required'),
    q10: Yup.string().notRequired(),
    q11: Yup.string().required('Required'),
    q13: Yup.string().required('Required'),
    q14: Yup.string().required('Required')
  }),
  async handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    const payload = await axios.post('/api/mailchimp/survey', values);
    resetForm();
    setSubmitting(false);
  }
})(QuestionnaireForm);
