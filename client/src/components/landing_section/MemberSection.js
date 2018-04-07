import React, { Component } from 'react';

import Advisors from '../../api/advisors';
import Team from '../../api/team';
import MemberCard from '../MemberCard';
import { NavLink, Link } from 'react-router-dom';
import { Button, Popover, PopoverBody, PopoverHeader, Fa } from 'mdbreact';
class MemberSection extends Component {
  renderCards = items => {
    return items.map((person, i) => {
      const content = person.content || person.resume;
      const firstname = person.name.split(' ')[0].toLowerCase();
      return (
        <MemberCard key={person + i} {...person}>
          {person.type === 'Team' ? (
            <div className="col-md-12 mt-2">
              <img
                style={{ border: '2px solid lightgrey' }}
                className="mr-2 mb-1 rounded-circle"
                src={person.photo.url}
                alt="Generic placeholder"
                width={person.photo.size}
                height={person.photo.size}
              />
              <h3 className="h3-responsive p-0">{person.name}</h3>
              <p className="p-0 font-weight-bold">{person.title}</p>

              <NavLink
                className="btn btn-primary"
                to={`/members/about/${firstname}`}
              >
                Meet {firstname}
              </NavLink>
            </div>
          ) : (
            <div className="col-12 d-flex flex-column flex-center mt-2">
              <img
                style={{ border: '2px solid lightgrey' }}
                className="mb-1 rounded-circle"
                src={person.photo.url}
                alt="Generic placeholder"
                width={person.photo.size}
                height={person.photo.size}
              />
              <h3 className="h5-responsive m-0">{person.name}</h3>
              <Popover
                component="button"
                placement="right"
                popoverBody={<Fa style={{ fontSize: 1 + 'em' }} icon="info" />}
                className="btn btn-floating primary-color btn-small"
              >
                <PopoverHeader className="h6-responsive m-0 primary-color-dark text-center">
                  {person.name}, {person.type}
                </PopoverHeader>
                <PopoverBody>{person.content}</PopoverBody>
              </Popover>
            </div>
          )}
        </MemberCard>
      );
    });
  };
  render() {
    return (
      <section className="text-center">
        <div className="rgba-white-light p-2">
          <div className="container rgba-white-strong">
            <h1 className="h1-responsive team-header ">Meet the Team</h1>
            <hr />
            <div className="row d-flex justify-content-around align-items-baseline flex-wrap">
              {this.renderCards(Team)}
            </div>
          </div>
        </div>
        <div>
          <div className="h-100 p-2 mdb-color lighten-1">
            <div className="mb-5 container text-white">
              <h1 className="h1-responsive team-header">Our Advisors</h1>
              <hr />
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                {this.renderCards(Advisors)}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MemberSection;
