import React from 'react';

const style = {
  popoverStyle: {
    fontSize: '24px',
    color: '#2196F3',
    opacity: '0.86'
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
      <i style={style.popoverStyle} className="fas fa-info-circle box-shadow" />
    </a>
  );
};
