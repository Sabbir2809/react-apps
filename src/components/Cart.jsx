import React from 'react';
import Button from './Button';

const Cart = ({ cartItems, onClear }) => {
  return (
    <div>
      <h4>Cart: </h4>
      <ul>
        {cartItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <Button onClick={onClear} color='danger'>
        Clear
      </Button>
    </div>
  );
};

export default Cart;
