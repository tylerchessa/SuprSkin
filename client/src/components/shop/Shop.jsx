import React, { useEffect, useState } from 'react';
import './Shop.scss'; // You can style this component using CSS
import Banner from '../../assets/Supr-Skin-facebook-cover-double.jpg';
import Logo from '../../assets/SuprSkin.png';
import axios from 'axios'

const allRegimens = [
  {
    title: 'Ashwaghanda Regimen',
    products: ['Ashwaghanda Serum', 'Ashwaghanda Scrub', 'Ashwaghanda Tea']
  },
  {
    title: 'Gotukola Regimen',
    products: ['Gotukola Serum', 'Gotukola Scrub', 'Gotukola Tea']
  }
];


function Shop() {
  const [allProductInfo, setAllProductInfo] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:8001/shop`)
      .then((res) => {
        console.log(res.data)
        setAllProductInfo(res.data)
      })
      .catch((error) => {
        console.error('Error fetching all product info:', error);
      });
  }, [])

  return (
    <div className="main-page">
        <div>    
            
        </div>
    </div>
  );
}

export default Shop;