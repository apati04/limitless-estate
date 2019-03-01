import React from 'react';
import { View, Mask } from 'mdbreact';

const Article = ({
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
    <section style={{ height: '100%' }} className="h-100">
      <div
        style={{
          height: 25 + 'em',
          backgroundImage: `url(${headerImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}
        className={`${overlayColor} view`}
      >
        <Mask className={`flex-center ${pattern}`} />
      </div>
      <div className="container">
        <div className="row justify-content-around my-4">
          <div className="col-12 col-lg-8 text-left">
            <div>
              <h3 className="h3-responsive text-center text-md-left mb-4">
                {title}
              </h3>
              <div className="border-bottom" />
              <div className="mt-4">{body}</div>
              {pageFooter}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Article;
