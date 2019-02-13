import React from 'react';
import { Link } from 'react-router-dom';

const NewsLetter = () => {
  return (
    <section
      style={{ height: '258px' }}
      id="newsletter"
      className="text-center p-5 bg-dark text-white"
    >
      <div className="container">
        <div className="row">
          <div className="mt-4 col-12">
            <h2 className="display-4 news-title">Have any questions?</h2>
            <div>
              <h2 className="news-text">
                Send us an email
                <span style={{ marginLeft: '20px' }}>
                  <a href="mailto:kmitchell@limitless-estates.com">
                    <i
                      style={{ fontSize: '45px' }}
                      className="far fa-envelope"
                    />
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
