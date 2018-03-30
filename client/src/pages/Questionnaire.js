import React from 'react';
import {
  Card,
  CardImage,
  CardBody,
  CardTitle,
  CardText,
  Button,
  View
} from 'mdbreact';
import QuestionnaireForm from '../components/Forms/QuestionnaireForm';
import PageHeader from '../components/PageHeader';
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
        <div className="d-flex container flex-center">
          <div className="row container flex-center p-5 m-5">
            <Card className="animated fadeInUp z-depth-4" wide>
              <CardImage tag="div">
                <div className="view gradient-card-header blue-gradient">
                  <h2 className="h2-responsive">
                    Investor Qualifier Questionnaire
                  </h2>
                  <p>
                    Please fill out the questions below to let us know more
                    about you!
                  </p>
                  <p style={{ padding: 0 }} className="m-0 p-0">
                    One of our team members will contact you soon to let you
                    know how you can make an impact!
                  </p>
                </div>
              </CardImage>
              <CardBody
                style={{
                  overflowY: 'scroll',
                  height: '75vh',
                  padding: 1 + 'em'
                }}
              >
                <QuestionnaireForm />
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;
