import React from 'react';
import EmployeeCard from './EmployeeCard';

const About = () => {
  return (
    <section id="staff" className="my-5 text-center">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="info-header mb-5">
              <h1 className="text-primary pb-3">
                Meet The Staff
            </h1>
            <p className="lead pb-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet omnis fuga maiores excepturi dolores explicabo.
            </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <EmployeeCard 
              name="Lalita Patipaksiri"
              title="Co-Founder"
              description="Expertise with inserting mission statements"
              imgSrc="/img/Picture1.png"
            />
          </div>
          <div className="col-lg-4 col-md-6"></div>
          <div className="col-lg-4 col-md-6"></div>
        </div>
      </div>
    </section>
  )
}

export default About;