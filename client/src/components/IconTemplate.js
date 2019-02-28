import React from 'react';

const IconTemplate = ({ icon, title, fontSize }) => {
  return (
    <div className="text-center p-1 m-1">
      <i className={`${icon}`} style={{ fontSize: `${fontSize}` }} />
      <h5 className="mt-2">{title}</h5>
    </div>
  );
};

export default IconTemplate;
