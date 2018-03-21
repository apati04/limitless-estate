import React from 'react';
import { View, Mask } from 'mdbreact';
import { NavLink } from 'react-router-dom';
export default ({
  overlayColor,
  headerImage,
  pattern = '',
  overlayText,
  title = '',
  body,
  circleImage,
  pageNumber,
  numPages
}) => {
  console.log(pageNumber, numPages);
  return (
    <section>
      <View
        style={{
          height: '400px',
          backgroundImage: `url(${headerImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '50% 50%'
        }}
        className={overlayColor}
      >
        <Mask className={`flex-center ${pattern}`}>{overlayText}</Mask>
      </View>
      <div className="container d-flex justify-content-between py-3">
        <div className="p-1 col-lg-8 col-md-12">
          <div className="blog-post">
            <h2 className="blog-post-title mb-2">{title}</h2>
            <div className="border-bottom" />
            <div className="mt-4">{body}</div>
            <div className="border-bottom mb-2" />
            {pageNumber + '' === numPages + '' ? (
              <div classname="container row">
                <div className="col-auto d-flex flex-center">
                  <NavLink className="mr-2" to={`/resources/investingrisks/1`}>
                    <i className="material-icons">arrow_back</i>
                  </NavLink>{' '}
                  <p className="text-center">
                    Page {pageNumber} of {numPages}
                  </p>
                </div>
              </div>
            ) : (
              <div classname="container row">
                <div className="col-auto d-flex flex-center">
                  <p className="text-center align-self-center">
                    Page {pageNumber} of {numPages}
                  </p>
                  <NavLink className="ml-2" to={`/resources/investingrisks/2`}>
                    <i className="material-icons">arrow_forward</i>
                  </NavLink>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="m-0 p-0 col-lg-4">
          <img
            style={{ marginTop: '-50px' }}
            src={circleImage}
            width="320px"
            height="320px"
            alt="LimitLess"
            className="border about-img img-fluid rounded-circle d-none d-lg-block"
          />
        </div>
      </div>
    </section>
  );
};
