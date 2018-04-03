import React from 'react';
import { Card, CardImage, CardBody } from 'mdbreact';
import QuestionnaireForm from '../components/Forms/MultiStepForm';
const bgimage =
  'https://images.pexels.com/photos/681368/pexels-photo-681368.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
const Questionnaire = () => {
  return (
    <div
      style={{
        background: `url(${bgimage})center center no-repeat`,
        backgroundSize: 'cover'
      }}
      data-wow-delay="1s"
      className="animated fadeIn hm-black-light"
    >
      <div style={{ height: '100%' }} className="view full-bg-img">
        <div className="container">
          <div className="row my-5 flex-center">
            <div className="col-12 col-lg-7">
              <QuestionnaireForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;
