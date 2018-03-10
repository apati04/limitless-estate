import React from 'react';

const style = {
  popoverStyle: {
    fontSize: '24px',
    color: '#f7f7f7'
  }
};
export default ({ name, type, content }) => {
  return (
    <a
      tabIndex="0"
      className="info-popover"
      role="button"
      data-toggle="popover"
      data-trigger="focus"
      title={`${name}, ${type}`}
      data-content={content}
    >
      <i
        style={style.popoverStyle}
        className="fas fa-info-circle align-self-end"
      />
    </a>
  );
};
