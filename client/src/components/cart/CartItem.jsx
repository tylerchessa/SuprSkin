import React, { useEffect, useState } from 'react';
import './CartItem.scss';
import { useCart } from '../../providers/cartContext';

function CartItem({ item }) {
    const { cartState, cartDispatch } = useCart();
    const totalPrice = item.price * item.quantity;
  
    // function calculateTotalPrice(items) {
    //     return items.reduce((total, item) => total + item.price * item.quantity, 0);
    //   }

      
    return (
        item && (
          <tr>
          <td>{item.product_name}</td>
          <td>{item.product_description}</td>
          <td>{item.quantity}</td>
          <td>${item.product_price}</td>
        </tr>

// .toFixed(2)

        // <div className="cart-item">
        //   <div className="item-content">
        //     <div className="item-image">
        //       <img src={item.imageURL} alt={item.name} />
        //     </div>
        //     <div className="item-details">
        //       <h3>{item.name}</h3>
        //       <p>{item.description}</p>
        //     </div>
        //     <div className="item-quantity">
        //       <p>Quantity: {item.quantity}</p>
        //     </div>
        //     <div className="item-price">
        //       <p>Price: ${item.price}</p>
        //       <p>Total: ${totalPrice.toFixed(2)}</p>
        //     </div>
        //   </div>
        //   {/* Add remove item, increase, and decrease quantity buttons */}
        // </div>
        )
      );
  }


export default CartItem;