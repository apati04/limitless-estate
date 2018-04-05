import React, { Component } from 'react';
import FadeIn from '../FadeIn';
import Advisors from '../../api/advisors';
import Team from '../../api/team';
import MemberCard from '../MemberCard';
import { Button, Popover, PopoverBody, PopoverHeader, Fa } from 'mdbreact';
class MemberSection extends Component {
  renderCards = items => {
    return items.map(person => {
      const content = person.content || person.resume;

      return (
        <FadeIn>
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

                <a
                  style={{ color: '#f7f7f7' }}
                  target="_blank"
                  rel="noopener"
                  href={content}
                >
                  <Button color="primary">View Bio >></Button>
                </a>
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
                <div className="d-inline-flex justify-content-end align-items-center flex-nowrap text-nowrap ml-auto">
                  <h3 className="h5-responsive m-0">{person.name}</h3>
                  <Popover
                    component="button"
                    placement="right"
                    popoverBody={<Fa icon="info" />}
                    className="btn btn-floating primary-color pr-0 btn-small"
                  >
                    <PopoverHeader className="primary-color-dark text-center">
                      {person.name}, {person.type}
                    </PopoverHeader>
                    <PopoverBody>{person.content}</PopoverBody>
                  </Popover>
                </div>
              </div>
            )}
          </MemberCard>
        </FadeIn>
      );
    });
  };
  render() {
    return (
      <section className="text-center">
        <div className="rgba-white-light">
          <div className="p-5 container rgba-white-strong">
            <h1 className="display-4 team-header ">Meet the Team</h1>
            <hr />
            <div className="row d-flex justify-content-around align-items-baseline flex-wrap">
              {this.renderCards(Team)}
            </div>
          </div>
        </div>
        <div>
          <div className="h-100 mdb-color lighten-1">
            <div className="mb-5 p-5 container text-white">
              <h1 className="display-4 team-header">Our Advisors</h1>
              <hr />
              <div className="row flex-lg-nowrap justify-content-center">
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
