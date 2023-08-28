import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CategoryPage.scss'; // You can style this component using CSS
import Banner from '../assets/Supr-Skin-facebook-cover-double.jpg';
import Logo from '../assets/SuprSkin.png';
import axios from 'axios'
import ProductIcon from './ProductIcon';

function CategoryPage() {
  const { category } = useParams();
  const [allCategoryProductInfo, setAllCategoryProductInfo] = useState();

  useEffect(() => {
    if (category) {
      const formattedCategory = category.replace(/-/g, ' ');
    axios
      .get(`http://localhost:8001/shop/${formattedCategory}`)
      .then((res) => {
        console.log(res.data)
        setAllCategoryProductInfo(res.data)
      })
      .catch((error) => {
        console.error('Error fetching all product info:', error);
      });
    }
    }, [category]);

  console.log(allCategoryProductInfo)

  return (
    <div className="main-page">
      <div className='category-banner-holder'>
        <img src={Banner} alt="SuprSkin banner" className='banner' />
        <div className="category-center-overlay">
          <img src={Logo} className='category-banner-img'></img>
        </div>
        </div>
        <div className="products-holder">
        {allCategoryProductInfo && allCategoryProductInfo.map(product => {
          return <ProductIcon title={product.name}/>
        })}
        </div>

    </div>
  );
}

export default CategoryPage;