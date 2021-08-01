import React from 'react';
import PropTypes from 'prop-types';
import './Badge.scss';

const Badge = ({ color, text }) => {
  const badgeColor = `badge--${color}`;
  return (
    <span className={`badge ${badgeColor}`}>
      {text}
    </span>
  );
};

Badge.propTypes = {
  color: PropTypes.oneOf(['primary', 'danger']),
  text: PropTypes.string,
};

Badge.defaultProps = {
  text: '',
  color: 'primary',
};

export default Badge;
