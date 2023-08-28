import React, { useEffect, useState } from 'react';
import './HomePage.scss'; // You can style this component using CSS
import Banner from '../assets/Supr-Skin-facebook-cover-double.jpg';
import Logo from '../assets/SuprSkin.png';
import axios from 'axios'


function Cart() {
  const [allProductInfo, setAllProductInfo] = useState();

//   useEffect(() => {
//     axios
//       .get(`http://localhost:8001/shop`)
//       .then((res) => {
//         console.log(res.data)
//         setAllProductInfo(res.data)
//       })
//       .catch((error) => {
//         console.error('Error fetching all product info:', error);
//       });
//   }, [])

  return (
    <div className="main-page">
        <div className='category-banner-holder'>
        <img src={Banner} alt="SuprSkin banner" className='banner' />
        <div className="center-overlay">
          <p>cart</p>
        </div>
      </div>
    </div>
  );
}

export default Cart;