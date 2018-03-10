import React from 'react';
import { Link } from 'react-router-dom';

const style = {
  card     : {
    marginBottom : '1.5em',
    textAlign    : 'center'
  },
  headline : { fontWeight: '400' },
  subText  : {
    marginRight : '.75em',
    marginLeft  : '.75em'
  }
};

export default ({
  firstName,
  lastName,
  position,
  photo,
  resume,
  width = '204',
  height = '204',
  children
}) => {
  return (
    <div style={style.card} className="col-md-4">
      <img
        style={{ border: '2px solid lightgrey' }}
        className="rounded-circle"
        src={photo}
        alt="Generic placeholder"
        width={width}
        height={height}
      />
      {resume ? (
        <div className="pt-2 text-center">
          <h4>{`${firstName} ${lastName}`}</h4>
          <p className="lead font-italic">{position}</p>

          <p>
            <a
              target="_blank"
              className="btn  btn-outline-warning"
              href={resume}
              role="button"
            >
              View Bio &raquo;
            </a>
          </p>
        </div>
      ) : (
        <div className="pt-2 d-flex justify-content-around">
          <h4>{`${firstName} ${lastName}`}</h4>
          {children}
        </div>
      )}
    </div>
  );
};
