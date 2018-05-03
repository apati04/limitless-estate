import React from 'react';
import { ListGroup } from 'mdbreact';
import EventListItem from './eventListItem';
//
const EventList = ({ eventDetails }) => {
  console.log(eventDetails);
  let eventDetailList = eventDetails.map(
    ({ rsvp_limit, yes_rsvp_count, id, time, link }) => (
      <EventListItem
        rsvpLimit={rsvp_limit}
        yesRsvp={yes_rsvp_count}
        key={id}
        link={link}
        time={time}
      />
    )
  );
  return (
    <ListGroup style={{ border: '2px solid red' }}>{eventDetailList}</ListGroup>
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
