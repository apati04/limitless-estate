import React from 'react';
import { Card } from 'mdbreact';
const Player = ({ episodeTitle }) => {
  return (
    <React.Fragment>
      <Card style={{ borderRadius: '4px' }} className="my-4">
        <iframe
          src={`https://www.buzzsprout.com/255024/${episodeTitle}?client_source=small_player&amp;iframe=true&amp;referrer=https://www.buzzsprout.com/255024.js?player=small`}
          width="100%"
          height="200"
          frameBorder="0"
          scrolling="no"
        />
      </Card>
      <hr />
    </React.Fragment>
  );
};

export default Player;
