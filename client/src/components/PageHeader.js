import React from 'react';


const PageHeader = ({title, bgPos='0px -360px', bgRepeat='repeat', description, img}) => {
  const style = {
    pageHeader: {
      minHeight: '240px',
      background: `url(${img})`,
      backgroundRepeat: "space",
      backgroundAttachment: 'center',
      backgroundSize: '100% 100%',
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