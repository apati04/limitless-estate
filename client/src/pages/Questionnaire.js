import React from 'react';
import { Card, CardBody } from 'mdbreact';
import QuestionnaireForm from '../components/Forms/QuestionnaireForm';
const bgimage = 'https://i.imgur.com/RH9g1cH.jpg';
const Questionnaire = () => {
  return (
    <div>
      <div
        style={{
          background: `url(${bgimage})center center no-repeat`,
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed'
        }}
        data-wow-delay="1s"
        className="unique-color  animated fadeIn hm-black-light full-bg-img"
      >
        <div className="container-fluid">
          <div className="row justify-content-center py-5">
            <div className="col-12 col-md-10 col-lg-8">
              <Card className="animated fadeInUp z-depth-4" narrow>
                <div className="view gradient-card-header blue-gradient text-white text-center p-2">
                  <h2>Investor Questionnaire</h2>
                  <p>
                    Please fill out the questions below to let us know more
                    about you!
                  </p>
                </div>
                <CardBody>
                  <div className="row justify-content-md-center justify-content-between">
                    <div className="col-11">
                      <QuestionnaireForm />
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;
