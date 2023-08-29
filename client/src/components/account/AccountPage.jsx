import React, { useEffect, useState } from 'react';
import './AccountPage.scss'; // You can style this component using CSS
import Banner from '../../assets/Supr-Skin-facebook-cover-double.jpg';
import Logo from '../../assets/SuprSkin.png';
import axios from 'axios'
import { useCart } from '../../providers/cartContext';
import CartItem from '../cart/CartItem';
import { useContext } from 'react';
import { loginContext } from '../../providers/userContext';
import Login from './Login';

function AccountPage() {
  const { currentUserInfo, currentUser, login, logout } = useContext(loginContext);
  const { cartState } = useCart();
  const [allProductInfo, setAllProductInfo] = useState();
  const [accountInfo, setAccountInfo] = useState();


    useEffect(() => {
        currentUser && (
      axios
        .get(`http://localhost:8001/account`)
        .then((res) => {
          console.log(res.data)
          setAccountInfo(res.data)
        })
        .catch((error) => {
          console.error('Error fetching account info:', error);
        })
        )
    }, [currentUser])

  return (
    <div className="main-page">
      <div className='category-banner-holder'>
        <img src={Banner} alt="SuprSkin banner" className='banner' />
        <div className="center-overlay">
          <p>Account</p>
        </div>
      </div>
      {currentUser ? 
      <div className='account-contents'>
      <h2>Your Account</h2>
     
      </div> 
      : 
      <Login />
}
    </div>
  );
}

export default AccountPage;