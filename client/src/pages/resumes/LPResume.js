import '../../style/sidebar.css';
import React, { Component } from 'react';
import { lalita } from '../../api/bios';
import Sidebar from '../../components/Sidebar';
export default class LPResume extends Component {
  render() {
    return (
      <div className="container-fluid bg-dark">
        <div className="row justify-content-between">
          <Sidebar />
          <main style={{ height: '100vh' }} className="col-md-10 ml-sm-auto col-lg-10 pt-2">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <object data={lalita} type="application/pdf">
                    resume
                  </object>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}
