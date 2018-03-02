import React from 'react';
import IconTemplate from './IconTemplate';

const IconSection = () => {
  return (
    <section style={{ minHeight: '300px' }} id="landingIcons" className="py-5">
      <div className="container">
        <div style={{ marginTop: '5%' }} className="row">
          <IconTemplate icon="users" title="Community" fontSize="60px" />
          <IconTemplate icon="tasks" title="Honesty" fontSize="60px" />
          <IconTemplate icon="chart-line" title="Integrity" fontSize="60px" />
        </div>
      </div>
    </section>
  );
};

export default IconSection;
