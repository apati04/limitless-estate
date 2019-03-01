import React from 'react';
import {
  CardHeader,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImage,
  CardFooter
} from 'mdbreact';
import Truncate from 'react-truncate';
const Player = ({ playerUrl }) => {
  return (
    <iframe
      src={`https://www.buzzsprout.com/255024/${playerUrl}?client_source=small_player&amp;iframe=true&amp;referrer=https://www.buzzsprout.com/255024.js?player=small`}
      width="100%"
      height="200"
      frameBorder="0"
      scrolling="no"
    />
  );
};

export default Player;
