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
  console.log('photo: ', photo);
  return (
    <div style={style.card} className="col-md-4">
      <img
        style={{ border: '2px solid lightgrey' }}
        className="mr-2 rounded-circle"
        src={photo.url}
        alt="Generic placeholder"
        width={photo.size}
        height={photo.size}
      />
      <div className="pt-2 d-flex justify-content-center">
        <h4>{name}</h4>
        <div style={{ marginLeft: '8px' }}>{children}</div>
      </div>
    </div>
  );
};
