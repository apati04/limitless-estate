import React, { Component } from 'react';
import Article from '../../components/templates/Article';
import data from '../data/impact_investing';

export default class ImpactInvesting extends Component {
  renderData = ({body}) => {
    return data.map(element, i =>);
  };
  render() {
    return (
      <div>
        <Article
          headerImage="https://i.imgur.com/YXieUK4.jpg"
          overlayColor="hm-purple-slight"
          post={postData}
          title="What is Impact Investing?"
          body={[]}
        />
      </div>
    );
  }
}
