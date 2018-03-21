// import '../../style/blog.css';
import React, { Component } from 'react';
import { View, Mask, Button } from 'mdbreact';
import { NavLink } from 'react-router-dom';
import PicCarousel from '../PicCarousel';

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
      <View className="hm-stylish-slight">
        <PicCarousel/>
        <Mask className="d-flex full-bg-img flex-center ">
          <div className="d-flex container justify-content-around p-0 text-left white-text wow fadeInUp">
            <h1>Hello</h1>
          </div>
        </Mask>
      </View>
    );
  }
}
// https://images.pexels.com/photos/936713/pexels-photo-936713.jpeg
//

// https://static1.squarespace.com/static/59de45142994cabf2c18b636/t/59f282b8652deaab9521c562/1509065425627/ebs-home.png?format=1920w
/*
https://images.pexels.com/photos/7277/sunset-water-clouds-lake.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb


*/
{/* <div className="text-center">
  <h2 className="mb-4">
    Our <strong>vision</strong> at Limitless Estates is to provide A
    class living to lower income housing by putting our residents
    first and instilling a sense of community while inspiring others
    to do the same.
  </h2>

  <h2 className="mt-4 text-center">
    Our <strong>mission</strong> is to positively impact the lives
    of the people in our local neighborhoods through{' '}
    <NavLink
  style={{ color: 'bluegrey' }}
  to="/resources/impactinvesting"
    >
  impact investing
    </NavLink>{' '}
    while achieving double digit returns for our investors.
  </h2>
  <div className="text-center">
    <Button className="text-right" size="lg" color="primary">
  Make An Impact
    </Button>
  </div>
</div> */}
