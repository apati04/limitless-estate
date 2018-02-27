import '../../style/sidebar.css';
import React, { Component } from 'react';
import { kyle } from '../../api/bios';
import Sidebar from '../../components/Sidebar';
export default class KMResume extends Component {
  render() {
    const linker =
      'https://doc-0s-4s-apps-viewer.googleusercontent.com/viewer/secure/pdf/3a2g2ns52tf47lhteqe552kpsosl5ocn/5rul10l1qsf8qie0nkrm8lrm46rp8ud8/1519774425000/drive/01176241258975972643/ACFrOgDsTzup77WR-abrDmMglPadKnJ87t3sKZpkvGA_8Ynl3FBVPV8e09voTqvvS3BNjZX06sxibZ9fEDJtptrVZMdHuWckbdG2JBiktCDKit9HGWNohvIwNcfVLpc=?nonce=lquqghcqr65mu&user=01176241258975972643&hash=60bv66v2k0utq3pu9c99i6ekd8siia4j';
    return (
      <div className="container-fluid bg-dark">
        <div className="row justify-content-between">
          <Sidebar />
          <main style={{ height: '100vh' }} className="col-md-10 ml-sm-auto col-lg-10 pt-2">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <object data={linker} type="application/pdf">
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
