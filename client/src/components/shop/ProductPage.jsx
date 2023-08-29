import React, { Profiler, useEffect, useState } from 'react';
import './ProductPage.scss'; // You can style this component using CSS
import Banner from '../../assets/Supr-Skin-facebook-cover-double.jpg';
import Logo from '../../assets/SuprSkin.png';
import axios from 'axios'
import { useParams } from 'react-router-dom'; 
import { useCart } from '../../providers/cartContext';


function ProductPage() {
  const { cartDispatch } = useCart();
  const { product } = useParams();
  const [productInfo, setProductInfo] = useState();
  const [productImages, setProductImages] = useState();
  const [productBenefits, setProductBenefits] = useState();
  const [productIngredients, setProductIngredients] = useState();

  useEffect(() => {
    if (product) {
      const formattedProduct = product.replace(/-/g, ' ');
      axios
        .get(`http://localhost:8001/shop/product/${formattedProduct}`)
        .then((res) => {
          setProductInfo(res.data.product[0])
          setProductImages(res.data.photos)
          setProductBenefits(res.data.productBenefits)
          setProductIngredients(res.data.productIngredients)
        })
        .catch((error) => {
          console.error('Error fetching product info:', error);
        });
    }
  }, [product])

  const handleAddToCart = (product) => {
    // Dispatch the ADD_ITEM action to add the selected product to the cart
    cartDispatch({
      type: 'ADD_ITEM',
      payload: product,
    });
  };

  return (
    <div className="main-page">
       <div className='banner-holder'>
        <img src={Banner} alt="SuprSkin banner" className='banner' />
      </div>
      <div className="product-details-modal">
    {productInfo && (
      <div className="product-details">
        <h2>{productInfo.name}</h2>
        <p>Description: {productInfo.description}</p>
        <p>Price: ${productInfo.price}</p>
        <p>Category: {productInfo.category_id}</p>
        <div className="add-to-cart-button" onClick={() => handleAddToCart(productInfo)}>
      Add to Cart
    </div>
      </div>
    )}
  </div>
          <div className="product-info">
    <div className="product-image">
      {productInfo && <img src={Logo} alt={productInfo.name} />}
    </div>
    <div className="benefits">
      <h3>Benefits:</h3>
      <ul>
        {productBenefits && productBenefits.map(benefit => {
          return <li key={benefit.id}>{benefit.benefit_description}</li>
        })}
      </ul>
    </div>
  </div>
  </div>
  );
}

export default ProductPage;