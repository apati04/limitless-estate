import React from 'react';

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
    <div
      style={style.card}
      className="d-flex justify-content-center align-items-center"
    >
      {children}
    </div>
  );
};
