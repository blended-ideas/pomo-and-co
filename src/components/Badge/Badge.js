import React from 'react';
import PropTypes from 'prop-types';
import './Badge.scss';

const Badge = ({ color, children }) => {
  const badgeColor = `badge-${color}`;
  return (
    <span className={`badge ${badgeColor}`}>
      {children}
    </span>
  );
};

Badge.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary']),
  children: PropTypes.oneOf(['primary', 'secondary']),
};

Badge.defaultProps = {
  children: null,
  color: 'primary',
};

export default Badge;
