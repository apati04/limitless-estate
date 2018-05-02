import React, { Component, Fragment } from 'react';
import Moment from 'react-moment';

export default props => {
  const meetupDate = new Date(1525829400000);
  return (
    <Fragment>
      <Moment format="dddd, MMMM Do YYYY, h:mm a">{meetupDate}</Moment> to{' '}
      <Moment add={{ hours: 2 }} format="h:mm a">
        {meetupDate}
      </Moment>
    </Fragment>
  );
};
