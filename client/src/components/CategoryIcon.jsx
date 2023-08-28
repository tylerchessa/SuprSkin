import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CategoryIcon.scss'; // You can style this component using CSS
import Banner from '../assets/Supr-Skin-facebook-cover-double.jpg';
import Logo from '../assets/SuprSkin.png';
import axios from 'axios'

function CategoryIcon({title, id}) {
    const navigate = useNavigate();

  const handleCategoryClick = () => {
    const lowercaseTitle =  title.toLowerCase() // Convert to lowercase
    const formattedTitle = lowercaseTitle.replace(/\s+/g, '-');
    navigate(`/shop/${formattedTitle}`);
  }

  return (
    <div className='category-holder' onClick={handleCategoryClick}>
    <img className='category-img' src={Logo} alt={title}></img>
    <h4>{title}</h4>
  </div>
  );
}

export default CategoryIcon;
