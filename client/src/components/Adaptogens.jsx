import { Link } from 'react-router-dom';
import React from 'react';
import './HomePage.scss'; // You can style this component using CSS
import Banner from '../assets/Supr-Skin-facebook-cover-double.jpg';
import Logo from '../assets/SuprSkin.png';
import CategoryIcon from './CategoryIcon';

function Adaptogens() {
  return (
    <div className="main-page">
      <div className='category-banner-holder'>
        <img src={Banner} alt="SuprSkin banner" className='banner' />
        <div className="center-overlay">
          <p>adaptogens</p>
        </div>
      </div>
    
    </div>
  );
}

export default Adaptogens;
