import React from 'react';
import FormatDate from '../FormatDate/FormatDate';
import CalendarDay from '../../components/Events/calendarDay';
const EventListItem = props => {
  return (
    <div className="col">
      <div
        style={{ display: 'flex' }}
        className="w-100 justify-content-between"
      >
        <CalendarDay dateTime={props.time} />
        <div className="text-right">
          <h4 className="h4-responsive mb-1">
            <FormatDate meetupTimeStamp={props.time} />
          </h4>

          <small className="text-muted">
            <span>
              <i className="far fa-user mr-1" />
            </span>Attending: {props.yesRsvp}
          </small>

          <small className="text-muted">{props.meetupTime}</small>
          <div>
            <a
              role="button"
              className="btn btn-sm btn-primary m-0"
              rel="noopener noreferrer"
              target="_blank"
              href={props.link}
            >
              Join Meetup
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventListItem;
// props rsvpLimit, yesRsvp, link,time
