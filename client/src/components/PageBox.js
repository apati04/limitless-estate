import React from 'react';

const PageBox = ({title, description, bgColor, icon}) => {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className={` card ${bgColor} text-center text-white `}>
      <div className="buildBox">
      <div className=" card-body">
=======
      <div style={{opacity: '0.88'}} className={`card ${bgColor} text-center text-white`}>
        <div className="card-body">
>>>>>>> packages styling
=======
    <div className={` card ${bgColor} text-center text-white `}>
      <div className="buildBox">
      <div className=" card-body">
>>>>>>> merge fix
          <i className={`fa fa-${icon}`}></i>
          <h3>{title}</h3>
          <p className="lead">{description}</p>
        </div>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
      </div>
=======
>>>>>>> packages styling
=======
      </div>
>>>>>>> merge fix
  )
}

export default PageBox;