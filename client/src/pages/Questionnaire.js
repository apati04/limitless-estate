import React from "react";
import QuestionnaireForm from "../components/Forms/QuestionnaireForm";
import PageHeader from "../components/PageHeader";

const Questionnaire = () => {
  return (
    <div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;
