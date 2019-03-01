import React from 'react';
import IconTemplate from './IconTemplate';
import { View, Mask } from 'mdbreact';
const IconSection = () => {
  return (
    <div className="container p-0" style={{ height: 'auto' }}>
      <div
        className="row flex-column
      flex-sm-row justify-content-around align-items-center flex-center flex-nowrap"
        style={{ paddingTop: '60px', paddingBottom: '50px' }}
      >
        <IconTemplate
          icon="fas fa-child"
          title="Impacting Lives"
          fontSize={3 + 'rem'}
        />
        <IconTemplate
          icon="fas fa-users"
          title="Community Development"
          fontSize={3 + 'rem'}
        />

        <IconTemplate
          icon="fab fa-medapps"
          title="Inspire Others"
          fontSize={3 + 'rem'}
        />

        <IconTemplate
          icon="fas fa-trophy"
          title="Create Win Win Win Scenarios"
          fontSize={3 + 'rem'}
        />
      </div>
    </div>
  );
};

export default IconSection;
