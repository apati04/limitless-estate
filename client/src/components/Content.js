import React from 'react';

const Content = ({ title, content_1, content_2, content_3, content_4, content_5 }) => {
  return (
    <div>
      <div style={{ backgroundColor: '#000'}}>
        <h5 style={{padding: '8px'}} className="text-white">{title}</h5>
      </div>
      <div style={{marginLeft: '8px', marginTop: '14px'}}>

      </div>
    </div>
  );
}

export default Content;
