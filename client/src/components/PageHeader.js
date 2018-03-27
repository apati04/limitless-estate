import React from 'react';
import { Fa } from 'mdbreact';
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
const PageHeader = ({
  title,
  bgPos = '0px -360px',
  bgRepeat = 'repeat',
  description,
  subtitle
}) => {
  return (
    <header id="pageHeader">
      <div className="d-flex p-4 flex-column justify-content-between m-auto text-center border-bottom border-secondary jumbotron-fluid stylish-color-dark text-white">
        <h1 className="display-4">{title}</h1>
        <h2>{subtitle}</h2>
        <p className="lead">{description}</p>
        <Fa
          className="align-bottom"
          style={{ fontSize: 2 + 'em' }}
          icon="chevron-down"
        />
      </div>
    </header>
  );
};
export default PageHeader;
