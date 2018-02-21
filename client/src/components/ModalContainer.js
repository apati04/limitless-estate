import React, { Component } from 'react';

class ModalContainer extends Component {
  renderModal() {
    return this.props.children
        .map(({props: {modalID, modalTitle, imgSrc} }) => { 
          return (

          )
        );
  }
  render() {
    // const {modalID, modalTitle, imgSrc} = this.props.children.props;
    console.log('child: ', this.props.children)
    return (
      <div className="list-group list-group-flush">
        {this.renderModal()}
        {/* {this.props.children}
       */}
      </div>
    )
  }
}
export default ModalContainer;

