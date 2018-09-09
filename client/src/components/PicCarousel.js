import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { View, Mask, Button } from 'mdbreact';
import classNames from 'classnames';
import YoutubeVideo from './Youtube/Intro';
import MobileYoutube from './Youtube/MobileIntro';
import Limitless from './wistia/limitless';
class PicCarousel extends Component {
  render() {
    const caption = (
      <div className="light-overlay">
        <Mask className="container pt-0">
          <div className="row justify-content-center align-items-center flex-center">
            <div className="col-6">
              <h2
                style={{ color: 'white', marginBottom: 2 + '%' }}
                className="text-left h4-responsive"
              >
                Our vision at Limitless Estates is to provide A-class living to
                lower income housing by putting our residents first and
                instilling a sense of community while inspiring others to do the
                same.
              </h2>
              <h4
                style={{ color: 'white', marginBottom: 2 + '%' }}
                className="text-left h4-responsive"
              >
                Our mission is to positively impact the lives of the people in
                our local neighborhoods through{' '}
                <a
                  className=" text-success font-italic font-weight-bold"
                  href="/resources/impactinvesting"
                >
                  impact investing
                </a>{' '}
                while achieving double digit returns for our investors.
              </h4>
              <div
                style={{ marginTop: 4 + '%' }}
                className="d-none d-md-block text-center h4-responsive"
              >
                <NavLink
                  style={{ borderRadius: '99px' }}
                  className="btn btn-primary"
                  to="info/questionnaire"
                >
                  Make an Impact
                </NavLink>
              </div>
            </div>
            <div className="col-6">
              <Limitless />
            </div>
          </div>
        </Mask>
      </div>
    );
    const styles = {
      header: {
        padding: '0',
        background: 'url(https://i.imgur.com/BI90AZ5.jpg?2) center no-repeat',
        backgroundSize: 'cover',
        height: 40 + 'em'
      },
      mobileHeader: {
        padding: '0',
        background: 'url(https://i.imgur.com/BI90AZ5.jpg?2) center no-repeat',
        backgroundSize: 'cover',
        height: 25 + 'em'
      }
    };
    return (
      <section>
        <div className="d-none d-md-block">
          <View>
            <div style={styles.header} />
            <div>{caption}</div>
          </View>
        </div>

        <div className="d-block d-md-none">
          <View>
            <div style={styles.mobileHeader} />
            <div className="light-overlay">
              <Mask className="black-light container">
                <div className="row justify-content-center flex-center">
                  <div className="col">
                    <div className="p-2 text-center text-white">
                      Our vision at Limitless Estates is to provide A-class
                      living to lower income housing by putting our residents
                      first and instilling a sense of community while inspiring
                      others to do the same.
                    </div>
                    <div className="p-2 text-center text-white">
                      Our mission is to positively impact the lives of the
                      people in our local neighborhoods through{' '}
                      <NavLink
                        to="/resources/impactinvesting"
                        className=" text-success font-italic font-weight-bold"
                      >
                        impact investing
                      </NavLink>{' '}
                      while achieving double digit returns for our investors.
                    </div>
                    <div className="p-2 text-center">
                      <a
                        href="https://ehypauluugknktzawdwva-free.10to8.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                        style={{ whiteSpace: 'nowrap' }}
                        className="btn btn-sm btn-primary btn-rounded align-items-center"
                      >
                        Schedule an appointment{' '}
                        <i
                          className="fa fa-volume-control-phone"
                          aria-hidden="true"
                          style={{
                            fontSize: '13px',
                            paddingTop: '2px',
                            paddingLeft: '8px'
                          }}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </Mask>
            </div>
          </View>
          <div className="rgba-stylish-slight p-1">
            <MobileYoutube />
          </div>
        </div>
      </section>
    );
  }
}

export default PicCarousel;
