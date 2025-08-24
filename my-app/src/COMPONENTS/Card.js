import React from 'react';

const Card = ({ title, children }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
};

export default Card;