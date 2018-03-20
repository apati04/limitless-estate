import React, { Component } from 'react';
import Article from '../../components/templates/Article';
const postData = {
  title: 'post title',
  text: [<div>asdfasdfasdf</div>, <h1>asdfasdfasdfasdf</h1>],
  image: 'https://i.imgur.com/2A3IGvX.jpg'
};
export default class ImpactInvesting extends Component {
  render() {
    return (
      <div>
        <Article
          headerImage="https://i.imgur.com/YXieUK4.jpg"
          overlayColor="hm-purple-slight"
          post={postData}
        />
      </div>
    );
  }
}
