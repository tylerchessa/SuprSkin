import React, { Profiler, useEffect, useState } from 'react';
import './HomePage.scss'; // You can style this component using CSS
import Banner from '../assets/Supr-Skin-facebook-cover-double.jpg';
import Logo from '../assets/SuprSkin.png';
import axios from 'axios'
import { useParams } from 'react-router-dom';

function ProductPage() {
  const { product } = useParams();
  const [productInfo, setProductInfo] = useState();

  useEffect(() => {
    if (product) {
    const formattedProduct = product.replace(/-/g, ' ');
    axios
      .get(`http://localhost:8001/shop/product/${formattedProduct}`)
      .then((res) => {
        console.log(res.data)
        setProductInfo(res.data)
      })
      .catch((error) => {
        console.error('Error fetching product info:', error);
      });
    }
  }, [product])

  return (
    <div className="main-page">
         <div className="product-details">
        <h2>{productInfo.name}</h2>
        <p>Description: {productInfo.description}</p>
        <p>Price: ${productInfo.price}</p>
        <p>Category: {productInfo.category}</p>
      </div>
      <div className="product-image">
        <img src={productInfo.imageURL} alt={productInfo.name} />
      </div>
    </div>
  );
}

export default ProductPage;