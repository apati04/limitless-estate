import React, { Component } from 'react';
import Advisors from '../../api/advisors';
import Advisors2 from '../../api/advisors2';
import Team from '../../api/team';
import MemberCard from '../MemberCard';
import { Button, Popover, PopoverBody, PopoverHeader, Fa } from 'mdbreact';
class MemberSection extends Component {
  renderCards = items => {
    return items.map(person => {
      const content = person.content || person.resume;
      console.log(person.photo);
      return (
        <MemberCard key={person.name} {...person}>
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

              <a style={{ color: '#f7f7f7' }} target="_blank" href={content}>
                <Button color="indigo">View Bio >></Button>
              </a>
            </div>
          ) : (
            <div className="row">
              <div className="col-md-12 justify-content-start mt-2">
                <img
                  style={{ border: '2px solid lightgrey' }}
                  className="mr-2 mb-1 align-self-start rounded-circle"
                  src={person.photo.url}
                  alt="Generic placeholder"
                  width={person.photo.size}
                  height={person.photo.size}
                />
                <div className="d-flex align-items-center justify-content-end">
                  <h3 className="h4-responsive">{person.name}</h3>
                  <Popover
                    component="button"
                    placement="left"
                    popoverBody={<Fa icon="info" />}
                    className="btn blue btn-floating btm-sm"
                  >
                    <PopoverHeader className="primary-color-dark text-center">
                      {person.name}, {person.type}
                    </PopoverHeader>
                    <PopoverBody>{person.content}</PopoverBody>
                  </Popover>
                </div>
              </div>
            </div>
          )}
        </MemberCard>
      );
    });
  };
  render() {
    return (
      <section className="py-2 text-center text-white stylish-color">
        <div style={{ color: '#f7f7f7' }} className="p-5 container">
          <h1 className="display-4 team-header ">Meet the Team</h1>
          <hr />
          <div className="row d-flex justify-content-around align-items-baseline flex-wrap">
            {this.renderCards(Team)}
          </div>
        </div>
        <div style={{ color: '#f7f7f7' }} className="mb-5 p-5 container">
          <h1 className="display-4 team-header">Our Advisors</h1>
          <hr />
          <div className="container d-flex justify-content-around flex-wrap">
            {this.renderCards(Advisors)}
          </div>
          <div className="container d-flex justify-content-around flex-wrap">
            {this.renderCards(Advisors2)}
          </div>
        </div>
      </section>
    );
  }
}

export default MemberSection;
