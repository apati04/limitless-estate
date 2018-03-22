import React, { Component } from 'react';
import Article from '../../../components/templates/Article';
import data from '../data/risks_p2';
export default class RisksTwoe extends Component {
  renderPage() {
    return data.map(({ title, body }, i) => {
      return (
        <p key={i}>
          <strong className="font-italic">{title}</strong> {body}
        </p>
      );
    });
  }
  render() {
    return (
      <div>
        <Article
          headerImage="https://i.imgur.com/zneMI2U.jpg"
          pattern=""
          overlayText=""
          circleImage="https://i.imgur.com/uDTyJkf.jpg"
          body={this.renderPage()}
          pageNumber="2"
          numPages="2"
        />
      </div>
    );
  }
}
