import React from 'react';

const InfoSection = () =>{
  return (
    <section style={{marginTop: '10px'}} id="info" className="py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6 align-self-center">
            <h3>Lorem Ipsum</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae eaque quos eligendi, laboriosam. Culpa consequuntur illum facere id molestias.</p>
            <button className="btn btn-outline-danger btn-lg">Learn More</button>
          </div>
          <div className="col-md-6">
            <img src="/img/chart2.jpg" className="img-fluid" alt=""/>
          </div>
          </div>
        </div>
    </section>
  )
}

export default InfoSection;
