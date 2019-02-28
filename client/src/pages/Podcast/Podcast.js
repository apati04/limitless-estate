import React, { Component } from 'react';
import axios from 'axios';
import api from './api';
import Player from './Player';
import Parse from 'html-react-parser';
import Moment from 'react-moment';

import {
  CardHeader,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImage
} from 'mdbreact';
import ReactSVG from 'react-svg';
// https://assets.buzzsprout.com/assets/app/directories/US_UK_Apple_Podcasts_Listen_Badge_RGB-aca2df4cadce191ac1a3971f0992dacdfe74bd91fac4be65bf44f50501fd090e.svg

const styles = {
  header: {
    padding: '0',
    background:
      'url(https://i.imgur.com/1z653Y0.jpg?1) center center no-repeat',
    backgroundSize: 'cover',
    height: 15 + 'em'
  }
};
class Podcast extends Component {
  state = {
    episodes: null
  };
  componentDidMount() {
    axios.get('/api/podcast').then(result => {
      this.setState({ episodes: result.data.data });
    });
  }
  episodeRender = () => {
    if (this.state.episodes === null) {
      return;
    }
    const { episodes } = this.state;
    return episodes.map(item => {
      const s1 = item.audio_url.split('/');
      const s2 = s1[s1.length - 1].split('.')[0];
      const day = new Date(item.published_at).getDate();
      return (
        <Card key={item.id} className="mb-4">
          <CardHeader>
            <CardTitle
              style={{
                fontWeight: '400',
                fontSize: '1.1rem',
                marginTop: '0.75rem'
              }}
            >
              {item.title}
            </CardTitle>
          </CardHeader>
          <CardBody className="px-4">
            <div className="mb-3">
              <Player playerUrl={s2} />
            </div>
            <div>
              <p
                style={{
                  fontFamily: 'Arimo',
                  color: '#7B8996',
                  lineHeight: '1.5'
                }}
              >
                Published On <Moment format="LL">{item.published_at}</Moment>
                Duration
              </p>
              <p
                style={{
                  opacity: '0.90',
                  margin: 0,
                  lineHeight: '28px'
                }}
                className=" p-2 font-italic"
              >
                Featuring {item.artist} |{' '}
              </p>
              <p
                style={{ fontSize: '18px', color: '#555555' }}
                className=" p-2"
              >
                {item.summary}
              </p>
            </div>
          </CardBody>
        </Card>
      );
    });
  };
  render() {
    const corsUrl = 'https://cors-anywhere.herokuapp.com/';
    const itunesUrl =
      'https://itunes.apple.com/us/podcast/passive-income-through-multifamily-real-estate/id1451849159?mt=2';
    const sticherUrl = 'https://app.stitcher.com/browse/feed/376895/details';

    return (
      <section style={{ background: '#dee2e6' }}>
        <div
          style={{
            minHeight: '100vh'
          }}
          id="podcastContainer"
        >
          <div style={{ padding: 0 }} className="container">
            <Card>
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
                    style={{ opacity: '0.97', fontSize: '18px' }}
                    className="text-white"
                  >
                    {api.description}
                  </p>
                </div>
              </div>
            </Card>
            <div className="row d-flex p-0 my-5 justify-content-between align-items-start">
              <div className="pl-0 col-md-3">
                <Card>
                  <CardHeader>
                    <CardText className="font-size-4 font-weight-light">
                      Subscribe to our Podcast
                    </CardText>
                  </CardHeader>
                  <CardBody>
                    <CardImage
                      src="https://i.imgur.com/BtthUlD.png"
                      alt=""
                      className="img-fluid mb-3"
                    />
                    <CardImage
                      src="https://i.imgur.com/IAxza1Y.png"
                      alt=""
                      className="img-fluid mb-3"
                    />
                    <CardImage
                      src="https://i.imgur.com/OEPZ0hZ.png"
                      alt=""
                      className="img-fluid mb-3"
                    />
                    <CardImage
                      src="https://i.imgur.com/GPupl19.png"
                      alt=""
                      className="img-fluid mb-3"
                    />
                  </CardBody>
                </Card>
              </div>

              <div className="pr-0 col-md-9">{this.episodeRender()}</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
// &amp;referrer=https://www.buzzsprout.com/255024.js?player=small
export default Podcast;
