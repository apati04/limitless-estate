import React, { Component } from 'react';
import axios from "axios";
import mapboxgl from "mapbox-gl";
import { Link } from 'react-router-dom';
import Content from '../../components/Content';
import PageHeader from '../../components/PageHeader';
import RegisterModal from '../../components/RegisterModal';
import StickyBox from 'react-sticky-box';
const property_img = "/img/ecorse/image1.png";
const map_img = "/img/ecorse/image2.png";
const acquisition_img = "/img/ecorse/image3.png";
const rent_roll_img = "/img/ecorse/image4.png";
const income_expenses_img = "/img/ecorse/image5.png";
const financial_projection_img = "/img/ecorse/image6.png";
const equity_return_img = "/img/ecorse/image7.png";
const projected_cash_flow_img = "/img/ecorse/image8.png";

class Ecorse extends Component {
  state = {
    content: "EXECUTIVE_SUMMARY"
  }

  componentDidMount() {
    this.renderMap();
  }

  renderMap = async () => {
    const mapboxUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places';
    const zillowKey = 'X1-ZWz18sa4dxcwln_8jmj2';
    const mapboxToken = 'pk.eyJ1IjoiaXNhYWMxMTA0IiwiYSI6ImNqZDgwYjJ5MTI1dXUycWw5M3E5bnpldDcifQ.tRpvJ9X5wq7ke4t9KGd4yg';
    const location = "4471 & 4581 High Street, Ecorse, MI";
    const request = await axios.get(`${mapboxUrl}/${location}.json?access_token=${mapboxToken}`);
    const { data } = request;

    const lng = data.features[0].center[0];
    const lat = data.features[0].center[1];

    mapboxgl.accessToken = "pk.eyJ1IjoiaXNhYWMxMTA0IiwiYSI6ImNqZDgwYjJ5MTI1dXUycWw5M3E5bnpldDcifQ.tRpvJ9X5wq7ke4t9KGd4yg";
    const map = new mapboxgl.Map({
      container: "mapbox",
      style: "mapbox://styles/mapbox/outdoors-v10",
      center: [ lng, lat ],
      zoom: 15
    });
    new mapboxgl.Marker().setLngLat([ lng, lat ]).addTo(map);
  }

  renderData = () => {
    switch (this.state.content) {
      case "EXECUTIVE_SUMMARY":
        return (
          <Content
            title = "EXECUTIVE SUMMARY"
            content_1 = "Limitless Estates, LLC a California Limited Liability company with offices in Long Beach, CA, is arranging for the acquisition of undivided real estate interests in the above property by a limited number of sophisticated and qualified investors. The property consists of 72 units. The purchase price is $3.175M."
            content_2 = "We are seeking a total investment of $1.0M with a minimum of $50,000 per investor. Investors receive 80% equity with projected average annual returns of 15%-20%. Cash flow distributions are made at the end of each calendar quarterly."
            content_3 = "Investors should be prepared to leave their money in for a minimum of 5 years, even though there is a possibility to re-finance and repay the investor’s principal before then. Investors have the option of getting cashed out of their investment between year 3 and 4 at 90% of fair market value of their shares. If we re-finance or sell the property, investors first receive their principal back, then receive 80% of any profits."
            content_4 = "We have not yet completed due diligence. If due diligence materials differ in our assumptions, we
            will either re-negotiate the terms or terminate the contract."
            content_5 = "Please see below for more information about the property, its current performance, our strategy to increase income and our financial projections."
          />
        );
        break;
      case "ABOUT_THIS_PROPERTY":
        return (
          <Content
            title = "ABOUT THIS PROPERTY"
            content_1 = "The subject property is a 72-unit multifamily low-rise garden style apartment divided into 4 buildings located at 4471 & 4581 High Street. There is a 24 unit building and a 12 unit building to make up River Park and two 18 unit buildings to make up Jefferson Manor.  The buildings are comprised of 67 Two Bedroom/One Bath and 5 One Bedroom/One Bath units. The buildings sit on 1.67 acres and 57,100 rentable square feet. These properties were built between 1971-1973 and provide views of the Detroit River."
          />
        );
        break;
      case "OPPORTUNITY_AND_BUSINESS_PLAN":
        return (
          <Content
            title = "OPPORTUNITY AND BUSINESS PLAN"
            content_1 = "This property is a value add opportunity with potential upside through management as well as increasing current rents to reflect the local multifamily market.  Our plan is to complete interior and exterior renovations, increase the asking rents and rebrand and remarket. We believe that after the completion of the necessary upgrades rents can be increased by an average of $92 per unit as well as fundamentally serve as a comfortable living establishment for tenants.  The building will thrive under the expertise of our property management company (JSDA Property Management)."
          />
          );
        break;
      case "THE_NEIGHBORHOOD":
        return (
          <Content
            title = "THE NEIGHBORHOOD"
            content_1 = "The subject property is located in the southwest suburbs of Detroit.  (DDOT), which is the largest bus transit carrier in Michigan has 44 fixed route bus lines offering services to Detroit and its 23 surrounding communities.  Through a coalition of some of Detroit’s largest employers, worldwide investors, as well as passionate and driven city leaders, Detroit’s revival has become an unprecedented success story bound to make history. The buzz and excitement generated by Detroit’s “Live Downtown”, has attracted thousands of new residents that are seeking housing in the Detroit area, which are sending apartment rents soaring and vacancy rates to historic lows. The city has been reborn with passionate entrepreneurs, determined to not only make their new start-ups succeed, but Detroit succeed as a whole as well. Detroit has the “cool factor” again, with fresh college grads and young people flocking to the city with excitement. And according to Quicken Loans founder Dan Gilbert, who invested $2.2 billion, purchased 95 buildings, and moved 15,000 employees downtown, the sizzle is just beginning.  The significant developments occurring in the area coupled with the property's access to transit make this an ideal investment to capitalize on the area's momentum."
          />
        );
        break;
      default:
        return <div></div>
    }
  }

