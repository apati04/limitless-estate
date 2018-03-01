import React from 'react';

const IconTemplate = ({ icon, title, content, fontSize }) => {
  return (
    <div className="col-md-4 mb-4 text-center">
      <i className={`fas fa-${icon} mb-2`} style={{ fontSize: `${fontSize}` }}></i>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  )
}

export default IconTemplate;
