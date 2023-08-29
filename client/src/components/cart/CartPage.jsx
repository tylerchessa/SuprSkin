import React, { useEffect, useState } from 'react';
import './CartPage.scss'; // You can style this component using CSS
import Banner from '../../assets/Supr-Skin-facebook-cover-double.jpg';
import Logo from '../../assets/SuprSkin.png';
import axios from 'axios'
import { useCart } from '../../providers/cartContext';
import CartItem from './CartItem';
import { useContext } from 'react';
import { loginContext } from '../../providers/userContext';

function CartPage() {
  const { currentUserInfo, currentUser, login, logout } = useContext(loginContext);
  const { cartState } = useCart();
  const [allProductInfo, setAllProductInfo] = useState();
  const [cartInfo, setCartInfo] = useState();


  console.log(cartState)
    useEffect(() => {
      axios
        .get(`http://localhost:8001/cart`)
        .then((res) => {
          console.log(res.data)
          setCartInfo(res.data)
        })
        .catch((error) => {
          console.error('Error fetching cart info:', error);
        });
    }, [])

  return (
    <div className="main-page">
      <div className='category-banner-holder'>
        <img src={Banner} alt="SuprSkin banner" className='banner' />
        <div className="center-overlay">
          <p>cart</p>
        </div>
      </div>
      <div className='cart-contents'>
      <h2>Your Cart</h2>
      {cartState && cartState.items.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default CartPage;