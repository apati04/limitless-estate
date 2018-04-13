import React, { Component } from 'react';
import Article from '../../../components/templates/Article';
import data from '../data/risks_p2';
import { NavLink } from 'react-router-dom';

export default class RisksTwoe extends Component {
  renderPage() {
    return data.map(({ title, body }, i) => {
      return (
        <p key={i}>
          <strong>{title}</strong>
          {body}
        </p>
      );
    });
  }
  render() {
    return (
      <div style={{ height: '100%' }} className="animated fadeIn">
        <Article
          headerImage="https://i.imgur.com/zneMI2U.jpg"
          pattern=""
          overlayText=""
          body={this.renderPage()}
          pageFooter={
            <div classname="container row">
              <div className="col-12 d-flex flex-center">
                <NavLink className="mr-2" to={`/resources/investingrisks/1`}>
                  <i
                    style={{ fontSize: 1 + 'em' }}
                    className="fas fa-arrow-left"
                  />
                </NavLink>{' '}
                <p className="text-center">Page 2 of 2</p>
              </div>
            </div>
          }
        />
      </div>
    );
  }
}
