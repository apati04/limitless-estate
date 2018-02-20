import React from 'react';

const PageBox = ({title, description, bgColor, icon}) => {
  return (
      <div style={{opacity: '0.88'}} className={`card ${bgColor} text-center text-white`}>
        <div className="card-body">
          <i className={`fa fa-${icon}`}></i>
          <h3>{title}</h3>
          <p className="lead">{description}</p>
        </div>
      </div>
  )
}

export default PageBox;