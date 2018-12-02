import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { View, Mask } from "mdbreact";
import Limitless from "./wistia/limitless";
class PicCarousel extends Component {
  render() {
    const caption = (
      <div className="light-overlay">
        <Mask style={{ paddingTop: 60 + "px" }} className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-6">
              <h2
                style={{ color: "white", marginBottom: 2 + "%" }}
                className="text-left h4-responsive"
              >
                Our vision at Limitless Estates is to provide A-class living to
                lower income housing by putting our residents first and
                instilling a sense of community while inspiring others to do the
                same.
              </h2>
              <h4
                style={{ color: "white", marginBottom: 2 + "%" }}
                className="text-left h4-responsive"
              >
                Our mission is to positively impact the lives of the people in
                our local neighborhoods through{" "}
                <a
                  className=" text-success font-italic font-weight-bold"
                  href="/resources/impactinvesting"
                >
                  impact investing
                </a>{" "}
                while achieving double digit returns for our investors.
              </h4>
              <div
                style={{ marginTop: 4 + "%" }}
                className="d-none d-md-block text-center h4-responsive"
              >
                <NavLink
                  style={{ borderRadius: "5px", background: "#1847A1" }}
                  className="btn"
                  to="info/questionnaire"
                >
                  Get Started Here
                </NavLink>
              </div>
            </div>
            <div className="col-6">
              <Limitless
                wistiaSrc="https://fast.wistia.com/embed/medias/pueh6irs0z/swatch"
                wistiaClass="wistia_embed wistia_async_pueh6irs0z videoFoam=true"
              />
            </div>
          </div>
          <div className="row justify-content-center align-items-center mt-4">
            <div style={{ color: "white" }} className="mt-4 col-6">
              <Limitless
                wistiaSrc="https://fast.wistia.com/embed/medias/mtdamm7u8i/swatch"
                wistiaClass="wistia_embed wistia_async_mtdamm7u8i videoFoam=true"
              />
            </div>
            <div className="col-6 text-center text-justify-center text-md-center white-text">
              <h4 className="text-left h4-responsive mt-2">
                Did you know you can invest with your 401k/IRA? Watch the video
                to find out more.
              </h4>
              <h4 className="text-left h4-responsive mt-2">
                Click the link below to connect with our preferred partners and
                setup your self-directed IRA
              </h4>
              <NavLink
                className="btn btn-primary"
                to="/info/investing/ira401k"
                size="md"
                style={{ borderRadius: "5px" }}
              >
                Invest With your 401k/IRA
              </NavLink>
            </div>
          </div>
        </Mask>
      </div>
    );
    const styles = {
      header: {
        padding: "0",
        background: "url(https://i.imgur.com/BI90AZ5.jpg?2) bottom no-repeat",
        backgroundSize: "cover",
        minHeight: 50 + "em"
      },
      mobileHeader: {
        padding: "0",
        background: "url(https://i.imgur.com/BI90AZ5.jpg?2) center no-repeat",
        backgroundSize: "cover",
        height: 25 + "em"
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
                      people in our local neighborhoods through{" "}
                      <NavLink
                        to="/resources/impactinvesting"
                        className=" text-success font-italic font-weight-bold"
                      >
                        impact investing
                      </NavLink>{" "}
                      while achieving double digit returns for our investors.
                    </div>
                    <div className="p-2 text-center">
                      <a
                        href="https://ehypauluugknktzawdwva-free.10to8.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                        style={{ whiteSpace: "nowrap" }}
                        className="btn btn-sm btn-primary btn-rounded align-items-center"
                      >
                        Schedule a Call{" "}
                        <i
                          className="fa fa-volume-control-phone"
                          aria-hidden="true"
                          style={{
                            fontSize: "13px",
                            paddingTop: "2px",
                            paddingLeft: "8px"
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
            <Limitless />
          </div>
        </div>
      </section>
    );
  }
}

export default PicCarousel;
