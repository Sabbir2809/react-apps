import React from 'react';

const NavBar = ({ cartItemsCount }) => {
  return (
    <div>
      <h4>NavBar: {cartItemsCount.length}</h4>
    </div>
  );
};

export default NavBar;
