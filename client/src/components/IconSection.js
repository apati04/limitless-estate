import React from 'react';
import IconTemplate from './IconTemplate';

const IconSection = () => {
  return (
    <section
      style={{ minHeight: '300px' }}
      id="landingIcons"
      className="py-5 d-flex align-items-baseline"
    >
      <div className="row container-fluid">
        <div
          style={{ marginTop: '5%' }}
          className="col-12 d-flex justify-content-around"
        >
          <IconTemplate
            icon="fas fa-trophy"
            title="Create win win win scenarios"
            fontSize={3.2 + 'rem'}
          />
          <IconTemplate
            icon="fas fa-users"
            title="Community Development"
            fontSize={3.2 + 'rem'}
          />
          <IconTemplate
            icon="fas fa-child"
            title="Impacting Lives"
            fontSize={3.2 + 'rem'}
          />
          <IconTemplate
            icon="fas fa-chart-line"
            title="Breeding Culture"
            fontSize={3.2 + 'rem'}
          />
          <IconTemplate
            icon="fab fa-medapps"
            title="Inspiring Others"
            fontSize={3.2 + 'rem'}
          />
        </div>
      </div>
    </section>
  );
};

export default IconSection;
