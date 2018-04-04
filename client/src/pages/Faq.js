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
      <div data-wow-delay="1s" className="rgba-blue-grey-slight">
        <Article
          headerImage="https://i.imgur.com/3aGoqpx.jpg"
          title="F.A.Q."
          overlayText="F.A.Q."
          circleImage="https://i.imgur.com/Icq2otI.jpg?1"
          body={this.renderFaq()}
        />
      </div>
    );
  }
}
