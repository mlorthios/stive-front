import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Button = (props) => {
  const { onClick, children, variant } = props;

  return (
    <button
      onClick={onClick}
      className={clsx(
        'px-[20px] py-[10px] text-[#FFFFFF] font-bold rounded-default',
        variant === 'blue' && 'bg-bluestive'
      )}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['blue', 'default'])
};

export default Button;
