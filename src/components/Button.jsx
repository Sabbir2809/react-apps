import React from 'react';

const Button = ({ color = 'primary', children, onClick }) => {
  return (
    <div>
      <button className={`btn btn-${color}`} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
