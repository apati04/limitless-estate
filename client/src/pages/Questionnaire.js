import React from "react";
import {
  Card,
  CardImage,
  CardBody,
  CardTitle,
  CardText,
  Button
} from "mdbreact";
import QuestionnaireForm from "../components/Forms/QuestionnaireForm";
import PageHeader from "../components/PageHeader";

const Questionnaire = () => {
  return (
    <div>
      <div>
        <div className="container">
          <div className="row">
            <Card cascade wide>
              <CardImage tag="div">
                <div className="view gradient-card-header blue-gradient">
                  <h2 className="h2-responsive">
                    Private Money Investor Qualifier Questionnaire
                  </h2>
                  <p>
                    Please fill out the questions below to let us know more
                    about you!
                  </p>
                </div>
              </CardImage>
              <CardBody>
                <QuestionnaireForm />
              </CardBody>
            </Card>
            <div className="card m-4">
              <div className="bg-dark" />
              <div className="card-body m-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;
