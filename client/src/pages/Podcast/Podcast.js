import React, { Component } from 'react';
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
  MDBCardImage
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

            <div>
              <div className="mb-2 p-0">
                <small className="text-black-50">
                  Podcast Ep.{ep} {` // `} Published on{' '}
                  <Moment format="LL">{item.published_at}</Moment> {` // `}{' '}
                  Length <Moment format="mm:ss">{duration}</Moment>
                </small>
              </div>
              <MDBCardTitle>
                Passive Income Through Multifamily Real Estate Podcast
              </MDBCardTitle>

              <p
                style={{
                  color: '#212325'
                }}
                className="mt-4"
              >
                SUMMARY: <br />
                {item.summary}
              </p>
              <p
                style={{
                  color: '#212325'
                }}
                className="pt-0 mt-0"
              >
                FEATURING: <br />
                {item.artist}
              </p>
            </div>
          </MDBCardBody>
        </MDBCard>
      );
    });
  };
  render() {
    const colorBg = { one: '#fafafa', two: '#eee', three: '#dee2e6' };

    return (
      <section style={{ background: `${colorBg.two}` }}>
        <div
          style={{
            minHeight: '100vh'
          }}
          id="podcastContainer"
        >
          <div style={{ padding: 0 }} className="container">
            <MDBCard className="my-4">
              <div className="stylish-color-dark row p-2 d-flex justify-content-center align-items-center flex-wrap">
                <div style={{ borderRadius: '4px' }} className="col-md-3 p-4">
                  <img
                    src="https://i.imgur.com/TxnoBIK.jpg"
                    height="260"
                    width="260"
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-9">
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
              <div className="pl-0 pr-3 col-md-3">
                <div className="mb-4">
                  <MDBCard>
                    {/* <MDBCardHeader>
                    <MDBCardTitle
                      style={{
                        fontWeight: '400',
                        fontSize: '1.1rem',
                        marginTop: '0.75rem'
                      }}
                      className="ml-3"
                    >
                      Subscribe to our Podcast
                    </MDBCardTitle>
                  </MDBCardHeader> */}
                    <MDBCardBody>
                      <div className="p-2">{this.renderButtons()}</div>
                    </MDBCardBody>
                  </MDBCard>
                </div>
                <div>
                  <div className="my-4">
                    <p style={styles.hLine}>
                      <span style={styles.hLineSpan}>Your Hosts</span>
                    </p>
                  </div>

                  <div className="mb-3">
                    <MDBCard>
                      <MDBCardBody className="p-3">
                        <div className="avatar d-flex justify-content-start align-items-center ">
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
                    </MDBCard>
                  </div>
                  <div>
                    <MDBCard>
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
                    </MDBCard>
                  </div>
                </div>
              </div>

              <div className="pr-0 pl-3 col-md-9">{this.episodeRender()}</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Podcast;
