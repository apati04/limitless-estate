import React, { Component } from 'react';
import Article from '../../components/templates/Article';
class RisksWithInvesting extends Component {
  renderPost = risk => {
    console.log(risk);
  };
  render() {
    return (
      <div>
        <Article
          headerImage="https://i.imgur.com/zneMI2U.jpg"
          pattern=""
          overlayText=""
          title="Risks with Investing in Real Estate"
          circleImage=""
          body={[
            <p>
              Investing in real estate along with any type of investing involves
              significant risk, including the risk that you could lose some or
              all of your money. This section describes some of the most
              significant risk factors affecting the investment and its
              Investors. These factors are not intended to deter you from
              investing in real estate, rather educate you on the many factors
              at play when doing so.
            </p>,
            <p>
              <strong className="font-italic">Speculative Nature:</strong> Time
              has shown that the real estate market goes down without warning,
              sometimes resulting in significant losses. Some of the risks of
              investing in real estate include changing laws, including
              environmental laws; floods, fires, and other Acts of God, some of
              which can be uninsurable; changes in national or local economic
              conditions; changes in government policies, including changes in
              interest rates established by the Federal Reserve; and
              international crises. You should invest in real estate in general,
              only if you can afford to lose your investment and are willing to
              live with the ups and downs of the real estate industry.
            </p>
          ]}
        />
      </div>
    );
  }
}

export default RisksWithInvesting;
