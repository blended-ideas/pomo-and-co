import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ color, children, block }) => {
  const btnColor = `btn--${color}`;

  return (
    <button className={`btn ${btnColor} ${block && 'btn--block'}`} type="button">
      {children}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.oneOf(['primary', 'danger']),
  children: PropTypes.node,
  block: PropTypes.bool,
};

Button.defaultProps = {
  color: 'primary',
  children: null,
  block: false,
};

export default Button;
