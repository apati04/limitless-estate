import React, { Fragment } from 'react';

const meetupDescription = () => {
  return (
    <Fragment>
      <p>
        {' '}
        This group is for any interested in investing in out-of-state
        multifamily apartments.
      </p>
      <p>
        Are you interested in the financial power of multifamily real estate?
        Are you new to Real Estate investing but don’t know how to start? Are
        you an experienced investor with properties in LA but aren’t getting the
        returns you desire? Are you interested in cash flow, value-add
        properties, and opportunities outside of CA? Are you an investor and
        looking for alternative ways to make money? Are you an action taker
        looking for your next apartment deal? If so come join us. We invest in
        apartments in markets that simply make sense (or dollars!). Apartment
        investing is a team sport. So come join the best team in LA.
      </p>
      <p>
        We hold monthly meetups across the LA area. Locations and times include
      </p>
      <ul className="list-unstyled p-0">
        <li key="meetup-0">West LA: 1st week of the month</li>
        <li key="meetup-1">Long Beach / Lakewood: 2nd week of the month</li>
        <li key="meetup-2">South Bay: 3rd week of the month</li>
      </ul>
      <p>
        Day and times vary by location. For the most up to date schedule and
        venue please visit this page. Hope to see you all there!
      </p>
    </Fragment>
  );
};

export default meetupDescription;
