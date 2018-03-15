import React, { Component } from 'react';
import PageHeader from '../components/PageHeader';
import faq from '../api/faq';
export default class Faq extends Component {
  renderFaq() {
    return faq.map(({ title, body }, i) => {
      return (
        <div key={i} className="mt-3 border-bottom text-left">
          <h3>{title}</h3>
          <p>
            {body}
          </p>
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container text-center">
            <h1 className="display-4">F.A.Q</h1>
            <p className="lead mt-1">Frequently Asked Questions and Answers</p>
          </div>
        </div>
        <section id="faq">
          <div className="p-2 container mb-5">
            <div className="row">
              <div className="col">
                <div className="mt-4">{this.renderFaq()}</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
