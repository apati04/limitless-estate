import React, { Component } from 'react';
import { Fa, Button, Mask, View } from 'mdbreact';
import { NavLink } from 'react-router-dom';
class Ira_info extends Component {
  render() {
    const { link } = this.props;
    return (
      <section style={{ height: 22 + 'em' }}>
        <div className="row bg-no-gutters justify-content-center text-center p-5  flex-center">
          <div className="col-12 ">
            <h1 className="h1-responsive font-weight-bold">Did you know...</h1>
          </div>
          <div className="col-12">
            <h2 className="h2-responsive">
              You can invest with your 401k/IRA?
            </h2>
          </div>
          <div className="col-12">
            <NavLink className="btn btn-primary" to={link} size="md">
              Find Out More
            </NavLink>
          </div>
        </div>
      </section>
    );
  }
}

export default Ira_info;
