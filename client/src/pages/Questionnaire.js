import React from 'react';
import {
  Card,
  CardImage,
  CardBody,
  CardTitle,
  CardText,
  Button
} from 'mdbreact';
import QuestionnaireForm from '../components/Forms/QuestionnaireForm';
import PageHeader from '../components/PageHeader';

const Questionnaire = () => {
  return (
    <div className="row">
      <div className="col container d-flex justify-content-center align-items-center">
        <Card style={{ margin: '50px' }} className="container" cascade wide>
          <CardImage tag="div">
            <div className="view gradient-card-header blue-gradient">
              <h2 className="h2-responsive">
                Investor Qualifier Questionnaire
              </h2>
              <p>
                Please fill out the questions below to let us know more about
                you!
              </p>
              <p style={{ padding: 0 }} className="m-0 p-0">
                One of our team members will contact you soon to let you know
                how you can make an impact!
              </p>
            </div>
          </CardImage>
          <CardBody>
            <QuestionnaireForm />
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Questionnaire;
