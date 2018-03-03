import React from 'react';

const IconTemplate = ({ icon, title, content, fontSize }) => {
  return (
    <div className="col col-md-4 mb-4 text-center">
      <i className={`fas fa-${icon} mb-2`} style={{ fontSize: `${fontSize}` }} />
      <h2 className="mt-2">{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default IconTemplate;
