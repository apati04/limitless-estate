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
import SubButton from './SubButton';
import ReactSVG from 'react-svg';

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
  renderButtons = () => {
    return api.media.map((item, idx) => {
      return <SubButton {...item} key={idx} />;
    });
  };
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
                  color: 'rgba(10,10,10,1)',
                  marginBottom: 0
                }}
                className=""
              >
                Featuring: {item.artist}
              </p>
              <div>
                <small>
                  Published on <Moment format="LL">{item.published_at}</Moment>
                </small>
              </div>

              <p
                style={{ fontSize: '1em', lineHeight: '1.5rem' }}
                className="mt-4 text-black-80"
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
            <div className="row d-flex p-0 my-4 justify-content-between align-items-start">
              <div className="pl-0 col-md-3">
                <Card>
                  <CardHeader>
                    <CardTitle
                      style={{
                        fontWeight: '400',
                        fontSize: '1.1rem',
                        marginTop: '0.75rem'
                      }}
                      className="ml-3"
                    >
                      Subscribe to our Podcast
                    </CardTitle>
                  </CardHeader>
                  <CardBody>
                    <div className="p-2">{this.renderButtons()}</div>
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

export default Podcast;
