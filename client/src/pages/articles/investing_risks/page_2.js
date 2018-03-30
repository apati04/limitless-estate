import React, { Component } from 'react';
import Article from '../../../components/templates/Article';
import data from '../data/risks_p2';
import { NavLink } from 'react-router-dom';

export default class RisksTwoe extends Component {
  renderPage() {
    return data.map(({ title, body }, i) => {
      return (
        <p key={i}>
          <strong className="font-italic">{title}</strong> {body}
        </p>
      );
    });
  }
  render() {
    return (
      <div className="animated fadeIn rgba-blue-grey-slight">
        <Article
          headerImage="https://i.imgur.com/zneMI2U.jpg"
          pattern=""
          overlayText=""
          circleImage="https://i.imgur.com/uDTyJkf.jpg"
          body={this.renderPage()}
          pageFooter={
            <div classname="container row">
              <div className="col-auto d-flex flex-center">
                <NavLink className="mr-2" to={`/resources/investingrisks/1`}>
                  <i className="material-icons">arrow_back</i>
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
