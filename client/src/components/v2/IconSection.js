import React from 'react';
import IconTemplate from './IconTemplate';

const IconSection = () => {
  return (
    <section id="landingIcons" className="py-5">
      <div className="container">
        <div className="row">
          <IconTemplate
            icon='users'
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, maxime."
            title="users"
          />
          <IconTemplate
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, maxime." title="clock"
            icon="clock"
            />
          <IconTemplate content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, maxime." icon="chart-line" title="chartline" />
        </div>
      </div>
    </section>
  )
}

export default IconSection;
