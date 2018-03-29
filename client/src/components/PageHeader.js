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
const PageHeader = ({ title, description, subtitle }) => {
  return (
    <header style={{ height: 22 + 'em' }} className="bg-mdb-color">
      <div className="d-flex flex-center flex-column jumbotron-fluid bg-mdb-color text-white">
        <h1 className="display-4 font-bold">{title}</h1>
        <h2>{subtitle}</h2>
        <p className="lead">{description}</p>
      </div>
    </header>
  );
};
export default PageHeader;
