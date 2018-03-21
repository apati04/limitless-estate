import React, { Component } from 'react';
import Article from '../../components/templates/Article';
import { risk } from '../../api/postData';
class RisksWithInvesting extends Component {
  renderPost = risk => {
    return { body: risk.body };
  };
  render() {
    return (
      <div>
        <Article
          overlayColor="hm-stylish-strong"
          headerImage="https://i.imgur.com/42LNLAg.jpg"
          pattern=""
          overlayText=""
          post={{ body: JSON.parse(risk.body) }}
        />
      </div>
    );
  }
}

export default RisksWithInvesting;
