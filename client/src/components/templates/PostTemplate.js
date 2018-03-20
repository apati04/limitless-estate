import React from 'react';
import { View } from 'mdbreact';

export default ({overlayColor, headerImage, pattern, overlayText, post}) => {
  return (
    <section>
      <View className={overlayColor}
        src={headerImage}
        alt=""
      />
      <Mask className={`flex-center ${pattern}`}>{overlayText}</Mask>

      <div className="container d-flex justify-content-around py-3">
        <div className="p-1 col-lg-8 col-md-12">
          <div className="blog-post">
            <h2 className="blog-post-title mb-2">
              {post.title}
            </h2>
            <div className="border-top">
              {post.text}
            </div>
          </div>
        </div>
        <div className="m-0 p-0 col-lg-4">
          <img
            style={{ marginTop: '-50px' }}
            src={post.image}
            width="320px"
            height="320px"
            alt="LimitLess"
            className="border border-bottom-0 border-secondary p-0 about-img img-fluid rounded-circle d-none d-lg-block"
          />
        </div>
      </div>
    </section>
  )
}
