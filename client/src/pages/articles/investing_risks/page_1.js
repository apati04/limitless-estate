import React, { Component } from 'react';
import Article from '../../../components/templates/Article';
import { NavLink } from 'react-router-dom';
class RisksWithInvesting extends Component {
  state = {
    numPages: null,
    pageNumber: 1
  };
  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  };
  renderPost = risk => {
    console.log(risk);
  };
  render() {
    return (
      <div className="rgba-blue-grey-slight">
        <div data-wow-delay="1s" className="animated fadeIn">
          <Article
            headerImage="https://i.imgur.com/zneMI2U.jpg"
            pattern=""
            overlayText=""
            title="Risks with Investing in Real Estate"
            circleImage="https://i.imgur.com/uDTyJkf.jpg"
            body={[
              <p key="1">
                Investing in real estate along with any type of investing
                involves significant risk, including the risk that you could
                lose some or all of your money. This section describes some of
                the most significant risk factors affecting the investment and
                its Investors. These factors are not intended to deter you from
                investing in real estate, rather educate you on the many factors
                at play when doing so.
              </p>,
              <p key="2">
                <strong className="font-italic">Speculative Nature:</strong> Time
                has shown that the real estate market goes down without warning,
                sometimes resulting in significant losses. Some of the risks of
                investing in real estate include changing laws, including
                environmental laws; floods, fires, and other Acts of God, some
                of which can be uninsurable; changes in national or local
                economic conditions; changes in government policies, including
                changes in interest rates established by the Federal Reserve;
                and international crises. You should invest in real estate in
                general, only if you can afford to lose your investment and are
                willing to live with the ups and downs of the real estate
                industry.
              </p>,
              <p key="3">
                <strong className="font-italic">
                  Illiquidity of Real Estate:
                </strong>{' '}
                Real estate is generally illiquid, meaning that it is not
                typically capable of being readily sold for cash at fair market
                value. Thus, the investment might not be able to sell properties
                as quickly or on the terms that it would like. We might be
                required to expend significant amounts of money to correct
                defects or make improvements before a property can be sold.
                Moreover, the overall economic conditions that might cause the
                Fund to want to sell properties are generally the same as those
                in which it would be most difficult to sell.
              </p>,
              <p key="4">
                <strong className="font-italic">
                  No Guarantee of Distributions:{' '}
                </strong>{' '}
                The ability to make the distributions you expect, and ultimately
                to give you your money back, depends on a number of factors,
                including some beyond its control.
              </p>,
              <p key="5">
                <strong className="font-italic">
                  Inability to Participate in the Management of the investment:
                </strong>{' '}
                As an Investor, you will not have a right to vote or otherwise
                participate in managing the investment, except on very limited
                matters. Instead, the Manager will make all decisions, including
                investment decisions. Investors will have the right to remove
                the Manager only in very limited circumstances.
              </p>,
              <p key="6">
                <strong className="font-italic">
                  Property Values Could Decrease:
                </strong>{' '}
                Factors that could cause the value of our property to decline
                include, but are not limited to: Changes in interest rates;
                Competition from existing properties and new construction;
                Changes in national or local economic conditions; Changes in
                zoning; Environmental contamination or liabilities; Changes in
                local market conditions; Fires, floods, and other casualties;
                Uninsured losses; Undisclosed defects in property.
              </p>,
              <div key="7">
                <p>
                  <strong className="font-italic">
                    Ability to Attract and/or Retain Tenants:
                  </strong>{' '}
                  Our success depends on our ability to attract and retain
                  tenants in our properties. The risks we face include the
                  following:
                </p>
                <ul>
                  <li key="7a">
                    Competition from other landlords could keep us from raising
                    rents, or require us to provide financial or other
                    inducements or concessions to attract tenants (g., rent
                    concessions or costs incurred for tenant improvements).
                  </li>
                  <li key="7b">
                    Changes in economic conditions generally could reduce demand
                    for our properties.
                  </li>
                  <li key="7c">
                    Existing tenants might not renew their leases.
                  </li>
                  <li key="7d">
                    Portions of buildings could remain vacant for extended
                    periods.
                  </li>
                  <li key="7e">
                    We are subject to the risk that our tenants may default on
                    their obligations, or file for bankruptcy protection.
                  </li>
                </ul>
              </div>,
              <p key="8">
                <strong className="font-italic">Operating Expenses:</strong> The
                costs of operating real estate – including taxes, insurance,
                utilities, and maintenance – tend to move up over time. We have
                limited control over some of our operating costs, and if our
                costs increase it may reduce the amount available for
                distribution to investors.
              </p>,
              <p key="9">
                <strong className="font-italic">
                  Reliance on Third Parties:{' '}
                </strong>
                If a third party on-site property management and construction
                performs poorly or becomes unable to fulfill its obligations,
                the business could be severely disrupted and our financial
                condition could be adversely affected. Disputes between us and
                our third party service providers could disrupt our business and
                may result in litigation or other forms of legal proceedings.
              </p>
            ]}
            pageFooter={
              <div className="container row">
                <div className="col-auto d-flex flex-center">
                  <p className="text-center align-self-center">Page 1 of 2</p>
                  <NavLink className="ml-2" to={`/resources/investingrisks/2`}>
                    <i className="material-icons">arrow_forward</i>
                  </NavLink>
                </div>
              </div>
            }
          />
        </div>
      </div>
    );
  }
}

export default RisksWithInvesting;
