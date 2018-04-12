import React from 'react';

const IconTemplate = ({ icon, title, fontSize }) => {
  return (
    <div className="col-auto text-center">
      <i className={`${icon} mb-1`} style={{ fontSize: `${fontSize}` }} />
      <h5 className="h5-responsive">{title}</h5>
    </div>
  );
};

export default IconTemplate;
