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
    <div style={style.card}>
      <img
        style={{ border: '2px solid lightgrey' }}
        className="mr-2 rounded-circle"
        src={photo.url}
        alt="Generic placeholder"
        width={photo.size}
        height={photo.size}
      />
      <div className="d-flex justify-content-center m-2">
        <div>
          <h5>{name}</h5>
          <h6>{title}</h6>
        </div>
        <div className="ml-1">{children}</div>
      </div>
    </div>
  );
};
