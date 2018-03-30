import React from 'react';

const IconTemplate = ({ icon, title, fontSize }) => {
  return (
    <div className="text-center">
      <i
        className={`icon-landing ${icon} mb-2`}
        style={{ fontSize: `${fontSize}` }}
      />
      <h6 className="h5-responsive mt-2">{title}</h6>
    </div>
  );
};

export default IconTemplate;
