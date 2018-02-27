import React from 'react';
import { kyle } from '../api/bios';
export default () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <object data={kyle} width="100%" height="800px" type="application/pdf" />
        </div>
      </div>
    </div>
  );
};
