import React from 'react';

const RegisterModal = ({ id, title, bio, body, size = null }) => {
  return (
    <div
      className="modal fade"
      id={id}
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className={`modal-dialog modal-dialog-centered h-100 ${size}`} role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title text-center" id="exampleModalLongTitle">
              {title}
            </h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">{body}</div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">
              Close
            </button>
            <a type="button" hfref={bio} className="btn btn-primary">
              Download
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
