import React, { createContext, useContext, useReducer } from 'react';

// Define the initial state for the cart
const initialState = {
  items: [], // An array to hold cart items
};

// Create the context
const CartContext = createContext();

// Create a custom hook to use the context
export function useCart() {
  return useContext(CartContext);
}

// Define the reducer function to handle cart actions
function cartReducer(state, action) {
    switch (action.type) {
      case 'ADD_ITEM':
        return {
          ...state,
          items: [...state.items, action.payload],
        };
      case 'REMOVE_ITEM':
        const updatedItems = state.items.filter(item => item.id !== action.payload.id);
        return {
          ...state,
          items: updatedItems,
        };
      case 'INCREASE_QUANTITY':
        return {
          ...state,
          items: state.items.map(item => {
            if (item.id === action.payload.id) {
              return { ...item, quantity: item.quantity + 1 };
            }
            return item;
          }),
        };
      case 'DECREASE_QUANTITY':
        return {
          ...state,
          items: state.items.map(item => {
            if (item.id === action.payload.id && item.quantity > 1) {
              return { ...item, quantity: item.quantity - 1 };
            }
            return item;
          }),
        };
      default:
        return state;
    }
  }
  
  

// Create the CartProvider component to wrap your app with the context
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cartState: state, cartDispatch: dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
