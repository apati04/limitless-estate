import React, { Component } from 'react';
import MemberCard from '../components/MemberCard';
import PageHeader from '../components/PageHeader';
import RegisterModal from '../components/RegisterModal';
import { kyle, lalita, luis } from '../api/bios';
import { browserHistory } from 'react-router-dom';
import axios from 'axios';
const jamie =
  'https://media-exp2.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAKmAAAAJGJlNGIzZjYxLTNiNGEtNGFiNS1iYjU2LTI3MzMyN2FkYmRhNg.jpg';
export default class About extends Component {
  getResume() {
    axios.get('/api/pdf').then(res => {
      console.log('done');
    });
  }
  render() {
    return (
      <div>
        <PageHeader title="About Us" description="Check out what we do" img="/img/imageLA.jpg" />
        <section id="about" className="py-3">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1>What We Do</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum sequi necessitatibus deleniti
                  accusamus provident dignissimos numquam fuga nulla quia voluptatibus, dolore voluptate excepturi
                  accusantium dolores temporibus fugit, voluptas velit omnis!
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum sequi necessitatibus deleniti
                  accusamus provident dignissimos numquam fuga nulla quia voluptatibus, dolore voluptate excepturi
                  accusantium dolores temporibus fugit, voluptas velit omnis!
                </p>
              </div>
              <div className="col-md-6">
                <img src="" alt="" className="about-img img-fluid rounded-circle d-none d-md-block" />
              </div>
            </div>
          </div>
        </section>

        <section id="home-icons" className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-4 mb-4 text-center">
                <i className="fa fa-cog mb-2" />
                <h3>Turning Gears</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, maxime.</p>
              </div>
              <div className="col-md-4 mb-4 text-center">
                <i className="fa fa-cloud mb-2" />
                <h3>Sending Data</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, maxime.</p>
              </div>
              <div className="col-md-4 mb-4 text-center">
                <i className="fa fa-cart-plus mb-2" />
                <h3>Making Money</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, maxime.</p>
              </div>
            </div>
          </div>
        </section>

        <div id="staff" className="py-5 text-center bg-secondary text-white">
          <div className="container">
            <h1>Our Team</h1>
            <hr />
            <div className="row">
              <button
                onClick={() => {
                  this.getResume();
                }}
              >
                TESTER
              </button>
              <MemberCard photo="/img/advisors/OldCapital4.jpg" title="Kyle Mitchell" position="President" bio="km" />
              <MemberCard title="Lalita Patipaksiri" position="Member" bio="lp" photo="/img/advisors/OldCapital4.jpg" />
              <MemberCard title="Luis Cruz" bio="lc" position="member" photo="/img/advisors/OldCapital4.jpg" />
            </div>
          </div>
        </div>
        <div style={{ marginBottom: '-20px' }} className="py-5 text-center bg-secondary text-white">
          <div className="container">
            <h1>Advisors</h1>
            <hr />
            <div className="row">
              <MemberCard />
              <MemberCard />
              <MemberCard />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
