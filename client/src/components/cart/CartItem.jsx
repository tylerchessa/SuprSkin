import React, { Fragment, useEffect, useState } from 'react';
import './CartItem.scss';
import { useCart } from '../../providers/cartContext';

function CartItem({ item }) {
  const [quantityUpdate, setQuantityUpdate] = useState(false)
  const [quantity, setQuantity] = useState(item.quantity)
  const { cartState, cartDispatch } = useCart();
  const totalPrice = item.price * item.quantity;


  // function calculateTotalPrice(items) {
  //     return items.reduce((total, item) => total + item.price * item.quantity, 0);
  //   }

  const handleQuantityReset = () => {
    setQuantity(item.quantity)
    setQuantityUpdate(false)
  };

  const handleUpdateCart = (productId) => {
    // ... (same as before)
  };

  const handleIncreaseQuantity = () => {
    setQuantity(prev => prev + 1)
    setQuantityUpdate(true)
  };

  const handleDecreaseQuantity = () => {
    setQuantity(prev => prev - 1)
    setQuantityUpdate(true)
  };

  return (
    item && (
      <tr >
        <td>{item.product_name}</td>
        <td>{item.product_description}</td>
        <td className='quantity-column'>
          <div className="quantity-container" >
            <button  onClick={() => handleDecreaseQuantity(item.product_id)}>-</button>
            <div className='cart-item-quantity'>{quantity}</div>
            <button onClick={() => handleIncreaseQuantity(item.product_id)}>+</button>
          </div>
          {quantityUpdate && (<div className='update-cart-holder'>
            <div className="cancel-cart-button" onClick={handleQuantityReset}>
              X
            </div>
            <div  className="update-cart-button" onClick={handleUpdateCart}>
              Update Cart
            </div>
            </div>
          )}
        </td>
        {/* <td>{item.quantity}</td> */}
        <td>${item.product_price}</td>
        <td>${(item.product_price * quantity).toFixed(2)}</td>
      </tr>
    )
  );
}

export default CartItem;