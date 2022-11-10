import React from 'react';
import logo from '../../assets/logo.svg';
import './Logo.css';

const Logo = ({ className = '' }) => {
  return (
    <a href='#' className={`logo ${className}`}>
      <img src={logo} alt='' className='logo__img' />
    </a>
  );
};

export default Logo;
