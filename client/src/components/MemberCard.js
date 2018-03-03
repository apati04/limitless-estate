import React from 'react';
import { Link } from 'react-router-dom';

const style = {
  card: {
    marginBottom: '1.5em',
    textAlign: 'center',
  },
  headline: { fontWeight: '400' },
  subText: {
    marginRight: '.75em',
    marginLeft: '.75em',
  },
};

export default ({ firstName, lastName, position, photo, resume }) => {
  return (
    <div style={style.card} className="col-lg-4">
      <img
        style={{ border: '2px solid lightgrey' }}
        className="rounded-circle"
        src={photo}
        alt="Generic placeholder"
        width="220"
        height="220"
      />
      <div className="pt-2">
        <h3>{`${firstName} ${lastName}`}</h3>
        <p className="lead font-italic">{position}</p>
        <p>
          <a target="_blank" className="btn  btn-outline-warning" href={resume} role="button">
            View Bio &raquo;
          </a>
        </p>
      </div>
    </div>
  );
};
