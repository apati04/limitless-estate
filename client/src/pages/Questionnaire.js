import React from 'react';
import { Card, CardImage, CardBody } from 'mdbreact';
import QuestionnaireForm from '../components/Forms/MultiStepForm';
const bgimage = 'https://i.imgur.com/RH9g1cH.jpg';
const Questionnaire = () => {
  return (
    <div
      style={{
        height: 80 + 'em',
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
