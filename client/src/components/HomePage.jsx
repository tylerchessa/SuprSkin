import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './HomePage.scss'; // You can style this component using CSS
import Banner from '../assets/Supr-Skin-facebook-cover-double.jpg';
import Logo from '../assets/SuprSkin.png';
import CategoryIcon from './shop/CategoryIcon';
import axios from 'axios';

function HomePage() {
  const [categories, setCategories] = useState([])
  const [productInfo, setProductInfo] = useState();

useEffect(() => {
  axios
  .get('http://localhost:8001/categories/all')
  .then((res) => {
    console.log(res.data)
    setCategories(res.data)
  })
  .catch((error) => {
    console.error('Error fetching product info:', error);
  });
}, [])

  return (
    <div className="main-page">
      <div className='banner-holder'>
        <img src={Banner} alt="SuprSkin banner" className='banner' />
      </div>
      <div className="categories-holder">
      {categories.map(category => {
    return <CategoryIcon key={category.id} title={category.name} />;
  })}
        {/* <CategoryIcon title='Skin Care' />
        <CategoryIcon title='Skin Scrub' />
        <CategoryIcon title='Accessories' />
        <CategoryIcon title='tea' />
        <CategoryIcon title='Capsules' /> */}
      </div>
      <div className="banner-holder-2">
        <img src={Banner} alt="SuprSkin banner" className='banner' />
        <div className="center-overlay">
          <Link to="/regimen">Find your regimen</Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
