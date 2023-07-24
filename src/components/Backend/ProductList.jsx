import React, { useEffect, useState } from 'react';

const ProductList = ({ category }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log('Fetching Products in', category);
    setProducts(['Clothing', 'Household']);
  }, [category]);

  return (
    <div>
      <h1 className='text-center text-success mt-2'>Product List</h1>
    </div>
  );
};

export default ProductList;
