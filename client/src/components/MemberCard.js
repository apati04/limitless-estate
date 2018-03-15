import React from 'react';
import { Link } from 'react-router-dom';

const style = {
  card: {
    marginBottom: '1.5em',
    textAlign: 'center'
  },
  headline: { fontWeight: '400' },
  subText: {
    marginRight: '.75em',
    marginLeft: '.75em'
  }
};

export default ({ name, title = '', photo, type, content, children }) => {
  return (
    <div style={style.card} className="align-items-center">
      <img
        style={{ border: '2px solid lightgrey' }}
        className="mr-2 mb-1 rounded-circle"
        src={photo.url}
        alt="Generic placeholder"
        width={photo.size}
        height={photo.size}
      />
      {children}
    </div>
  );
};
