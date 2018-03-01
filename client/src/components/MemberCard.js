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

export default ({ firstName, lastName, position, photo, bio }) => {
  return (
    <div style={style.card} className="col-lg-4">
   
        <img style={{border: '3px outset #eee'}} className="rounded-circle" src={photo} alt="Generic placeholder" width="230" height="230" />
   
      <h2>{`${firstName} ${lastName}`}</h2>
      <p>{position}</p>
      <p>
        <Link to={'/resumes/' + firstName} className="btn btn-secondary" href="#" role="button">
          View Resume &raquo;
        </Link>
      </p>
    </div>
  );
};
