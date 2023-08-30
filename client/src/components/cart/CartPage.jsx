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
  const [totalPrice, setTotalPrice] = useState(0);

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
    }, [])
    

    console.log('cartInfo', cartInfo)

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
      <table className="cart-table">
  <thead>
    <tr>
      <th>Product Name</th>
      <th>Product Description</th>
      <th>Quantity</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
      {cartInfo && cartInfo.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
         </tbody>
</table>
<div className="total-price">Total Price: ${totalPrice.toFixed(2)}</div>
      </div>
    </div>
  );
}

export default CartPage;