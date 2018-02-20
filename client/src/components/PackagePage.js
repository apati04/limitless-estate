import React, { Component } from 'react';
import PageHeader from './PageHeader';

class PackagePage extends Component {
  render() {
    const imgURL = 'https://cdn.pixabay.com/photo/2016/10/22/01/54/wood-1759566_960_720.jpg';
    const description = "optional info"
    const title = "Packages"
    return (
      <div>
        <PageHeader title={title} description={description} img={imgURL} />
      </div>
    )
  }
}

export default PackagePage;