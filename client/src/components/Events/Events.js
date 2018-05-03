import React, { Component } from 'react';
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2
} from 'react-html-parser';
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
        <div style={{ border: '1px dotted green', margin: '10px' }}>
          Time:
          <h5>{time}</h5>
        </div>

        <div style={{ border: '1px dotted green', margin: '10px' }}>
          Description:
          {ReactHtmlParser(description)}
        </div>
        <div style={{ border: '1px dotted green', margin: '10px' }}>
          How To Find Us:
          <p>{howToFindUs}</p>
        </div>
      </div>
    );
  }
}

export default Events;
