import React from 'react';

const PageBox = ({title, description, bgColor, icon}) => {
  return (
    <div className={` card ${bgColor} text-center text-white `}>
      <div className="buildBox">
      <div className=" card-body">
          <i className={`fa fa-${icon}`}></i>
          <h3>{title}</h3>
          <p className="lead">{description}</p>
        </div>
      </div>
      </div>
  )
}

export default PageBox;