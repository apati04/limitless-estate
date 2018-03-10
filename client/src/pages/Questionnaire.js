import React from 'react';
import QuestionnaireForm from '../components/Forms/QuestionnaireForm';
import PageHeader from '../components/PageHeader';

const Questionnaire = () => {
  return (
    <div>
      <PageHeader title="Questionnaire" description="Please fill out the questions below to let us know more about you!" img="/img/urban.jpg" />
      <div>
        <div className="container mt-5">
          <div className="row d-flex justify-content-center">
            <div className="card bg-light border-info border p-5">
              <div className="card-body">
                <QuestionnaireForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Questionnaire;
