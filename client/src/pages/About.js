import React, { Component } from 'react';
import MemberCard from '../components/MemberCard';
import PageHeader from '../components/PageHeader';
import RegisterModal from '../components/RegisterModal';
import { kyle, lalita, luis } from '../api/bios';
import { browserHistory } from 'react-router-dom';
const style = {
  card: {
    marginBottom: '1.5em',
    textAlign: 'center',
  },
  headline: { fontWeight: '400' },
  subText: {
    marginRight: '.75em',
    marginLeft: '.75em',
  },
};
const jamie =
  'https://media-exp2.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAKmAAAAJGJlNGIzZjYxLTNiNGEtNGFiNS1iYjU2LTI3MzMyN2FkYmRhNg.jpg';
export default class About extends Component {
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

        <div id="staff" className="py-5 text-center">
          {/* <div className="container">
            <h1>Our Team</h1>
            <hr />
            <div className="row">
              <MemberCard photo="/img/team/KMitchell.jpg" title="Kyle Mitchell" position="President" bio="km" />
              <MemberCard title="Lalita Patipaksiri" position="Member" bio="lp" photo="/img/advisors/OldCapital4.jpg" />
              <MemberCard title="Luis Cruz" bio="lc" position="member" photo="/img/team/LCruz.jpg" />
            </div>
          </div> */}
          <div className="container">
            <div className="row">
              <div style={style.card} className="col-lg-4">
                <img
                  className="img-fluid"
                  src="/img/team/KMitchell.jpg"
                  alt="Generic placeholder"
                  width="400"
                  height="400"
                />
                <h2>Heading</h2>
                <p>
                  Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies
                  vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo
                  cursus magna.
                </p>
                <p>
                  <a className="btn btn-secondary" href="#" role="button">
                    View details &raquo;
                  </a>
                </p>
              </div>

              <div style={style.card} className="col-lg-4">
                <img
                  class="rounded-circle"
                  src="http://lorempixel.com/400/200/"
                  alt="Generic placeholder"
                  width="230"
                  height="230"
                />
                <h2>Heading</h2>
                <p>
                  Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies
                  vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo
                  cursus magna.
                </p>
                <p>
                  <a className="btn btn-secondary" href="#" role="button">
                    View details &raquo;
                  </a>
                </p>
              </div>

              <div style={style.card} className="col-lg-4">
                <img
                  class="rounded-circle"
                  src="http://lorempixel.com/400/200/"
                  alt="Generic placeholder"
                  width="230"
                  height="230"
                />
                <h2>Heading</h2>
                <p>
                  Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies
                  vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo
                  cursus magna.
                </p>
                <p>
                  <a className="btn btn-secondary" href="#" role="button">
                    View details &raquo;
                  </a>
                </p>
              </div>
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
