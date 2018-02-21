import React from 'react';


const PageHeader = ({title, bgPos='0px -360px', description, img}) => {
  const style = {
    pageHeader: {
      height: '200px',
      background: `url(${img})`,
      backgroundPosition: `${bgPos}`,
      backgroundAttachment: 'fixed',
      color: '#fff',
      borderBottom: '1px #eee solid',
      paddingTop: '50px'
    }
  }

  return (
    <header style={style.pageHeader} id="pageHeader">
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