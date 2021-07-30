import React from 'react';
import PropTypes from 'prop-types';
import './Layout.scss';
import Sidebar from './Sidebar/Sidebar';

const Layout = ({ children }) => (
  <main className="layout">
    <Sidebar />
    <div className="layout__content">
      {children}
    </div>
  </main>
);

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
