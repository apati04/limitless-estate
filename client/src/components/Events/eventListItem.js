import React from 'react';
import { ListGroupItem } from 'mdbreact';
import FormatDate from '../FormatDate/FormatDate';

const EventListItem = props => {
  return (
    <ListGroupItem>
      <div
        style={{ display: 'flex' }}
        className="w-100 justify-content-between"
      >
        <h5 className="mb-1">
          <FormatDate meetupTimeStamp={props.time} />
        </h5>
      </div>

      <div>Spots Left: {props.rsvpLimit - props.yesRsvp}</div>
      <div>Going: {props.yesRsvp}</div>
      <div>
        <a rel="noopener noreferrer" target="_blank" href={props.link}>
          Sign up
        </a>
      </div>
    </ListGroupItem>
  );
};

export default EventListItem;
// props rsvpLimit, yesRsvp, link,time
