import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductIcon.scss'; // You can style this component using CSS
import Banner from '../../assets/Supr-Skin-facebook-cover-double.jpg';
import Logo from '../../assets/SuprSkin.png';
import axios from 'axios'

function ProductIcon({title, id}) {
    const navigate = useNavigate();

  const handleProductClick = () => {
    const lowercaseTitle =  title.toLowerCase() // Convert to lowercase
    const formattedTitle = lowercaseTitle.replace(/\s+/g, '-');
    navigate(`/shop/product/${formattedTitle}`);
  }

  return (
    <div className='product-holder' onClick={handleProductClick}>
    <img className='product-img' src={Logo} alt={title}></img>
    <h4>{title}</h4>
  </div>
  );
}

export default ProductIcon;
