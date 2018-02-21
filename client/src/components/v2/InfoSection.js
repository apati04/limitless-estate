import React from 'react';
import { Link } from 'react-router-dom';

const InfoSection = () =>{
  return (
    <section  id="info" className="py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6 align-self-center">
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> packages styling
            <h3>Pitch Title</h3>
            <p>Insert pitch here Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae eaque quos eligendi, laboriosam. Culpa consequuntur illum facere id molestias.</p>
              <Link  to='/packages'>
              <button  className="btn btn-outline-danger btn-lg mt-5">See Markets</button>
              </Link>
<<<<<<< HEAD
=======
            <h3>Lorem Ipsum</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae eaque quos eligendi, laboriosam. Culpa consequuntur illum facere id molestias.</p>
            <Link to='/packages'>
              <button className="btn btn-outline-danger btn-lg">See Packages</button>
            </Link>
>>>>>>> add package page and a reuseable pageheader component
=======
>>>>>>> packages styling
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
