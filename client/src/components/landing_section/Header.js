import '../../style/blog.css';
import React, { Component } from 'react';
import { View, Mask, Button } from 'mdbreact';
import { NavLink } from 'react-router-dom';
export default class HeaderSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }
  render() {
    return (
      <View className="hm-blue-slight">
        <img
          className="img-fluid w-100"
          src="https://static1.squarespace.com/static/59de45142994cabf2c18b636/t/59f282b8652deaab9521c562/1509065425627/ebs-home.png"
          alt=""
        />
        <Mask className="d-flex full-bg-img flex-center ">
          <div className="d-flex container justify-content-between text-left white-text wow fadeInUp">
            <div>
              <h3>
                Our vision at Limitless Estates is to provide A class living to
                lower income housing by putting our residents first and
                instilling a sense of community while inspiring others to do the
                same.
              </h3>
            </div>
            <div>
              <h3>
                Our mission is to positively impact the lives of the people in
                our local neighborhoods through impact investing (hyperlink to
                our article on impact investing) while achieving double digit
                returns for our investors.
              </h3>
              <Button className="text-right" color="mdb">
                Make An Impact
              </Button>
            </div>
          </div>
        </Mask>
      </View>
    );
  }
}
// https://images.pexels.com/photos/936713/pexels-photo-936713.jpeg
// https://static1.squarespace.com/static/59de45142994cabf2c18b636/t/59f282b8652deaab9521c562/1509065425627/ebs-home.png
// https://images.pexels.com/photos/936715/pexels-photo-936715.jpeg
