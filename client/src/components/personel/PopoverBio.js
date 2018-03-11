import React from 'react';

const style = {
  popoverStyle: {
    fontSize: '24px',
    color: '#f7f7f7',
    opacity: '0.92'
  }
};
export default ({ name, type, content }) => {
  return (
    <div className="d-flex justify-content-center mt-2">
      <h5>{name}</h5>
      <a
        tabIndex="0"
        className="ml-2 info-popover"
        role="button"
        data-toggle="popover"
        data-trigger="focus"
        title={`${name}, ${type}`}
        data-content={`${content}`}
      >
        <i style={style.popoverStyle} className="fas fa-info-circle" />
      </a>
    </div>
  );
};
