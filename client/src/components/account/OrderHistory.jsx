import React, { useEffect, useState } from 'react';
import './AccountPage.scss'; // You can style this component using CSS
import Banner from '../../assets/Supr-Skin-facebook-cover-double.jpg';
import Logo from '../../assets/SuprSkin.png';
import axios from 'axios'
import { useCart } from '../../providers/cartContext';
import CartItem from '../cart/CartItem';
import { useContext } from 'react';
import { loginContext } from '../../providers/userContext';

function OrderHistory() {
  const { currentUserInfo, currentUser, login, logout } = useContext(loginContext);
  const [orderHistory, setOrderHistory] = useState();

      useEffect(() => {
        currentUser && (
            axios
            .get(`http://localhost:8001/account/order/history`)
            .then(history => {
              setOrderHistory(history);
            })
            .catch(error => {
              console.error('Error fetching order history:', error);
            })
        )
      }, [user]);

  return (
    user && (
        <div>
          <h3>Order History</h3>
          {orderHistory.length > 0 ? (
            <ul>
              {orderHistory.map(order => (
                <li key={order.orderId}>
                  <div>Order ID: {order.orderId}</div>
                  <div>Date: {order.date}</div>
                  <div>Total Price: ${order.totalPrice.toFixed(2)}</div>
                  <div>Status: {order.status}</div>
                  {/* Display more order details if needed */}
                </li>
              ))}
            </ul>
          ) : (
            <p>No order history available.</p>
          )}
          </div>
  )
  )
          }

export default OrderHistory;