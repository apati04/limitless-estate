import React, { Component } from 'react';
import PageTemplate from '../components/templates/PageTemplate';
import {nuView} from '../api/nuView';

export default class SupportCo extends Component {
  renderInfo() {
    const { name, phone, address, email, website, misc } = nuView;
    return [
      <h3 classname="lead">{name}</h3>,
      <div>{phone}</div>,
      <div>{address.street}</div>,
      <div>{address.city}, {address.state} {address.zipcode}</div>,
      <div>{email}</div>,
      <div>
      <a href={website}>wwww.nuviewtrust.com</a>        
      </div>
    ]
  }
  render() {
    const {name} = nuView;
    return(
    <section style={{height: '100vh'}}>
      <PageTemplate heading='Additional Information' subtitle='' mainText={this.renderInfo()}/>
    </section>
    )
  }
}
