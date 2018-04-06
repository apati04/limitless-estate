import React from 'react';
import IconTemplate from './IconTemplate';

const IconSection = () => {
  return (
    <section
      style={{ minHeight: 20 + 'em' }}
      id="landingIcons"
      className="p-4 d-flex container flex-column flex-md-row justify-content-between align-items-center"
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
    </section>
  );
};

export default IconSection;
