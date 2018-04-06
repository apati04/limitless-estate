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
          height: 25 + 'em',
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
        <div className="row justify-content-center text-left py-3">
          <div className="col-8 text-align-left text-left">
            <h2 className="h3-responsive mb-2">{title}</h2>
            <div className="border-bottom" />
            <div className="text-left mt-4">{body}</div>
            <p>{subTitle}</p>
            {pageFooter}
          </div>
        </div>
      </div>
    </section>
  );
};
