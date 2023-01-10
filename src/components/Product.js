import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Product = (props) => {
  const { onClick, children, variant } = props;

  return (
    <div>
      <div>Name: {name}</div>
      <div>Stock: {children}</div>
      <button onClick={onClick}>Update Stock</button>
    </div>
  );
};

Product.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['blue', 'default'])
};

export default Product();
