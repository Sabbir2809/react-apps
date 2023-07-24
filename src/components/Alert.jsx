import React from 'react';

const Alert = ({ children, onClose }) => {
  return (
    <div className='alert alert-primary alert-dismissible'>
      {children}
      <button onClick={onClose} type='button' className='btn-close' data-ds-dismiss='alert'></button>
    </div>
  );
};

export default Alert;
