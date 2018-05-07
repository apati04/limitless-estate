import React from 'react';
import FormatDate from '../FormatDate/FormatDate';
import CalendarDay from '../../components/Events/calendarDay';
const EventListItem = props => {
  return (
    <div className="col-md-6 p-1">
      <div className="card bg-blue text-center">
        <div className="card-body">
          <div className="row align-items-stretch justify-content-start">
            <div className="col">
              <CalendarDay dateTime={props.time} />
            </div>
            <div className="col text-right">
              <h4 className="h4-responsive mb-1">
                <FormatDate meetupTimeStamp={props.time} />
              </h4>
              <div>
                <small className="text-muted">
                  <span>
                    <i className="far fa-user mr-1" />
                  </span>Attending: {props.yesRsvp}
                </small>
              </div>
              <a
                role="button"
                className="btn btn-sm btn-primary mr-0 "
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
