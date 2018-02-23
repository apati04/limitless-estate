import React from 'react';


const PageHeader = ({title, bgPos='0px -360px', bgRepeat='repeat', description, img}) => {
  const styles = {
    pageHeader: {
      minHeight: '252px',
      background: `url(${img})`,
      backgroundRepeat: "initial",
      backgroundAttachment: 'initial',
      backgroundSize: '100% 123%',
      color: '#fff',
      borderBottom: '1px #eee solid',
      paddingTop: '50px'
    },
    titleText: {
      marginTop: '4px'
    }
  }

  return (
    <header style={styles.pageHeader} id="pageHeader">
      <div className="container">
        <div className="row">
          <div className="col-md-6 m-auto text-center">
            <h1 style={styles.titleText}>{title}</h1>
            <p>{description || ''}</p>
          </div>
        </div>
      </div>
    </header>
  )
}
export default PageHeader;