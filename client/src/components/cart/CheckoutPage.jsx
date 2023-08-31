import React, { useEffect, useState } from 'react';
import './CheckoutPage.scss'; // You can style this component using CSS
import Banner from '../../assets/Supr-Skin-facebook-cover-double.jpg';
import Logo from '../../assets/SuprSkin.png';
import axios from 'axios'
import { useCart } from '../../providers/cartContext';
import CartItem from './CartItem';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { loginContext } from '../../providers/userContext';

function CheckoutPage() {
  const navigate = useNavigate();
  const { currentUserInfo, currentUser, login, logout } = useContext(loginContext);
  const { cartState } = useCart();
  const [allProductInfo, setAllProductInfo] = useState();
  const [cartInfo, setCartInfo] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleCheckoutClick = () => {
    navigate('/checkout')
  }

  const calculateTotalPrice = (items) => {
    const total = items.reduce((sum, item) => sum + item.product_price * item.quantity, 0);
    setTotalPrice(total);
  };

  console.log(currentUserInfo)
  useEffect(() => {
    currentUserInfo && (
      axios
        .get(`http://localhost:8001/cart/${currentUserInfo.id}`)
        .then((res) => {
          console.log(res.data)
          setCartInfo(res.data)
          calculateTotalPrice(res.data);
        })
        .catch((error) => {
          console.error('Error fetching cart info:', error);
        })
    )
  }, [currentUserInfo])

  console.log('cartInfo', cartInfo)

  return (
    <div className="main-page">
      <div className='category-banner-holder'>
        <img src={Banner} alt="SuprSkin banner" className='banner' />
        <div className="center-overlay">
          <p>checkout</p>
        </div>
      </div>
      <div className='checkout-contents'>
        <h2>Your Cart</h2>
        <div className="total-price">Total Price: ${totalPrice.toFixed(2)}</div>
        <div className='checkout-holder'>
        <div className='checkout-button' onClick={handleCheckoutClick}>Checkout</div>
      </div>
      </div>
    </div>
  );
}

export default CheckoutPage;