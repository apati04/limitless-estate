import React, { Component } from 'react';

import { CalendarIcon } from 'react-calendar-icon';
import EventList from './eventList';

class Events extends Component {
  render() {
    const { title, time, description, meetupArray, howToFindUs } = this.props;
    let eventList;
    if (Array.isArray(meetupArray)) {
      eventList = <EventList meetupTime={time} eventDetails={meetupArray} />;
    }

    return <div>{eventList}</div>;
  }
}

export default Events;
