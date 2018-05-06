import React from 'react';
import { ListGroup } from 'mdbreact';
import EventListItem from './eventListItem';
//
const EventList = ({ eventDetails, meetupTime }) => {
  console.log(eventDetails);
  let eventDetailList = eventDetails.map(
    ({ rsvp_limit, yes_rsvp_count, id, time, link }) => (
      <EventListItem
        rsvpLimit={rsvp_limit}
        yesRsvp={yes_rsvp_count}
        key={id}
        link={link}
        time={time}
        meetupTime={meetupTime}
      />
    )
  );
  return (
    <ListGroup>
      <div className="row justify-content-around">{eventDetailList}</div>
    </ListGroup>
  );
};

export default EventList;
// renderMeetups = () => {
//   const { meetupArray } = this.props;
//   if (Array.isArray(meetupArray)) {
//     return meetupArray.map((el, index) => (
//       <div key={index}>
//         <FormatDate meetupTimeStamp={el.time} />
//       </div>
//     ));
//   }
//   return <div>Loading...</div>;
// };
