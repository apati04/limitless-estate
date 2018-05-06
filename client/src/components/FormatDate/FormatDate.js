import React, { Component, Fragment } from 'react';
import Moment from 'react-moment';

export default ({ meetupTimeStamp }) => {
  const meetupDate = new Date(meetupTimeStamp);
  return (
    <Fragment>
      <Moment format="MMM Do">{meetupDate}</Moment>
    </Fragment>
  );
};
