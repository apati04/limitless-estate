import React from 'react';

const ModalListItem = ({listTitle, iconClassName, modalID, modalTitle, imgSrc}) => {
  return (
      <a className="list-group-item d-flex justify-content-between"   data-toggle="modal" href={`#${modalID}`}>
        <div>
          <i className={`${iconClassName}`}></i>
            <span style={{marginLeft: '20px'}}>{listTitle}</span>
        </div>
         
      </a>
  )
}

export default ModalListItem;