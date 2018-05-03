import React, { Component } from 'react';

import { CalendarIcon } from 'react-calendar-icon';
import EventList from './eventList';

class Events extends Component {
  render() {
    const { title, time, description, meetupArray, howToFindUs } = this.props;
    let eventList;
    if (Array.isArray(meetupArray)) {
      eventList = <EventList eventDetails={meetupArray} />;
    }

    return (
      <div>
        <h5>{title}</h5>
        <div style={{ border: '1px dotted green', margin: '10px' }}>
          Upcoming Events: {eventList}
        </div>
      </div>
    );
  }
}

export default Events;
