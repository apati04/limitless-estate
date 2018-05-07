import React, { Component } from 'react';
import Events from '../../components/Events/Events';
import EventMap from '../../components/Events/EventMap';
import FormatDate from '../../components/FormatDate/FormatDate';
import { ListGroup, ListGroupItem } from 'mdbreact';
import Moment from 'react-moment';
import axios from 'axios';
class MeetUps extends Component {
  state = { meetups: null };
  componentDidMount() {
    axios.get('/api/events/meetups').then(({ data }) => {
      this.setState({ meetups: data });
    });
  }

  render() {
    let meetupName,
      meetupTime,
      meetupMap,
      meetupDescription,
      atVenueLocation,
      meetupVenue = '';
    console.log(meetupVenue);
    if (this.state.meetups) {
      const {
        time,
        description,
        venue,
        name,
        how_to_find_us
      } = this.state.meetups[0];
      meetupVenue = venue;
      atVenueLocation = how_to_find_us;
      meetupDescription = description;
      meetupMap = <EventMap meetupLocation={venue} />;
      meetupName = name.split('-').map((el, index) => (
        <h1 key={index + 'namestr'} className="h1-responsive">
          {el}
        </h1>
      ));
      meetupTime = (
        <div className="align-items-center">
          <i className="mr-1 far fa-clock" />
          <Moment format="h:mma">{time}</Moment> -{' '}
          <Moment add={{ hours: 2 }} format="h:mma">
            {time}
          </Moment>
        </div>
      );
    }
    return (
      <section>
        <div className="jumbotron">
          <div className="container">
            {meetupName}
            <p>
              This is a template for a simple marketing or informational
              website. It includes a large callout called a jumbotron and three
              supporting pieces of content. Use it as a starting point to create
              something more unique.
            </p>
            <p>
              <a className="btn btn-primary btn-lg" href="#" role="button">
                Learn more &raquo;
              </a>
            </p>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-between no-gutters">
            <div className="col col-md-8">
              <Events
                description={meetupDescription}
                time={meetupTime}
                howToFindUs={atVenueLocation}
                meetupArray={this.state.meetups}
              />
            </div>
            <div className="col col-md-4 px-2 w-100">
              <ListGroup>
                <ListGroupItem>
                  <div>
                    Time:
                    <h5>{meetupTime}</h5>
                    <h6>Every 2nd Tuesday of the Month</h6>
                  </div>
                </ListGroupItem>
                <ListGroupItem>
                  <div>
                    <h4>{meetupVenue.name}</h4>
                    <h5>{meetupVenue.address_1}</h5>
                    <h5>
                      {meetupVenue.city}, {meetupVenue.state}
                    </h5>
                  </div>
                </ListGroupItem>
                <ListGroupItem>
                  <div>
                    How To Find Us:
                    <p>{atVenueLocation}</p>
                  </div>
                </ListGroupItem>
                <ListGroupItem>{meetupMap}</ListGroupItem>
              </ListGroup>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MeetUps;
/**
 * <time datetime="1525829400000"><span class="eventTimeDisplay-startDate"><span>Tuesday, May 8, 2018</span><br><span class="eventTimeDisplay-startDate-time"><span>6:30 PM</span></span></span><span class="eventTimeDisplay-endDate"> <span>to <span class="eventTimeDisplay-endDate-partialTime"><span>8:30 PM</span></span></span></span></time>
 */

/**
  *     <Fragment>
      <Moment format="dddd, MMMM Do YYYY, h:mm a">{meetupDate}</Moment> to{' '}
      <Moment add={{ hours: 2 }} format="h:mm a">
        {meetupDate}
      </Moment>
    </Fragment>
  */
