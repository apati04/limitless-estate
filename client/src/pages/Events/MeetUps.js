import React, { Component } from 'react';
import FormatDate from '../../components/FormatDate/FormatDate';
import Moment from 'react-moment';
import axios from 'axios';
class MeetUps extends Component {
  state = { meetups: null };
  componentDidMount() {
    axios.get('/api/events/meetups').then(({ data }) => {
      const filterData = data
        .filter(({ name, fee }) => {
          return (
            name ===
            'Out of State Apartment Investing Mastermind - Long Beach Chapter'
          );
        })
        .slice(0, 3);
      this.setState({ meetups: filterData });
    });
  }
  renderMeetups = () => {
    const { meetups, max } = this.state;
    if (Array.isArray(meetups)) {
      return meetups.map((el, index) => (
        <div key={index}>
          <FormatDate meetupTimeStamp={el.time} />
        </div>
      ));
    }
    return <div>Loading...</div>;
  };
  render() {
    let meetupName = '';
    let meetupTime = '';
    if (this.state.meetups) {
      meetupName = this.state.meetups[0].name;
      meetupTime = (
        <div>
          <Moment format="h:mm a">{this.state.meetups[0].time}</Moment> to{' '}
          <Moment add={{ hours: 2 }} format="h:mm a">
            {this.state.meetups[0].time}
          </Moment>
        </div>
      );
    }
    return (
      <div>
        <h2>{meetupName}</h2>
        {this.renderMeetups()}
        {meetupTime}
      </div>
    );
  }
}

export default MeetUps;
/**
 * <time datetime="1525829400000"><span class="eventTimeDisplay-startDate"><span>Tuesday, May 8, 2018</span><br><span class="eventTimeDisplay-startDate-time"><span>6:30 PM</span></span></span><span class="eventTimeDisplay-endDate"> <span>to <span class="eventTimeDisplay-endDate-partialTime"><span>8:30 PM</span></span></span></span></time>
 */

/**
  *     <Fragment>
      <Moment format="dddd, MMMM Do YYYY, h:mm a">{meetupDate}</Moment> to{' '}
      <Moment add={{ hours: 2 }} format="h:mm a">
        {meetupDate}
      </Moment>
    </Fragment>
  */
