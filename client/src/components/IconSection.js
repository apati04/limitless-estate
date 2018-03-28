import React from 'react';
import IconTemplate from './IconTemplate';
import { Col, Row, Container } from 'mdbreact';

const IconSection = () => {
  return (
    <section
      style={{ minHeight: 20 + 'em' }}
      id="landingIcons"
      className="p-5 d-flex container flex-column flex-md-row-reverse justify-content-between align-items-center"
    >
      <IconTemplate
        icon="fab fa-medapps"
        title="Inspiring Others"
        fontSize={3 + 'em'}
      />

      <IconTemplate
        icon="fas fa-chart-line"
        title="Breeding Culture"
        fontSize={3 + 'em'}
      />
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
        icon="fas fa-trophy"
        title="Create win win win scenarios"
        fontSize={3 + 'em'}
      />
    </section>
  );
};

export default IconSection;
