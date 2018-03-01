import React, { Component } from 'react';
import MemberCard from '../components/MemberCard';
import PageHeader from '../components/PageHeader';
import RegisterModal from '../components/RegisterModal';
import { kyle, lalita, luis } from '../api/bios';
import { browserHistory } from 'react-router-dom';

const jamie =
  'https://media-exp2.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAKmAAAAJGJlNGIzZjYxLTNiNGEtNGFiNS1iYjU2LTI3MzMyN2FkYmRhNg.jpg';
export default class About extends Component {
  render() {
    const kyleImg = '/img/team/KMitchell.jpg';
    const luisImg = '/img/team/LCruz.jpg';
    const lalitaImg = '/img/team/LPatipak.jpg';
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


        <div style={{ marginBottom: '-20px' }} className="py-5 text-center bg-secondary text-white">
          <div className="container">
            <h1 className="display-4">Meet the Team</h1>
            <hr />
            <div className="row">

              <MemberCard firstName="Kyle" lastName="Mitchell" position="President" photo={kyleImg} bio="" />
              <MemberCard firstName="Lalita" lastName="Patipaksiri" photo={lalitaImg} position="Managing Member" />
              <MemberCard firstName="Luis" lastName="Cruz" position="Managing Member" photo={luisImg} />

            </div>
          </div>
        </div>
      </div>
    );
  }
}
