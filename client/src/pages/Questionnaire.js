import React from "react";
<<<<<<< HEAD
=======
import {
  Card,
  CardImage,
  CardBody,
  CardTitle,
  CardText,
  Button
} from "mdbreact";
>>>>>>> 3728fc05cf8c5dc1a709a3da74c0b1b8fe12dba7
import QuestionnaireForm from "../components/Forms/QuestionnaireForm";
import PageHeader from "../components/PageHeader";

const Questionnaire = () => {
  return (
    <div>
<<<<<<< HEAD
      <div>
        <div className="container">
          <div className="row">
            <div className="card">
              <div className="bg-dark">
                <h1 className="p-5 card-header text-center text-white">
                  Questionnaire
                </h1>
              </div>

              <div className="card-body">
                <QuestionnaireForm />
              </div>
=======
      <div className="container d-flex justify-content-center align-items-center">
        <Card style={{ margin: "50px" }} className="container" cascade wide>
          <CardImage tag="div">
            <div className="view gradient-card-header blue-gradient">
              <h2 className="h2-responsive">
                Private Money Investor Qualifier Questionnaire
              </h2>
              <p>
                Please fill out the questions below to let us know more about
                you!
              </p>
>>>>>>> 3728fc05cf8c5dc1a709a3da74c0b1b8fe12dba7
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
