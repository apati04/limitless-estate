import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { View, Mask, Button } from 'mdbreact';
import classNames from 'classnames';
class PicCarousel extends Component {
  render() {
    const caption = (
      <div className="light-overlay">
        <Mask>
          <div style={{ padding: '50px', marginTop: 4 + '%' }} className="row">
            <div className="col">
              <h2 className="text-center h2-responsive white-text">
                Our vision at Limitless Estates is to provide A-class living to
                lower income housing by putting our residents first and
                instilling a sense of community while inspiring others to do the
                same.
              </h2>
              <h2 className="text-center h2-responsive white-text">
                Our mission is to positively impact the lives of the people in
                our local neighborhoods through{' '}
                <a
                  className=" text-success font-italic font-weight-bold"
                  href="/resources/impactinvesting"
                >
                  impact investing
                </a>{' '}
                while achieving double digit returns for our investors.
              </h2>
              <div
                style={{ marginTop: 4 + '%' }}
                className="d-none d-md-block text-center"
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
          </div>
        </Mask>
      </div>
    );

    return (
      <section>
        <div className="d-none d-md-block">
          <View>
            <img
              className="w-100 d-block"
              src="https://i.imgur.com/BI90AZ5.jpg?2"
              alt="First Slide"
            />
            <div>{caption}</div>
          </View>
        </div>

        <div className="d-block d-md-none">
          <View>
            <img
              className="d-block w-100"
              src="https://i.imgur.com/BI90AZ5.jpg?1"
              alt="First Slide"
            />
            <div className="light-overlay">
              <Mask className="black-light">
                <div className="row flex-center">
                  <div className="col">
                    <div className="p-2 text-center text-white">
                      Our vision at Limitless Estates is to provide A-class
                      living to lower income housing by putting our residents
                      first and instilling a sense of community while inspiring
                      others to do the same.
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
          <div className="p-2 rgba-grey-slight">
            <div className="m-2 text-center">
              Our mission is to positively impact the lives of the people in our
              local neighborhoods through{' '}
              <NavLink to="/resources/impactinvesting">
                impact investing
              </NavLink>{' '}
              while achieving double digit returns for our investors.
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default PicCarousel;
