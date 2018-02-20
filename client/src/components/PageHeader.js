import React from 'react';

const PageHeader = ({title, description}) => {
  return (
    <header id="pageHeader">
      <div className="container">
        <div className="row">
          <div className="col-md-6 m-auto text-center">
            <h1>{title}</h1>
            <p>{description || ''}</p>
          </div>
        </div>
      </div>
    </header>
  )
}
export default PageHeader;