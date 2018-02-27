import React from 'react';
export default ({ title, position, photo, bio }) => {
  return (
    <div className="col-lg-4">
      <div className="card bg-secondary">
        <div className="card-body">
          <img width="180px" height="180px" className="img-fluid rounded-circle mb-2" src={photo} alt="" />
          <h4>{title}</h4>
          <small>{position}</small>
          <div className="d-flex flex-row justify-content-center">
            <div className="p-4">
              <a target="_blank" href={bio}>
                <i className="fas fa-file-pdf text-white" />
              </a>
            </div>
            <div className="p-4">
              <a data-toggle="modal" href="">
                <i className="far fa-file-pdf" />
              </a>
            </div>
            <div className="p-4">
              <a href="#">
                <i className="far fa-file-pdf" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
