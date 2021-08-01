import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({
  color, children, block, className, iconOnly,
}) => {
  const btnColor = `btn--${color}`;
  const iconOnlyClass = iconOnly ? 'btn__icon-only' : '';

  return (
    <button className={`btn ${btnColor} ${block && 'btn--block'} ${className} ${iconOnlyClass}`} type="button">
      {children}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.oneOf(['primary', 'danger']),
  children: PropTypes.node,
  block: PropTypes.bool,
  iconOnly: PropTypes.bool,
  className: PropTypes.string,
};

Button.defaultProps = {
  color: 'primary',
  children: null,
  block: false,
  iconOnly: false,
  className: '',
};

export default Button;
