import React from 'react';

const PageBox = ({title, description, bgColor, icon}) => {
  return (
<<<<<<< HEAD
    <div className={` card ${bgColor} text-center text-white `}>
      <div className="buildBox">
      <div className=" card-body">
=======
      <div style={{opacity: '0.88'}} className={`card ${bgColor} text-center text-white`}>
        <div className="card-body">
>>>>>>> packages styling
          <i className={`fa fa-${icon}`}></i>
          <h3>{title}</h3>
          <p className="lead">{description}</p>
        </div>
      </div>
<<<<<<< HEAD
      </div>
=======
>>>>>>> packages styling
  )
}

export default PageBox;