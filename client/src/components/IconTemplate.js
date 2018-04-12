import React from 'react';

const IconTemplate = ({ icon, title, fontSize }) => {
  return (
    <div>
      <div className="col-12 text-center m-1">
        <i
          className={`icon-landing ${icon} mb-2`}
          style={{ fontSize: `${fontSize}` }}
        />
        <div>
          <div className="h5-responsive">{title}</div>
        </div>
      </div>
    </div>
  );
};

export default IconTemplate;
