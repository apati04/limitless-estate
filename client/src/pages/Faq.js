import React, { Component } from 'react';
import Article from '../components/templates/Article';
import faq from '../api/faq';

export default class Faq extends Component {
  renderFaq() {
    return faq.map(({ title, body }, i) => {
      return (
        <div key={i} className="mt-3 border-bottom text-left">
          <h3>{title}</h3>
          <p>{body}</p>
        </div>
      );
    });
  }
  render() {
    return (
      <div style={{ height: '100%' }} data-wow-delay="1s">
        <Article
          headerImage="https://i.imgur.com/3aGoqpx.jpg"
          title="F.A.Q."
          overlayText="F.A.Q."
          body={this.renderFaq()}
        />
      </div>
    );
  }
}
