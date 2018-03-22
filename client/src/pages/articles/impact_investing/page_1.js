import React, { Component } from 'react';
import Article from '../../../components/templates/Article';
import data from '../data/impact_investing';

export default class ImpactInvesting extends Component {
  renderData = () => {
    return data.map((element, i) => <p key={i}>{element.body}</p>);
  };
  render() {
    return (
      <div className="rgba-blue-grey-slight">
        <Article
          headerImage="https://i.imgur.com/YXieUK4.jpg"
          overlayColor="hm-purple-slight"
          title="What is Impact Investing?"
          subTitle="Often called a “double bottom line” investment, impact investing enables investors to put their money to good use in meaningful, intelligent ventures that provide both a financial AND a social return on their investment."
          circleImage="https://i.imgur.com/2A3IGvX.jpg?1"
          body={this.renderData()}
        />
      </div>
    );
  }
}
