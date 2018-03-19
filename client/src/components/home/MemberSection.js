import React, { Component } from 'react';
import Advisors from '../../api/advisors';
import Team from '../../api/team';
import MemberCard from '../MemberCard';
import { Button } from 'mdbreact';
class MemberSection extends Component {
  renderCards = items => {
    return items.map(llcProps => {
      const { name, type } = llcProps;
      const content = llcProps.content || llcProps.resume;
      return (
        <MemberCard key={name} {...llcProps}>
          {type === 'Team' ? (
            <div className="mt-2">
              <h3 className="p-0">{name}</h3>
              <p className="p-0 font-weight-bold">{llcProps.title}</p>

              <a style={{ color: '#f7f7f7' }} target="_blank" href={content}>
                <Button color="indigo">View Bio >></Button>
              </a>
            </div>
          ) : (
            <div className="d-flex justify-content-center mt-2">
              <h5>{name}</h5>
              <a
                tabIndex="0"
                className="poppy popover-dismiss ml-2 info-popover"
                data-toggle="popover"
                data-trigger="focus"
                title={`${name}, ${type}`}
                data-content={`${content}`}
              >
                <i
                  style={{
                    fontSize: '24px',
                    color: '#f7f7f7',
                    opacity: '0.92'
                  }}
                  className="fas fa-info-circle"
                />
              </a>
            </div>
          )}
        </MemberCard>
      );
    });
  };
  render() {
    return (
      <section className="py-3 text-center text-white stylish-color">
        <div style={{ color: '#f7f7f7' }} className="container">
          <h1 className="display-4 font-weight-500 font-italic ">
            Meet the Team
          </h1>
          <hr />
          <div className="container d-flex justify-content-around flex-wrap">
            {this.renderCards(Team)}
          </div>
        </div>
      </section>
    );
  }
}

export default MemberSection;
