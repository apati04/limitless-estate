import React from 'react';

const EmployeeCard = ({ name, title, description, imgSrc }) => {
  return (
    <div>
      <img width="180px" height="180px" src={imgSrc} alt="" className="img-fluid rounded-circle mb-2 w-100" />
      <h4>{name}</h4>
      <small>{title}</small>
      <small>{description}</small>
      <div className="d-flex flex-row justify-content-center">
          <div className="p-4">
            <a href="#"><i className="fab fa-facebook"></i></a>
          </div>
          <div className="p-4">
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
          <div className="p-4">
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
    </div>
  );
};

