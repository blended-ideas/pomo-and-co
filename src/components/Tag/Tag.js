import React from 'react';
import PropTypes from 'prop-types';
import './Tag.scss';

const Tag = ({ color, children }) => {
  const tagColor = `tag--${color}`;
  return (
    <span className={`tag ${tagColor}`}>
      {children}
    </span>
  );
};

Tag.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary', 'black']),
  children: PropTypes.node,
};

Tag.defaultProps = {
  children: null,
  color: 'primary',
};

export default Tag;
