import React from 'react';

// const styles = {
//   pageHeader: {
//     height,
//     minHeight: '252px',
//     background: `url(${img})`,
//     backgroundRepeat: 'initial',
//     backgroundAttachment: 'initial',
//     backgroundSize: '100% 123%',
//     color: '#fff',
//     borderBottom: '1px #eee solid',
//     paddingTop: '50px',
//   },
//   titleText: {
//     marginTop: '4px',
//   },
// };
const PageHeader = ({ title, bgPos = '0px -360px', bgRepeat = 'repeat', description }) => {
  return (
    <header id="pageHeader">
      <div style={{ top: 56, minHeight: '252px' }} className="jumbotron-fluid bg-secondary text-white">
        <div className="container">
          <div className="row">{''}</div>
          <div className="row">
            <div className="col-md-4 m-auto text-center">
              <h1 className="display-3 mt-5">{title}</h1>
              <p>{description || ''}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default PageHeader;
