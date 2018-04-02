import React from 'react';
import { Card, CardImage, CardBody } from 'mdbreact';
import QuestionnaireForm from '../components/Forms/QuestionnaireForm';
const bgimage =
  'https://images.pexels.com/photos/681368/pexels-photo-681368.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
const Questionnaire = () => {
  return (
    <div
      style={{
        height: '100%',
        background: `url(${bgimage}) no-repeat center center`,
        backgroundSize: 'cover'
      }}
      data-wow-delay="1s"
      className="animated fadeIn hm-black-light"
    >
      <div className="full-bg-img">
        <div className="container-fluid">
          <div className="row flex-center no-gutters">
            <div className="col-12 col-xl-10">
              <QuestionnaireForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;
