import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CategoryIcon.scss'; // You can style this component using CSS
import Banner from '../../assets/Supr-Skin-facebook-cover-double.jpg';
import skin from '../../assets/SuprSkin.png';
import scrub from '../../assets/SuprScrub.png';
import tea from '../../assets/SuprTea.png';
import caps from '../../assets/SuprCaps.png';
import axios from 'axios'

function CategoryIcon({title, id}) {
    const navigate = useNavigate();
    let logo;

  const handleCategoryClick = () => {
    const lowercaseTitle =  title.toLowerCase() // Convert to lowercase
    const formattedTitle = lowercaseTitle.replace(/\s+/g, '-');
    navigate(`/shop/${formattedTitle}`);
  }


      if (id === 1) logo = skin;
      else if (id === 2) logo = scrub;
      else if (id === 3) logo = tea;
      else if (id === 4) logo = caps;
      else if (id === 5) logo = skin;
      else logo = skin;


  console.log(id)

  return (
    <div className='category-holder' onClick={handleCategoryClick}>
    <img className='category-img' src={logo} alt={title}></img>
    <h4>{title}</h4>
  </div>
  );
}

export default CategoryIcon;
