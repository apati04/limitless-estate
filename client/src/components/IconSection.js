import React from 'react';
import IconTemplate from './IconTemplate';
import { View, Mask } from 'mdbreact';
const IconSection = () => {
  return (
    <div style={{ height: 23 + 'em', display: 'block' }}>
      <div
        className="row 
      flex-column flex-md-row justify-content-around flex-center p-2"
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
  );
};

export default IconSection;
