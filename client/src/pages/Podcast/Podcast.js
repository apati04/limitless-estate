import React, { Component } from 'react';
import axios from 'axios';
import api from './api';
import Player from './Player';
import { Card, CardBody, CardTitle, CardText } from 'mdbreact';
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
      return <Player key={item.id} episodeTitle={s2} />;
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
          <div className="container">
            <div className=" unique-color-dark row p-2 d-flex justify-content-center align-items-center flex-wrap">
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

            <div
              style={{ background: 'white' }}
              className="row d-flex p-4 justify-content-between align-items-start"
            >
              <div className="col-md-3">asdfasdf</div>
              <div className="col-md-9">
                {this.episodeRender()}
                {this.episodeRender()}
                {this.episodeRender()}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
// &amp;referrer=https://www.buzzsprout.com/255024.js?player=small
export default Podcast;
