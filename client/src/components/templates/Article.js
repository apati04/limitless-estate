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
        <Mask className={`flex-center ${pattern}`} />
      </View>
      <div className="container d-flex justify-content-between py-3">
        <div className="p-1 col-lg-8 col-md-12">
          <div className="blog-post">
            <h2 className="blog-post-title mb-2">{title}</h2>
            <p className="blog-post-meta font-italic font-weight-bold">
              {subTitle}
            </p>
            <div className="border-bottom" />
            <div className="mt-4">{body}</div>

            {pageFooter}
          </div>
        </div>
        <div className="col col-lg-4">
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
