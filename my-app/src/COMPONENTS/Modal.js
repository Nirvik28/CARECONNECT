import React from 'react';

const Modal = ({ children }) => {
  return (
    <div style={{ border: '2px solid black', padding: '20px' }}>
      {children}
    </div>
  );
};

export default Modal;