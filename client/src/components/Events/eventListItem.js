import React from 'react';
import FormatDate from '../FormatDate/FormatDate';
import CalendarDay from '../../components/Events/calendarDay';
const EventListItem = props => {
  return (
    <div className="col-md-6 p-1">
      <div className="card bg-blue text-center">
        <div className="card-body">
          <div className="row flex-sm-row flex-column  flex-center">
            <div className="col-auto">
              <CalendarDay dateTime={props.time} />
            </div>
            <div className="col-auto">
              <h4 className="h4-responsive mb-1">
                <FormatDate meetupTimeStamp={props.time} />
              </h4>
              <small className="text-muted">
                <span>
                  <i className="far fa-user mr-1" />
                </span>Attending: {props.yesRsvp}
              </small>

              <small className="text-muted">{props.meetupTime}</small>

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
    </div>
  );
};

export default EventListItem;
// props rsvpLimit, yesRsvp, link,time
