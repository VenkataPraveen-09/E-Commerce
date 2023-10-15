import React from 'react';
import './Breadcrum.css';
import arrow_icon from '../Assests/breadcrum_arrow.png';

const Breadcrum = (props) => {
  const { product } = props; // Destructure the 'product' prop correctly

  return (
    <div className='breadcrum'>
      HOME <img src={arrow_icon} alt="arrow" /> SHOP <img src={arrow_icon} alt="arrow" /> {product.category} <img src={arrow_icon} alt="arrow" /> {product.name}
    </div>
  );
}

export default Breadcrum;
