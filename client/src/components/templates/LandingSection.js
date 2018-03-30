import React from 'react';

export default ({ text, textcolor }) => {
  return (
    <div>
      <section className="p-5">
        <div className="row">
          <div className="col">
            <div className="container pt-5">
              <h1
                style={{ marginTop: '3%' }}
                className={`${textcolor || 'text-white'} 'display-4'`}
              >
                {text}
              </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
