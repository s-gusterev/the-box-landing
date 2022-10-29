import React from 'react';
import logo from '../../assets/logo.svg';
import './Logo.css';

const Logo = () => {
  return (
    <a href='#' className='logo'>
      <img src={logo} alt='' className='logo__img' />
    </a>
  );
};

export default Logo;