  handleClick = event => {
    switch (event.target.innerText) {
      case "EXECUTIVE SUMMARY":
        this.setState({ content: "EXECUTIVE_SUMMARY" });
        break;
      case "ABOUT THIS PROPERTY":
        this.setState({ content: "ABOUT_THIS_PROPERTY" });
        break;
      case "OPPORTUNITY AND BUSINESS PLAN":
        this.setState({ content: "OPPORTUNITY_AND_BUSINESS_PLAN" });
        break;
      case "THE NEIGHBORHOOD":
        this.setState({ content: "THE_NEIGHBORHOOD" });
        break;
      default:
        this.setState({ content: "" });
    }
  }

  render() {
    const imgURL = '/img/ecorse/ec2.jpg';
    const description = "4471 & 4581 High Street"
    const title = "Ecorse, MI"

    return (
      <div>
        <PageHeader height="320px" title={title} bgPos='800px -430px' description={description} img={imgURL} />
        <section className="py-3">
          <div className="container-fluid">

            <div className="row justify-content-between">
              <div className="col-12 col-md-3 mt-4">
                {/* building stats */}
                <StickyBox style={{marginTop: '-100px',paddingTop: '100px'}}>
                  <div className="card">
                    <div className="card-header">
                      <span className="h6">Navigation</span>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item list-group-item-action">
                        <div
                          id="content_1"
                          className="d-flex justify-content-between"
                          onClick={this.handleClick}
                        >
                          EXECUTIVE SUMMARY
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        <div
                          id="content_2"
                          className="d-flex justify-content-between"
                          onClick={this.handleClick}
                        >
                          ABOUT THIS PROPERTY
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        <div
                          id="content_3"
                          className="d-flex justify-content-between"
                          onClick={this.handleClick}
                        >
                          OPPORTUNITY AND BUSINESS PLAN
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        <div
                          id="content_4"
                          className="d-flex justify-content-between"
                          onClick={this.handleClick}
                        >
                          THE NEIGHBORHOOD
                        </div>
                      </li>
                    </ul>
                  </div>
                </StickyBox>
              </div>
              {/* main body section */}
              <div className="col-12 col-md-6 mt-4">
                <article>
                  {this.renderData()}
                </article>

                <hr />
                <small>
                  This material does not constitute an offer or a solicitation to purchase securities. An offer can only be made by the private placement memorandum. This document is an informational summary and is authorized for use only by sophisticated investors with an existing relationship with Limitless Estates, LLC and have been accepted as qualified and sophisticated investors by virtue of their experience and financial circumstance.
                </small>
                <hr />
                <small className="text-muted">
                  This information is authorized for use only by a limited number of persons with an existing relationship with Limitless Estates, LLC and who have been qualified and accepted as sophisticated investors by Limitless Estates, LLC, by furnishing proof of extensive investment experience. Neither the Securities and Exchange Commission nor any state securities commission has approved or disapproved of the real estate interests in this property package, or passed upon the adequacy or accuracy of this document. Any representation to the contrary is a criminal offense.
                </small>
                <hr />
                <h5 className="mb-4">Sound like the right investment for you?</h5>
                <form className="d-flex justify-content-between align-items-center">
                  <div>
                    <Link to="/applyNow"><button className="btn btn-success">Contact Us</button></Link>
                  </div>
                  <div>
                    <Link to="/markets">Back To Markets</Link>
                  </div>
                </form>
              </div>
              {/* SideBar */}
              <div className="col-12 col-md-3 mt-4">
                <StickyBox style={{marginTop: '-100px',paddingTop: '100px'}}>

                  {/* Financial Data */}
                  <div className="mb-3" id="mapbox" style={{ height: "30vh", width: "100%" }}></div>
                  <div className="card">
                    <div className="card-header">
                      <span className="h6">Financial Reports</span>
                    </div>
                    <div className="list-group list-group-flush">
                      <a className="list-group-item d-flex justify-content-between" data-toggle="modal" href="#acquisition">
                        <span>Acquisition Summary</span>
                        <i style={{ fontSize: '24px' }} className="far fa-file-alt"></i>
                      </a>
                      <a className="list-group-item d-flex justify-content-between" data-toggle="modal" href="#profit-loss">
                        <span>5 Year Profit & Loss Projection</span>
                        <i style={{ fontSize: '24px' }} className="far fa-file-alt"></i>
                      </a>
                      <a className="list-group-item d-flex justify-content-between" data-toggle="modal" href="#inc-exp">
                        <span>Income And Expenses</span>
                        <i style={{ fontSize: '24px' }} className="far fa-file-alt"></i>
                      </a>
                      <a className="list-group-item d-flex justify-content-between" data-toggle="modal" href="#equity-return">
                        <span>Equity Return At Resale</span>
                        <i style={{ fontSize: '24px' }} className="far fa-file-alt"></i>
                      </a>
                      <a className="list-group-item d-flex justify-content-between" data-toggle="modal" href="#rentroll">
                        <span>Rent Roll</span>
                        <i style={{ fontSize: '24px' }} className="far fa-file-alt"></i>
                      </a>
                    </div>
                  </div>
                </StickyBox>
              </div>
              {/* Modal Registration Below */}

            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Ecorse;
