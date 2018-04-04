import React from 'react';
import { View, Mask } from 'mdbreact';

export default ({
  overlayColor,
  headerImage,
  pattern = '',
  subTitle,
  title = '',
  body,
  circleImage,
  pageFooter
}) => {
  return (
    <section className="h-100">
      <View
        style={{
          height: 27 + 'em',
          backgroundImage: `url(${headerImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}
        className={overlayColor}
      >
        <Mask className={`flex-center ${pattern}`} />
      </View>
      <div className="container">
        <div className="row justify-content-around py-3">
          <div className="col-12 col-lg-8 col-md-12 text-align-left">
            <h2 className="h3-responsive mb-2">{title}</h2>
            <div className="border-bottom" />
            <div className="mt-4">{body}</div>
            <p>{subTitle}</p>
            {pageFooter}
          </div>
          <div className="col-12 col-lg-4">
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
      </div>
    </section>
  );
};
