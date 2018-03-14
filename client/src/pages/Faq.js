import React, { Component } from 'react';
import PageHeader from '../components/PageHeader';
import faq from '../api/faq';
export default class Faq extends Component {
  renderFaq() {
    return faq.map(({ title, body }, i) => {
      return (
        <div key={i} className="mt-3 border-bottom">
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
        <PageHeader title="Faq" />
        <section id="faq" className="py-3">
          <div className="p-2 container">
            <div className="row">
              <div className="col">
                <h3 className="blog-post-title font-italic font-weight-normal text-left">
                  Commonly asked questions and answers
                </h3>
                <div className="mt-4 border-top">{this.renderFaq()}</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
