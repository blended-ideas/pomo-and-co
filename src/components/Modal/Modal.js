import React from 'react';
import PropTypes from 'prop-types';
import './Modal.scss';

const Modal = ({ children }) => (
  <div className="modal">
    {children}
  </div>
);

Modal.propTypes = {
  children: PropTypes.node,
};

Modal.defaultProps = {
  children: null,
};

export default Modal;
