import './podcastStyle.css';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import api from './api';
import Player from './Player';
import Parse from 'html-react-parser';
import Moment from 'react-moment';

import {
  MDBCardHeader,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBListGroup,
  MDBListGroupItem,
  MDBView,
  MDBMask
} from 'mdbreact';
import SubButton from './SubButton';
import ReactSVG from 'react-svg';

const styles = {
  hList: {
    display: 'inline',
    textTransform: 'uppercase'
  },
  hLine: {
    width: '100%',
    textAlign: 'left',
    borderBottom: '1px solid #000',
    lineHeight: '0.1em',
    fontWeight: '400',
    margin: '40px 0 30px'
  },
  hLineSpan: {
    padding: '0 10px',
    background: '#EEEEEE'
  },
  hostName: {
    color: 'rgb(33,35,37)',
    fontWeight: 500,
    fontSize: '15px'
  }
};
class Podcast extends Component {
  renderButtons = () => {
    return api.media.map((item, idx) => {
      return <SubButton {...item} key={idx} />;
    });
  };
  episodeRender = () => {
    if (this.props.episodes === null) {
      return;
    }
    const { episodes } = this.props;
    return episodes.map(item => {
      const s1 = item.audio_url.split('/');
      const s2 = s1[s1.length - 1].split('.')[0];
      const day = new Date(item.published_at).getDate();
      const duration = item.duration * 1000;
      let ep;
      if (item.id === 949981) {
        ep = 0;
      } else {
        ep = item.episode_number;
      }
      return (
        <MDBCard key={item.id} className="mb-4">
          <MDBCardHeader>
            <MDBCardTitle
              style={{
                fontWeight: '400',
                fontSize: '1.1rem',
                marginTop: '0.75rem'
              }}
            >
              {item.title}
            </MDBCardTitle>
          </MDBCardHeader>
          <MDBCardBody className="px-4">
            <div className="mb-1">
              <Player playerUrl={s2} />
            </div>

            <div className="pt-2">
              <MDBCardTitle className="mb-1 pb-0">
                Passive Income Through Multifamily Real Estate Podcast
              </MDBCardTitle>

              <div className="mb-2 mt-0 p-0 d-inline-flex flex-center flex-wrap">
                <small>Ep.{ep}</small>
                <i
                  style={{ fontSize: '5px' }}
                  className="text-black-50 fas fa-circle m-1"
                />
                <small>
                  Published on <Moment format="LL">{item.published_at}</Moment>
                </small>
                <i
                  style={{ fontSize: '5px' }}
                  className="text-black-50 fas fa-circle m-1"
                />
                <small>
                  {' '}
                  Length <Moment format="mm:ss">{duration}</Moment>
                </small>
              </div>
              <div className="py-1">
                <div className="my-3">
                  <p
                    style={{
                      color: '#212325',
                      opacity: '0.8'
                    }}
                    className="m-0 p-0"
                  >
                    <strong>EPISODE SUMMARY</strong>
                  </p>
                  <p
                    style={{
                      color: '#212325'
                    }}
                    className="m-0 p-0"
                  >
                    {' '}
                    {item.summary}
                  </p>
                </div>
                <div>
                  <p
                    style={{
                      color: '#212325',
                      opacity: '0.8'
                    }}
                    className="mb-0"
                  >
                    <strong>FEATURING</strong>
                  </p>
                  <p
                    style={{
                      color: '#212325'
                    }}
                  >
                    {item.artist}
                  </p>
                </div>
              </div>
            </div>
          </MDBCardBody>
        </MDBCard>
      );
    });
  };
  render() {
    const colorBg = { one: '#fafafa', two: '#eee', three: '#dee2e6' };

    return (
      <section id="podcastSection" style={{ background: `${colorBg.two}` }}>
        <div
          style={{
            minHeight: '100vh'
          }}
          id="podcastContainer"
        >
          <div className="container">
            <MDBCard className="my-4">
              <div className="stylish-color-dark row p-3 d-flex justify-content-center align-items-center flex-wrap">
                <div style={{ borderRadius: '4px' }} className="col-md-4 p-3">
                  <img
                    src="https://i.imgur.com/TxnoBIK.jpg"
                    height="260"
                    width="260"
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-8">
                  <h1 className="font-weight-bold text-white">
                    Limitless Estates Podcast
                  </h1>
                  <p
                    style={{
                      opacity: '0.97',
                      color: '#616161',
                      fontSize: '18px'
                    }}
                    className="text-white"
                  >
                    {api.description}
                  </p>
                </div>
              </div>
            </MDBCard>
            <div className="row d-flex p-0 my-3 justify-content-between align-items-start">
              <div className="pl-0 pr-3 col-md-4">
                <div className="mb-4">
                  <MDBCard>
                    <MDBCardBody className="px-2">
                      <MDBListGroup className="my-1 list-unstyled">
                        {this.renderButtons()}
                      </MDBListGroup>
                    </MDBCardBody>
                  </MDBCard>
                </div>
                <div>
                  <div className="mb-3">
                    <p style={styles.hLine}>
                      <span style={styles.hLineSpan}>Your Hosts</span>
                    </p>
                    <NavLink to="/members/about/kyle">
                      <MDBCard>
                        <MDBView hover>
                          <MDBCardBody className="p-3">
                            <div className="avatar d-flex justify-content-start align-items-center">
                              <img
                                style={{ maxWidth: '44px' }}
                                className="card-img rounded-circle"
                                src="https://i.imgur.com/qC2iaYa.jpg?1"
                              />
                              <div className="ml-3">
                                <p style={styles.hostName} className="p-0 m-0">
                                  Kyle Mitchell
                                </p>
                                <p
                                  style={{ fontSize: '13px' }}
                                  className="text-black-50 p-0 m-0"
                                >
                                  Managing Parter
                                </p>
                              </div>
                            </div>
                          </MDBCardBody>

                          <MDBMask
                            className="flex-center"
                            overlay="stylish-light"
                          />
                        </MDBView>
                      </MDBCard>
                    </NavLink>
                  </div>
                  <div className="py-2">
                    <NavLink to="/members/about/lalita">
                      <MDBCard>
                        <MDBView hover>
                          <MDBCardBody className="p-3">
                            <div className="avatar d-flex justify-content-start align-items-center ">
                              <img
                                style={{ maxWidth: '44px' }}
                                className="card-img rounded-circle"
                                src="https://i.imgur.com/Lok4G0b.jpg?1"
                              />
                              <div className="ml-3">
                                <p style={styles.hostName} className="p-0 m-0">
                                  Lalita Patipaksiri
                                </p>
                                <p
                                  style={{ fontSize: '13px' }}
                                  className="text-black-50 p-0 m-0"
                                >
                                  Managing Parter
                                </p>
                              </div>
                            </div>
                          </MDBCardBody>
                          <MDBMask
                            className="flex-center"
                            overlay="stylish-light"
                          />
                        </MDBView>
                      </MDBCard>
                    </NavLink>
                  </div>
                </div>
              </div>

              <div className="pr-0 pl-3 col-md-8">{this.episodeRender()}</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Podcast;
