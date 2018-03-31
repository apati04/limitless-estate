import React from 'react';

const IconTemplate = ({ icon, title, fontSize }) => {
  return (
    <div className="text-center">
      <i
        className={`icon-landing ${icon} mb-2`}
        style={{ fontSize: `${fontSize}` }}
      />
      <div>
        <h5 className="h5-responsive mt-2">{title}</h5>
      </div>
    </div>
  );
};

export default IconTemplate;
