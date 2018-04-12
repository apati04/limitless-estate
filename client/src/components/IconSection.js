import React from 'react';
import IconTemplate from './IconTemplate';

const IconSection = () => {
  return (
    <section id="landingIcons">
      <div className="container p-2">
        <div
          style={{ minHeight: 20 + 'em' }}
          className="row flex-column flex-md-row justify-content-around align-items-center flex-nowrap"
        >
          <IconTemplate
            icon="fas fa-child"
            title="Impacting Lives"
            fontSize={3 + 'em'}
          />

          <IconTemplate
            icon="fas fa-users"
            title="Community Development"
            fontSize={3 + 'em'}
          />

          <IconTemplate
            icon="fab fa-medapps"
            title="Inspire Others"
            fontSize={3 + 'em'}
          />

          <IconTemplate
            icon="fas fa-trophy"
            title="Create Win Win Win Scenarios"
            fontSize={3 + 'em'}
          />
        </div>
      </div>
    </section>
  );
};

export default IconSection;
