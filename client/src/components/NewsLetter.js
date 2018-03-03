import React from 'react';
import { Link } from 'react-router-dom';

// <div className="container">
//   <div className="row">
//     <div className="col">
//       <h1 className="display-4">Subcribe to our Newsletter</h1>
//       <form className="form-inline justify-content-center">
//         <label className="sr-only" htmlFor="name">
//           Name
//         </label>
//         <input type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" placeholder="Enter Name" />
//         <label className="sr-only" htmlFor="email">
//           Email
//         </label>
//         <input type="email" className="form-control mb-2 mr-sm-2 mb-sm-0" placeholder="Enter Email" />
//         <div>
//           <Link to="/" className="btn btn-outline-light btn-block">
//             Email Us
//           </Link>
//         </div>
//       </form>
//     </div>
//   </div>
// </div>;
const NewsLetter = () => {
  return (
    <section style={{ height: '258px' }} id="newsletter" className="text-center p-5 bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="mt-4 col-12">
            <h2 className="display-4">Have any questions?</h2>
            <div>
              <h2>
                Send us an email
                <span style={{ marginLeft: '20px' }}>
                  <a href="mailto:kmitchell@limitless-estates.com">
                    <i style={{ fontSize: '45px' }} className="far fa-envelope" />
                  </a>
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default NewsLetter;
