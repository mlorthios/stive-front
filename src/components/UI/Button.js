import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { onClick, children } = props;

  return <button onClick={onClick}>{children}</button>;
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func
};

export default Button;