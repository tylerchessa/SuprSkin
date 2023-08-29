import React, { useEffect, useState } from 'react';
import './CartItem.scss';
import { useCart } from '../../providers/cartContext';

function CartItem({ item }) {
    const { cartState, cartDispatch } = useCart();
    const totalPrice = item.price * item.quantity;
  
    function calculateTotalPrice(items) {
        return items.reduce((total, item) => total + item.price * item.quantity, 0);
      }

      
    return (
        item && (
            <div>
            {cartState.items.map(item => (
              <div key={item.id}>
                <p>{item.name}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => cartDispatch({ type: 'INCREASE_QUANTITY', payload: item })}>+</button>
                <button onClick={() => cartDispatch({ type: 'DECREASE_QUANTITY', payload: item })}>-</button>
                <button onClick={() => cartDispatch({ type: 'REMOVE_ITEM', payload: item })}>Remove</button>
              </div>
            ))}
            <p>Total Price: ${calculateTotalPrice(cartState.items)}</p>
          </div>

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