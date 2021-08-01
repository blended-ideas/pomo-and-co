import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({
  color, children, block, className, iconOnly, onClick,
}) => {
  const btnColor = `btn--${color}`;
  const iconOnlyClass = iconOnly ? 'btn__icon-only' : '';

  return (
    <button
      className={`btn ${btnColor} ${block && 'btn--block'} ${className} ${iconOnlyClass}`}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.oneOf(['primary', 'danger', 'gray']),
  children: PropTypes.node,
  block: PropTypes.bool,
  iconOnly: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  color: 'primary',
  children: null,
  block: false,
  iconOnly: false,
  className: '',
  onClick: () => {},
};

export default Button;
