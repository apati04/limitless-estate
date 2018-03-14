import React, { Component } from 'react';
import PageHeader from '../components/PageHeader';
import faq from '../api/faq';
export default class Faq extends Component {
  renderFaq() {
    return faq.map(({ title, body }, i) => {
      return (
        <div key={i} className="mt-3 border-bottom text-left">
          <h2 style={{ fontFamily: 'Open Sans' }}>{title}</h2>
          <p style={{ fontSize: '1.2rem' }} className="font-weight-light">
            {body}
          </p>
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        <div class="jumbotron jumbotron-fluid">
          <div class="container text-center">
            <h1 class="display-4">F.A.Q</h1>
            <p class="lead mt-1">Commonly asked Questions and Answers</p>
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
