import React from 'react';

import './layout.css';
import Header from '../Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;