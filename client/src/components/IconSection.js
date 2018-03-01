import React from 'react';
import IconTemplate from './IconTemplate';

const IconSection = () => {
  return (
    <section id="landingIcons" className="py-5">
      <div className="container">
        <div className="row">
          <IconTemplate icon='building' fontSize="60px"/>
          <IconTemplate icon="users" fontSize="60px"/>
          <IconTemplate icon="dollar-sign" fontSize="60px"/>
        </div>
      </div>
    </section>
  )
}

export default IconSection;
