import '../../style/sidebar.css';
import React, { Component } from 'react';
import { kyle } from '../../api/bios';
import Sidebar from '../../components/Sidebar';
export default class KMResume extends Component {
  render() {
    return (
      <div className="container-fluid bg-dark">
        <div className="row justify-content-between">
          <Sidebar />
          <main className="col-md-10 ml-sm-auto col-lg-10 pt-2">
            <div className="container-fluid">
              <div className="row align-self-center">
                <div id="resume" className="col-12">
                  <object id="bioObj" width="100%" height="850px" data={kyle} type="application/pdf">
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

/**
 *         <div className="d-flex justify-content-center">
          <nav className="navbar navbar-dark sticky-top bg-dark">
            <a href="#" className="navbar-brand col-sm-3 col-md-2 pul">
              CompanyName
            </a>

            <ul className="navbar-nav px-3">
              <li className="nav-item text-nowrap">
                <a href="" className="nav-link">
                  sign out
                </a>
              </li>
            </ul>
          </nav>
      
        </div>
 */
