import React, { useEffect, useRef, useState } from 'react';
import ProductList from './ProductList';
import UsersList from './UsersList';

const connect = () => {
  console.log('Connecting');
};

const disconnect = () => {
  console.log('Disconnecting');
};

const UseEffect = () => {
  const refInput = useRef(null);

  useEffect(() => {
    connect();
    // side effect
    if (refInput.current) refInput.current.focus();
    // clean up (stop)
    return () => disconnect();
  });

  useEffect(() => {
    document.title = 'My App';
  });

  const [category, setCategory] = useState('');

  return (
    <div>
      <input ref={refInput} type='text' className='form-control' />

      <ProductList category={category} />

      <select className='form-select' onChange={(e) => setCategory(e.target.value)}>
        <option value=''></option>
        <option value='Clothing'>Clothing</option>
        <option value='Household'>Household</option>
      </select>

      <UsersList />
    </div>
  );
};

export default UseEffect;
