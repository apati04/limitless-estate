import React, { Component } from 'react';
import Article from '../../components/templates/Article';

class RisksWithInvesting extends Component {
  renderPost = () => {
    return {
      title: 'asdf',
      text: 'asdfasdf',
      image: 'https://i.imgur.com/uDTyJkf.jpg'
    };
  };
  render() {
    return (
      <div>
        <Article
          overlayColor="hm-stylish-strong"
          headerImage="https://i.imgur.com/42LNLAg.jpg"
          pattern=""
          overlayText=""
          post={this.renderPost()}
        />
      </div>
    );
  }
}

export default RisksWithInvesting;
