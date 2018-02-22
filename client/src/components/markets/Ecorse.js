import React from 'react';
import { Link } from 'react-router-dom'
import PageHeader from '../PageHeader';
import PageBox from '../PageBox';

const property_img = "/img/ecorse/image1.png";
const map_img = "/img/ecorse/image2.png";
const acquisition_img = "/img/ecorse/image3.png";
const rent_roll_img = "/img/ecorse/image4.png";
const income_expenses_img = "/img/ecorse/image5.png";
const financial_projection_img = "/img/ecorse/image6.png";
const equity_return_img = "/img/ecorse/image7.png";
const projected_cash_flow_img = "/img/ecorse/image8.png";

const Ecorse = () => {

  const imgURL = '/img/ecorse/ec2.jpg';
  const description = "Ecorse, MI"
  const title = "4471 & 4581 High Street"
  return (
    <div>
      <PageHeader title={title} bgPos='800px -430px' description={description} img={imgURL} />
      <section className="py-3">
        <div className="container">
          <div className="row justtify-content-between"></div>
        </div>
      </section>
    </div>
  )

}

export default Ecorse;